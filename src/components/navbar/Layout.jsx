import { Link } from "react-router-dom";
import { ChevronDown, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import LogoSvg from "../../assets/favicon.svg";
import { runtimes } from "../../data/runtimes";

const runtimeLinks = [
  {
    name: "Spring Boot",
    href: "https://docs.retreever.dev/spring-boot/get-started",
  },
  { name: "NestJS", href: "https://docs.retreever.dev/nestjs/get-started" },
  {
    name: "ExpressJs",
    runtimeName: "ExpressJS",
    href: "https://docs.retreever.dev/expressjs/get-started",
  },
  {
    name: "FastAPI",
    href: "https://docs.retreever.dev/fastapi/get-started",
  },
  { name: "Django", href: "https://docs.retreever.dev/django/get-started" },
  {
    name: "Asp.Net",
    runtimeName: "ASP .NET",
    href: "https://docs.retreever.dev/asp-net/get-started",
  },
  { name: "Gin", href: "https://docs.retreever.dev/gin/get-started" },
].map((runtimeLink) => ({
  ...runtimeLink,
  runtime: runtimes.find(
    (runtime) => runtime.name === (runtimeLink.runtimeName ?? runtimeLink.name)
  ),
}));

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full text-text-title">
      <div
        className={`w-full py-2 transition-all duration-300 ${
          scrolled
            ? "bg-app-background/25 shadow-[0_14px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl"
            : "bg-transparent shadow-none backdrop-blur-none"
        }`}
      >
        <div className="site-nav__content px-2 sm:px-5 md:px-0">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <Link to="/" className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <img
                src={LogoSvg}
                alt="Retreever Logo"
                className="h-7 w-7 shrink-0 object-contain sm:h-9 sm:w-9"
              />

              <h1 className="text-[16px] font-bold leading-none tracking-[-0.04em] sm:text-[20px]">
                Retreever
              </h1>
            </Link>

            <div className="hidden items-center justify-center md:flex">
              <div className="flex items-center gap-8 text-[16px] font-medium text-text-title lg:gap-10">
                <div className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 py-2 transition-colors duration-300 hover:text-primary-blue group-focus-within:text-primary-blue"
                  >
                    Runtimes
                    <ChevronDown
                      strokeWidth={2}
                      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  </button>

                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="absolute inset-x-0 top-0 h-4" />
                    <div className="grid gap-1 rounded-xl bg-app-background p-2 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                      {runtimeLinks.map(({ name, href, runtime }) => {
                        const Icon = runtime?.icon;

                        return (
                          <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] text-text-title transition-colors duration-200 hover:bg-surface-1 hover:text-primary-blue"
                          >
                            {Icon && (
                              <Icon
                                className={`text-lg ${runtime.color}`}
                                aria-hidden="true"
                              />
                            )}
                            <span>{name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <a
                  href="https://github.com/retreever-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 transition-colors duration-300 hover:text-primary-blue"
                >
                  GitHub
                </a>

                <Link
                  to="/security"
                  className="py-2 transition-colors duration-300 hover:text-primary-blue"
                >
                  Security
                </Link>

                <a
                  href="https://docs.retreever.dev/help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 transition-colors duration-300 hover:text-primary-blue"
                >
                  Help
                </a>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 sm:gap-3">
              <a
                href="https://docs.retreever.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-text-title/90 px-2.5 py-1 text-[12px] text-text-title transition-colors duration-300 hover:bg-text-title hover:text-app-background sm:px-5 sm:text-[14px] md:px-6 md:py-2 md:text-[15px]"
              >
                Get Started
              </a>

              <div className="relative md:hidden">
                <button
                  className="flex h-10 w-6 items-center justify-center rounded-lg text-text-title transition-colors duration-300 hover:bg-text-title/8 sm:w-10"
                  onClick={() => setOpen(!open)}
                  type="button"
                  aria-expanded={open}
                  aria-label="Open navigation menu"
                >
                  <MoreVertical className="h-5 w-5" strokeWidth={2.2} />
                </button>

                {open && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl bg-app-background p-2 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                    <div className="group relative">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-text-title transition-colors duration-200 hover:bg-surface-1 hover:text-primary-blue"
                      >
                        <span>Runtimes</span>
                        <ChevronDown strokeWidth={2} className="h-4 w-4" />
                      </button>

                      <div className="mt-1 grid gap-1 rounded-lg bg-surface-1/60 p-1">
                        {runtimeLinks.map(({ name, href }) => (
                          <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2 text-[14px] text-text-title transition-colors duration-200 hover:bg-app-background hover:text-primary-blue"
                          >
                            {name}
                          </a>
                        ))}
                      </div>
                    </div>

                    <a
                      href="https://github.com/retreever-org"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="mt-1 block rounded-lg px-3 py-2.5 text-text-title transition-colors duration-200 hover:bg-surface-1 hover:text-primary-blue"
                    >
                      GitHub
                    </a>

                    <Link
                      to="/security"
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-text-title transition-colors duration-200 hover:bg-surface-1 hover:text-primary-blue"
                    >
                      Security
                    </Link>

                    <a
                      href="https://docs.retreever.dev/help"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-text-title transition-colors duration-200 hover:bg-surface-1 hover:text-primary-blue"
                    >
                      Help
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Layout;
