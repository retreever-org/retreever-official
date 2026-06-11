
const WorkflowSection = () => {
  return (
    <div className="py-20 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* HEADING */}
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold leading-tight tracking-tight">
            Your APIs already exist. Retreever makes them{" "}
            <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Instantly Exploreable.
            </span>
          </h2>

          <p className="mt-6 sm:mt-8 lg:mt-10 text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed max-w-4xl mx-auto">
            Generated directly from your running application — including
            endpoints, request models, validations, authentication flows, and
            runtime metadata.
          </p>
        </div>

        {/* WORKFLOW CARD */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div className="rounded-[20px] sm:rounded-[30px] px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
              {/* STEP 1 */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black flex items-center justify-center border border-gray-800">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3v12"></path>
                    <path d="M7 10l5 5 5-5"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Install Retreever
                  </h3>

                  <p className="text-gray-300 text-lg sm:text-xl">
                    to your project
                  </p>
                </div>
              </div>

              <div className="hidden lg:block text-gray-500 text-5xl">→</div>

              {/* STEP 2 */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black flex items-center justify-center border border-gray-800">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Start your
                  </h3>

                  <p className="text-gray-300 text-lg sm:text-xl">
                    Application
                  </p>
                </div>
              </div>

              <div className="hidden lg:block text-gray-500 text-5xl">→</div>

              {/* STEP 3 */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black flex items-center justify-center border border-gray-800">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Access</h3>

                  <p className="text-gray-300 text-lg sm:text-xl">
                    Retreever Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WorkflowSection