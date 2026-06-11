import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
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

  return (
    <nav className="fixed left-0 top-0 z-50 w-full text-text-title">
      <div className="mx-auto md:my-1 w-[min(1180px,calc(100%-32px))] rounded-lg bg-app-background/25 px-8 py-2 shadow-[0_14px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={LogoSvg}
              alt="Retreever Logo"
              className="h-9 w-9 object-contain"
            />

            <h1 className="text-[20px] font-bold leading-none tracking-[-0.04em]">
              Retreever
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 text-[14px] font-medium tracking-normal md:flex text-text-mute">
            <Link
              to="/about"
              className="transition-colors duration-300 hover:text-text-title"
            >
              About
            </Link>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 transition-colors duration-300 hover:text-text-title group-focus-within:text-text-title"
              >
                Runtimes
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
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
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-text-mute transition-colors duration-200 hover:bg-surface-1 hover:text-text-title"
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

            <Link
              to="/security"
              className="transition-colors duration-300 hover:text-text-title"
            >
              Security
            </Link>

            <a
              href="https://github.com/retreever-org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-text-title"
            >
              Github
            </a>

            <a
              href="https://docs.retreever.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-text-title/90 px-6 py-1 transition-colors duration-300 hover:bg-text-title hover:text-app-background"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-text-title md:hidden"
            onClick={() => setOpen(!open)}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-2 rounded-[18px] bg-app-background/95 p-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-5 text-[14px] font-medium tracking-normal text-text-title">
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="transition-colors duration-300 hover:text-text-sub-title"
              >
                About
              </Link>

              <div className="space-y-3">
                <Link
                  to="/runtime"
                  onClick={() => setOpen(false)}
                  className="block transition-colors duration-300 hover:text-text-sub-title"
                >
                  Runtimes
                </Link>

                <div className="grid gap-2 rounded-xl bg-app-background p-2">
                  {runtimeLinks.map(({ name, href, runtime }) => {
                    const Icon = runtime?.icon;

                    return (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-mute transition-colors duration-200 hover:bg-text-title/8 hover:text-text-title"
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

              <Link
                to="/security"
                onClick={() => setOpen(false)}
                className="transition-colors duration-300 hover:text-text-sub-title"
              >
                Security
              </Link>

              <a
                href="https://github.com/retreever-org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="transition-colors duration-300 hover:text-text-sub-title"
              >
                Github
              </a>

              <a
                href="https://docs.retreever.dev/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-text-title px-5 py-3 text-center transition-colors duration-300 hover:bg-text-title hover:text-app-background"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Layout;
