import { ExternalLink, Package } from "lucide-react";
import LogoSvg from "../../assets/favicon.svg";

const currentYear = new Date().getFullYear();

const footerSections = [
  {
    title: "Studio",
    links: [
      { label: "Runtime Native API Studio", href: "#studio" },
      { label: "Auto Generated Docs", href: "#studio" },
      { label: "Test Ready Endpoints", href: "#studio" },
      { label: "Environment Automation", href: "#studio" },
      { label: "Global Authorization", href: "#studio" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.retreever.dev/" },
      { label: "Experience", href: "https://exp.retreever.dev" },
      { label: "Security", href: "/security" },
      { label: "Help", href: "https://docs.retreever.dev/help" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { label: "GitHub", href: "https://github.com/retreever-org" },
      {
        label: "Maven Central",
        href: "https://mvnrepository.com/artifact/dev.retreever/retreever",
      },
      {
        label: "Contributing",
        href: "https://docs.retreever.dev/contribution/spring-boot",
      },
      { label: "MIT License", href: "https://opensource.org/license/mit" },
    ],
  },
];

const connectLinks = [
  {
    label: "hello@retreever.dev",
    href: "mailto:hello@retreever.dev",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/retreever/",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    href: null,
    icon: "youtube",
    note: "coming soon",
  },
];

const badges = [
  "OSS",
  "MIT Licensed",
  "No telemetry by default",
  "Same-origin Studio",
];

const isExternalLink = (href) => href?.startsWith("http");

const FooterLink = ({ link }) => {
  const external = isExternalLink(link.href);

  return (
    <a
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-1.5 text-sm text-text-mute transition-colors duration-200 hover:text-primary-green"
    >
      <span>{link.label}</span>
      {external && (
        <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-80" />
      )}
    </a>
  );
};

const ConnectIcon = ({ name }) => {
  const className = "h-4 w-4 shrink-0";

  if (name === "mail") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8h4.28v14H.36V8Zm7.72 0h4.1v1.92h.06c.57-1.08 1.96-2.22 4.04-2.22 4.32 0 5.12 2.84 5.12 6.54V22h-4.27v-6.88c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.79-2.64 3.63v7H8.08V8Z" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3.03 3.03 0 0 0-2.13-2.14C19.49 3.56 12 3.56 12 3.56s-7.49 0-9.37.5A3.03 3.03 0 0 0 .5 6.2 31.58 31.58 0 0 0 0 12a31.58 31.58 0 0 0 .5 5.8 3.03 3.03 0 0 0 2.13 2.14c1.88.5 9.37.5 9.37.5s7.49 0 9.37-.5a3.03 3.03 0 0 0 2.13-2.14A31.58 31.58 0 0 0 24 12a31.58 31.58 0 0 0-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer__content relative overflow-hidden border-t border-border-mute/35">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary-blue/8 blur-[120px]" />

      <div className="relative z-10 px-4 pb-10 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:gap-18">
          <div className="flex min-w-0 flex-col items-start">
            <div className="flex items-center gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.35)]">
                <img
                  src={LogoSvg}
                  alt="Retreever Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <h2 className="text-2xl font-bold leading-none text-text-title">
                  Retreever
                </h2>
                <p className="mt-1 text-sm text-text-mute">
                  Runtime Native API Studio
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-lg text-base leading-7 text-text-mute">
              Embedded API documentation, testing, and workflow tooling
              generated directly from your running application. Always live,
              always aligned with the runtime.
            </p>

            <div className="mt-7 w-full max-w-lg rounded-2xl border border-border-mute/55 bg-surface-1/70 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-blue/25 bg-primary-blue/10 text-primary-blue">
                  <Package className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-title">
                    Embedded Studio. Same-origin. No Retreever account required.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-mute">
                    Spring Boot is available now. Add{" "}
                    <code className="rounded-md border border-border-mute/60 bg-app-background px-1.5 py-0.5 font-mono text-xs text-text-primary">
                      dev.retreever:retreever
                    </code>
                    , run your app, and open{" "}
                    <code className="rounded-md border border-border-mute/60 bg-app-background px-1.5 py-0.5 font-mono text-xs text-text-primary">
                      /retreever
                    </code>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 max-w-[58rem] grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,11rem))] xl:gap-12">
            {footerSections.map((section) => (
              <div key={section.title} className="min-w-0">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-title">
                  {section.title}
                </h3>

                <div className="mt-5 flex flex-col gap-3.5">
                  {section.links.map((link) => (
                    <FooterLink key={`${section.title}-${link.label}`} link={link} />
                  ))}
                </div>
              </div>
            ))}

            <div className="min-w-0">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-title">
                Connect
              </h3>

              <div className="mt-5 flex flex-col gap-3.5">
                {connectLinks.map(({ label, href, icon, note }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target={isExternalLink(href) ? "_blank" : undefined}
                      rel={isExternalLink(href) ? "noopener noreferrer" : undefined}
                      className="inline-flex min-w-0 items-center gap-2.5 text-sm text-text-mute transition-colors duration-200 hover:text-primary-green"
                    >
                      <ConnectIcon name={icon} />
                      <span className="min-w-0 break-words">{label}</span>
                    </a>
                  ) : (
                    <span
                      key={label}
                      className="inline-flex min-w-0 flex-wrap items-center gap-2.5 text-sm text-text-mute/70"
                    >
                      <ConnectIcon name={icon} />
                      <span>{label}</span>
                      <span className="rounded-full border border-border-mute/50 px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] text-text-mute/60">
                        {note}
                      </span>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border-mute/45 bg-text-title/4 px-3 py-1 text-xs font-medium text-text-mute"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="text-sm text-text-mute/70">
            &copy; {currentYear} Retreever. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
