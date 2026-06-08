import DashboardSvg from "../../assets/image 7.svg";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-5 pt-20">
      {/* Heading */}

      <div className="relative text-center max-w-5xl mx-auto">
        {/* Glow Behind Text */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-300 h-87.5 bg-linear-to-r from-[#0672FF]/25 via-[#0672FF]/10 to-[#00C5AE]/25 blur-[140px]" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Runtime Native
          </h2>

          <h1 className="mt-3 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-none tracking-tight bg-linear-to-r from-[#0672FF] to-[#00C5AE] bg-clip-text text-transparent">
            API Studio
          </h1>

          <p className="mt-5 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            API documentation, testing, and workflows generated directly from
            your running application — always live, always in sync.
          </p>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="relative mt-12 w-full max-w-7xl mx-auto">
        {/* Center Glass Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button className="group flex items-center gap-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl px-5 py-3 shadow-[0_0_40px_rgba(0,197,174,0.15)] transition-all duration-300 hover:border-gray-400 hover:bg-white/10 hover:scale-105">
            {/* Icon Circle */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
              <svg
                className="h-6 w-6 text-white/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* Text */}
            <span className="pr-3 text-xl sm:text-2xl font-semibold text-white">
              Experience
            </span>
          </button>
        </div>

        {/* Glow Behind Image */}
        <div className="absolute inset-0 -z-10 bg-[#00C5AE]/10 blur-[120px]" />

        {/* Bottom Gradient Glow */}
        <div className="absolute -bottom-20 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-linear-to-r from-[#00C5AE]/20 to-[#0672FF]/20 blur-[120px]" />

        {/* Dashboard Image */}
        <div className="overflow-hidden rounded-[20px] sm:rounded-3xl lg:rounded-[30px] border-2 border-[#727272] shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <img src={DashboardSvg} alt="Dashboard Preview" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
