const securityContent = `# Retreever Studio: Security and Privacy Posture

Retreever Studio is an embedded API documentation, testing, and workflow workspace served by the host application. It runs in the same browser origin as the host application so authorized users can inspect generated API documentation, prepare requests, execute APIs, view responses, and use environment variables during testing.

This document describes Retreever Studio runtime behavior: browser storage, route access, authentication cookies, response rendering, automation, and same-origin boundaries. Repository release controls such as signing, SBOMs, checksums, and dependency scanning are handled separately.

Retreever Studio follows three product principles:

1. Secure defaults.
2. Minimal browser persistence unless persistence is explicitly enabled.
3. Inert rendering for untrusted documentation, request, and response content.

## Product Commitments

Retreever Studio makes these runtime commitments:

- Retreever OSS Studio requires no Retreever account, remote Retreever service, telemetry service, or update service.
- Retreever OSS Studio does not transmit generated API documentation, request data, response data, environment values, authentication material, workspace state, or usage telemetry to Retreever-operated infrastructure.
- Studio network activity is limited to same-origin Retreever endpoints, same-origin host API calls explicitly executed by the user, static assets served by the host application, and external links opened by the user.
- API response display/history is runtime-only within Retreever-managed storage. Retreever does not persist response bodies, response headers, status metadata, timing, or displayed cookie/header data.
- Environment key-values are not stored in IndexedDB or localStorage.
- Global Authorization settings are stored in sessionStorage only.
- Retreever-managed authentication tokens are stored in HttpOnly cookies and are not copied into localStorage, sessionStorage, or IndexedDB.
- Server HTML and SVG responses are displayed as inert text/code, not executed as live browser content.
- Generated documentation is rendered as data: text, structured fields, escaped examples, or controlled links.
- Automation is declarative and does not execute user-authored JavaScript.
- Persistent workspace storage is opt-in through \`retreever.studio.storage=indexed-db\`.
- Retreever-specific browser hardening is applied to Retreever routes without changing the host application's global security headers.

## Runtime Access Model

The generated Retreever document is the application contract used by Studio. It can include endpoint groups, paths, methods, request metadata, response metadata, examples, authentication posture, and Studio configuration flags.

The generated document is intended for authorized Studio users. It is not treated as a secret by default, but it can expose API inventory, request shapes, internal route names, examples, and operational assumptions.

When \`retreever.auth.username\` and \`retreever.auth.password\` are configured, Retreever protects the generated document and related data routes with Retreever authentication.

When Retreever authentication is not configured, those routes follow the host application's deployment and access model. Teams can protect access with host application controls, proxy controls, network controls, or disable Retreever where Studio access is not needed:

\`\`\`yaml
retreever:
  enabled: false
\`\`\`

## Storage and Data Handling

Retreever Studio supports two storage modes:

- \`in-memory\`
- \`indexed-db\`

\`in-memory\` is the default. It keeps sensitive working data runtime-scoped where possible and is the expected posture for production-like environments.

\`indexed-db\` enables persistent workspace behavior for local, development, and test environments where users are trusted and the data is appropriate for browser persistence.

| Data category | \`in-memory\` | \`indexed-db\` | Notes |
| --- | --- | --- | --- |
| Active tab order and view state | Persisted without manual request URLs | Persisted | Retreever keeps low-risk continuity data such as tab identity, active tab, selected HTTP method, and active request input view. |
| Generated Retreever document | Not persisted | Persisted | Intended for authorized Studio users. Do not place secrets or real customer data in generated examples. |
| Request URL/header/param/body edits | Not persisted | Persisted | Can contain sensitive test data. Enable only in trusted environments. |
| API responses | Not persisted by Retreever | Not persisted by Retreever | Retreever does not persist response body, headers, status, timing, or displayed cookie/header data. |
| Environment key-values | Not persisted | Session-scoped | Never stored in IndexedDB or localStorage. Runtime-readable while Studio is open. |
| Environment automation definitions | Not persisted | Persisted | Declarative extraction rules only. No JavaScript execution model. |
| Uploaded request files | Not persisted | Persisted | Treat uploaded files as potentially sensitive test inputs. |
| Global Authorization settings | Session-scoped | Session-scoped | Stored in sessionStorage only. Prefer environment placeholders such as \`{{token}}\` instead of raw secret values. |
| Retreever auth tokens | HttpOnly cookies | HttpOnly cookies | Not copied into JavaScript-accessible browser storage. |

Active tab metadata is intentionally separated from request data. In \`in-memory\` mode, Retreever can preserve view continuity while removing manual request URLs, request bodies, response bodies, environment values, and authorization secrets from retained tab data.

Browser-managed state is separate from Retreever-managed workspace storage. Tested host APIs can still set browser cookies through \`Set-Cookie\`, and browsers or intermediaries can cache responses according to the host application's response headers, browser behavior, and request configuration. Retreever does not block tested API cookie flows because cookie-based flows are valid API testing behavior.

The Navbar \`Clear All Data\` action clears Retreever-managed browser data and reloads Studio.

## Browser Execution and Rendering

Retreever renders API responses as inert text/code views. It does not render server HTML or SVG responses as live browser content.

Retreever renders generated documentation as data:

- endpoint names render as text;
- descriptions render as text or controlled formatting;
- examples render as escaped code;
- schemas render as structured data;
- response examples render as inert text/code;
- links use controlled navigation behavior.

Retreever automation is declarative. It supports extraction from response bodies, response headers, or known response paths into environment variables. It does not provide \`eval\`, \`new Function\`, inline JavaScript expressions, or user-authored scripts.

External links opened from Retreever Studio use \`rel="noopener noreferrer"\` where applicable. User-controlled links use safe URL schemes only: \`http:\`, \`https:\`, or safe relative paths. Retreever does not allow \`javascript:\`, \`data:\`, \`vbscript:\`, or \`file:\` schemes in user-rendered links.

Retreever applies browser hardening headers to Retreever Studio routes, including same-origin script restrictions, disabled objects and frames, disabled base URI, same-origin form submissions, MIME sniffing protection, referrer restrictions, and permissions-policy restrictions. These headers are scoped to Retreever routes and do not modify the host application's global browser policy.

Current Studio assets are served from the host application origin. Any future feature that sends Studio data to a third-party service or Retreever-operated service must be explicit, documented, and disabled by default.

## Authentication and Cookie Posture

When Retreever authentication is enabled, authentication state is held in cookies with these attributes:

- \`HttpOnly\`
- \`Secure\` by default
- \`SameSite=Lax\`
- scoped to the Retreever path
- time-limited

Retreever authentication cookies work for HTTPS deployments and common \`localhost\` development setups.

In case a local HTTP-only development setup does not retain the Retreever login session, use this local-only fallback:

\`\`\`yaml
retreever:
  auth:
    secure-cookies: false
\`\`\`

Keep \`retreever.auth.secure-cookies=false\` limited to local development only.

Retreever's cookie settings protect Retreever's own login, refresh, logout, document, and environment routes. They do not change the security behavior of host application APIs tested from Studio. CSRF protection for host application APIs remains the host application's responsibility.

HttpOnly cookies reduce token theft through JavaScript, but they do not make XSS harmless. If malicious JavaScript runs in the same browser origin, it can call same-origin APIs and the browser can attach eligible cookies automatically.

## Environment Guidance

### Local, Development, and Test

Persistent workspace behavior is useful where users are trusted and data is disposable or non-production:

\`\`\`yaml
retreever:
  studio:
    storage: indexed-db
\`\`\`

Use test data and test credentials. Store sensitive values in environment variables and use placeholders in authorization fields.

### Staging and Production-Like

Use runtime-scoped storage where the environment resembles production, uses realistic data, or connects to sensitive downstream systems:

\`\`\`yaml
retreever:
  studio:
    storage: in-memory
\`\`\`

Restrict Studio access to authorized internal users with a legitimate need to inspect and test APIs.

### Production and Sensitive Environments

Where Studio access is not needed, disable Retreever explicitly:

\`\`\`yaml
retreever:
  enabled: false
\`\`\`

Where Studio access is needed, Retreever can protect its own Studio and data routes with runtime-configured username and password authentication:

\`\`\`yaml
retreever:
  enabled: true
  auth:
    username: \${RETREEVER_AUTH_USERNAME}
    password: \${RETREEVER_AUTH_PASSWORD}
    secret: \${RETREEVER_AUTH_SECRET}
\`\`\`

These settings protect Retreever-managed routes. They do not replace the host application's authentication, authorization, network controls, monitoring, logging, or production access policies.

## Remaining Risks and Controls

| Risk | Retreever control | Host/team control |
| --- | --- | --- |
| Same-origin script execution | Retreever reduces persistent browser storage, avoids executable response previews, keeps automation declarative, and applies Retreever-route browser hardening. | Prevent XSS in the host application and restrict Studio access. |
| Persistent workspace data in \`indexed-db\` | Retreever persists only the categories listed in the storage matrix, and API responses remain non-persistent. | Use \`indexed-db\` only in trusted local/dev/test environments. Avoid production tokens in request edits. |
| Runtime environment values | Retreever keeps values out of IndexedDB and localStorage. | Use short-lived test credentials where possible and restrict Studio access. |
| Sensitive generated examples | Retreever renders examples inertly. | Avoid real secrets, customer data, access tokens, API keys, government IDs, and production credentials in generated documentation. |
| Existing browser site data | Retreever provides a \`Clear All Data\` action for Retreever-managed storage. | Clear browser site data when changing an environment to a stricter posture or when the host origin has unrelated stored data. |

Retreever's controls support data minimization, least privilege, and browser attack-surface reduction. They do not replace the host application's responsibility to secure its own APIs, data, users, and deployment environment.`;

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const inlineCodePattern = /`([^`]+)`/g;

const renderInline = (text) => {
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = inlineCodePattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <code
        key={`${match[1]}-${match.index}`}
        className="rounded bg-text-title/8 px-1.5 py-0.5 font-mono text-[0.92em] text-text-primary"
      >
        {match[1]}
      </code>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  inlineCodePattern.lastIndex = 0;
  return parts;
};

const parseBlocks = (content) => {
  const lines = content.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code = [];
      index += 1;

      while (index < lines.length && !lines[index].startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: "code", language, code: code.join("\n") });
      index += 1;
      continue;
    }

    if (line.startsWith("| ")) {
      const rows = [];

      while (index < lines.length && lines[index].startsWith("| ")) {
        rows.push(
          lines[index]
            .slice(1, -1)
            .split("|")
            .map((cell) => cell.trim())
        );
        index += 1;
      }

      blocks.push({
        type: "table",
        header: rows[0],
        rows: rows.slice(2),
      });
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push({ type: "h1", text: line.slice(2) });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3) });
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4) });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items = [];

      while (index < lines.length && lines[index].startsWith("- ")) {
        items.push(lines[index].slice(2));
        index += 1;
      }

      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items = [];

      while (index < lines.length && /^\d+\. /.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\. /, ""));
        index += 1;
      }

      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph = [line];
    index += 1;

    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith("#") &&
      !lines[index].startsWith("- ") &&
      !/^\d+\. /.test(lines[index]) &&
      !lines[index].startsWith("| ") &&
      !lines[index].startsWith("```")
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }

    blocks.push({ type: "p", text: paragraph.join(" ") });
  }

  return blocks;
};

