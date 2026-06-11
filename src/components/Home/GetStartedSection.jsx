const GetStartedSection = () => {
  const steps = [
    {
      title: "Add Package",
      description: "Install dependency",
      icon: (
        <>
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </>
      ),
      iconColor: "text-cyan-400",
      iconWrapper: "bg-blue-500/10 border border-blue-500/20",
      hover: "hover:border-blue-500/30",
    },
    {
      title: "Run Project",
      description: "Start your app",
      icon: <polygon points="5 3 19 12 5 21 5 3" />,
      iconColor: "text-blue-400",
      iconWrapper: "bg-blue-500/10 border border-blue-500/20",
      hover: "hover:border-blue-500/30",
    },
    {
      title: "Instant Docs",
      description: "Generated automatically",
      icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
      iconColor: "text-cyan-400",
      iconWrapper: "bg-cyan-500/10 border border-cyan-500/20",
      hover: "hover:border-cyan-400/30",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-blue-600/10 blur-[190px] rounded-full" />

      <div className="relative z-10 w-full">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight">
            <span className="text-white">Get Started</span>{" "}
            <span className="bg-linear-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Instantly
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Integrate Retreever into your application in minutes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <div
                className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#080808] px-7 py-6 w-full max-w-75 transition-all duration-300 hover:-translate-y-2 ${step.hover}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.iconWrapper}`}
                  >
                    <svg
                      className={`w-6 h-6 ${step.iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {step.icon}
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden lg:block w-16 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent mx-6" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center pt-15">
        <button className="group relative overflow-hidden rounded-[22px] bg-linear-to-r from-brand-blue-1 to-brand-blue-2 px-10 sm:px-12 py-4 sm:py-5 shadow-[0_0_50px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105">
          <div className="relative flex items-center gap-4">
            <span className="text-white text-xl sm:text-2xl font-bold">
              Try Retreever
            </span>

            <svg
              className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1"
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

        <div className="mt-5 flex items-center gap-3 text-gray-500 text-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-primary-green shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
          <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg text-center">
            Works with Spring Boot • Runtime Native • Zero Config
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
