import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import LogoSvg from "../../assets/favicon.svg";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 overflow-hidden text-white transition-all duration-700 ${
        scrolled
          ? "bg-black/10 backdrop-blur-xl"
          : "bg-black"
      }`}
    >
      {/* Hero Glow */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-gradient-to-r
        from-[#0672FF]/25
        via-[#0672FF]/10
        to-[#00C5AE]/25
        blur-[140px]
        transition-all duration-700 ease-out
        ${
          scrolled
            ? "w-[850px] h-[220px] opacity-35"
            : "w-[1200px] h-[350px] opacity-100"
        }`}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={LogoSvg}
              alt="Retreever Logo"
              className="w-12 h-12 object-contain"
            />

            <h1 className="text-2xl font-bold tracking-tight">
              Retreever
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-lg font-medium">
            <Link
              to="/about"
              className="hover:text-gray-300 transition-all duration-300"
            >
              About
            </Link>

            <Link
              to="/runtime"
              className="flex items-center gap-1 hover:text-gray-300 transition-all duration-300"
            >
              Runtimes
              <ChevronDown size={18} />
            </Link>

            <a
              href="https://github.com/retreever-org/retreever-ui/blob/main/SECURITY_AND_PRIVACY_POSTURE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-all duration-300"
            >
              Security
            </a>

            <a
              href="https://github.com/retreever-org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-all duration-300"
            >
              Github
            </a>

            <a
              href="https://docs.retreever.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-5">
            <div className="flex flex-col gap-5 text-lg font-medium">
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>

              <Link to="/runtime" onClick={() => setOpen(false)}>
                Runtimes
              </Link>

              <a
                href="https://github.com/retreever-org/retreever-ui/blob/main/SECURITY_AND_PRIVACY_POSTURE.md"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Security
              </a>

              <a
                href="https://github.com/retreever-org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Github
              </a>

              <a
                href="https://docs.retreever.dev/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="border border-white/20 bg-white/5 px-5 py-3 rounded-xl text-center"
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