const blocks = parseBlocks(securityContent);
const tocItems = blocks
  .filter((block) => block.type === "h2" || block.type === "h3")
  .map((block) => ({
    id: slugify(block.text),
    text: block.text,
    depth: block.type === "h3" ? 3 : 2,
  }));

const Security = () => {
  return (
    <main className="min-h-screen bg-app-background px-4 pb-24 pt-28 text-text-primary sm:px-6 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="rounded-2xl border border-border-mute bg-surface-1/45 px-5 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:px-8 lg:px-12">
          {blocks.map((block, index) => {
            if (block.type === "h1") {
              return (
                <header key={index} className="mb-10 border-b border-border-mute/70 pb-8">
                  <h1
                    id={slugify(block.text)}
                    className="max-w-4xl text-[38px] font-bold leading-tight tracking-[-0.04em] text-text-title sm:text-[52px]"
                  >
                    {block.text}
                  </h1>
                </header>
              );
            }

            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  id={slugify(block.text)}
                  className="scroll-mt-28 pt-10 text-[28px] font-bold leading-tight tracking-[-0.02em] text-text-title sm:text-[34px]"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3") {
              return (
                <h3
                  key={index}
                  id={slugify(block.text)}
                  className="scroll-mt-28 pt-8 text-[21px] font-semibold leading-tight text-text-primary sm:text-[24px]"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "p") {
              return (
                <p key={index} className="mt-5 max-w-4xl text-[15px] leading-8 text-text-mute sm:text-[16px]">
                  {renderInline(block.text)}
                </p>
              );
            }

            if (block.type === "ul") {
              return (
                <ul key={index} className="mt-5 max-w-4xl list-disc space-y-3 pl-6 text-[15px] leading-7 text-text-mute sm:text-[16px]">
                  {block.items.map((item) => (
                    <li key={item}>{renderInline(item)}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === "ol") {
              return (
                <ol key={index} className="mt-5 max-w-4xl list-decimal space-y-3 pl-6 text-[15px] leading-7 text-text-mute sm:text-[16px]">
                  {block.items.map((item) => (
                    <li key={item}>{renderInline(item)}</li>
                  ))}
                </ol>
              );
            }

            if (block.type === "code") {
              return (
                <div key={index} className="mt-5 max-w-4xl overflow-hidden rounded-xl border border-border-mute bg-app-background">
                  <div className="border-b border-border-mute/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-text-mute">
                    {block.language || "code"}
                  </div>
                  <pre className="overflow-x-auto p-4 text-sm leading-7 text-text-primary">
                    <code>{block.code}</code>
                  </pre>
                </div>
              );
            }

            if (block.type === "table") {
              return (
                <div key={index} className="mt-6 overflow-x-auto rounded-xl border border-border-mute bg-app-background">
                  <table className="min-w-[760px] border-collapse text-left text-sm text-text-mute">
                    <thead className="bg-text-title/5 text-text-primary">
                      <tr>
                        {block.header.map((cell) => (
                          <th key={cell} className="border-b border-border-mute px-4 py-3 font-semibold">
                            {renderInline(cell)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={`${row[0]}-${rowIndex}`} className="border-b border-border-mute/60 last:border-b-0">
                          {row.map((cell, cellIndex) => (
                            <td key={`${cell}-${cellIndex}`} className="align-top px-4 py-3 leading-6">
                              {renderInline(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-border-mute bg-app-background p-5 shadow-[0_20px_70px_rgba(0,0,0,0.32)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-title">
              On this page
            </h2>
            <nav className="mt-5 grid gap-2">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-lg py-2 text-sm leading-5 text-text-mute transition-colors duration-200 hover:bg-surface-1 hover:text-text-title ${
                    item.depth === 3 ? "px-5" : "px-3"
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Security;
