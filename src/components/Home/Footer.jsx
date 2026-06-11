import LogoSvg from "../../assets/favicon.svg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800 sm:border-none">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-10">
        {/* Top Section */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left justify-between gap-16">
          {/* Left */}
          <div className="max-w-xl flex flex-col items-center xl:items-start">
            {/* Logo */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-13 h-13 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.45)]">
                <img
                  src={LogoSvg}
                  alt="Retreever Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Retreever</h2>

                <p className="text-gray-500 text-sm">
                  Runtime Native API Studio
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 text-gray-400 text-base sm:text-lg leading-relaxed">
              Generate beautiful API documentation, testing workflows,
              authentication flows and runtime metadata automatically from your
              live application.
            </p>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Built for modern developers who want fast integrations, instant
              documentation and zero maintenance overhead.
            </p>

            {/* CTA */}
            <div className="mt-10 flex justify-center xl:justify-start w-full">
              <button className="group relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-500 to-blue-700 px-8 py-4 shadow-[0_0_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105">
                <div className="relative flex items-center gap-3">
                  <span className="text-white text-lg font-semibold">
                    Start Building
                  </span>

                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 text-center sm:text-left">
            {/* Product */}
            <div>
              <h3 className="text-white text-xl font-semibold">Product</h3>

              <div className="mt-6 flex flex-col gap-5">
                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Features
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  API Studio
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Live Testing
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Runtime Docs
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white text-xl font-semibold">Resources</h3>

              <div className="mt-6 flex flex-col gap-5">
                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Documentation
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  GitHub
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Changelog
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Support
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white text-xl font-semibold">Connect</h3>

              <div className="mt-6 flex flex-col gap-5">
                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  hello@retreever.com
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Twitter / X
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  LinkedIn
                </a>

                <a
                  href="/"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Community
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-gray-500">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

            <p>
              Built with performance, scalability & developer experience in
              mind.
            </p>
          </div>

          <p className="text-sm text-gray-600">
            © 2025 Retreever. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
