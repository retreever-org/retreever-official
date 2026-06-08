import {
  FaRocket,
  FaCloud,
  FaCheckCircle,
  FaProjectDiagram,
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const PlugAndPlaySection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Plug in & Play
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* ================= CARD 1 ================= */}
        <div className="rounded-[28px] border border-[#3A3A3A] bg-[#0b0b0b] p-5 sm:p-6">
          <h3 className="text-xl md:text-2xl font-semibold leading-tight">
            Works Alongside Your Existing Stack
          </h3>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Continue using Swagger, Postman, or your existing API workflows.
            Retreever integrates into your runtime without forcing migrations,
            collection rewrites, or workflow replacement.
          </p>

          <div className="mt-8 h-50 rounded-3xl bg-[#141414] relative flex items-center justify-center overflow-hidden">
            <div className="absolute w-27.5 h-27.5 rounded-full border border-[#0672FF]/40"></div>

            <div className="absolute top-10 left-25 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <FaRocket className="text-white text-[15px]" />
            </div>

            <div className="absolute bottom-10 left-25 w-10 h-10 rounded-full border border-green-500 flex items-center justify-center bg-black">
              <FaProjectDiagram className="text-green-500 text-[15px]" />
            </div>

            <div className="absolute top-10 right-25 w-10 h-10 rounded-full border border-lime-500 flex items-center justify-center bg-black">
              <FaCloud className="text-lime-500 text-[15px] " />
            </div>

            <div className="w-10 h-10 rounded-xl bg-linear-to-r from-[#0672FF] to-[#00C5AE] flex items-center justify-center">
              <FaCheckCircle className="text-white text-sm" />
            </div>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="rounded-[28px] border border-[#3A3A3A] bg-[#0b0b0b] p-5 sm:p-6">
          <h3 className="text-xl md:text-2xl font-semibold leading-tight">
            Zero Migration Overhead
          </h3>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Retreever reflects your existing application runtime directly. No
            manual API modelling, duplicated documentation, or separate
            collection maintenance required.
          </p>

          <div className="mt-8 h-55 rounded-3xl bg-[#141414] p-4 overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 h-full items-center">
              <div>
                <p className="text-[10px] text-gray-500 mb-3 text-center">
                  OTHER TOOLS
                </p>

                {[
                  "Create workspace",
                  "Add collections",
                  "Write schemas",
                  "Keep in sync",
                ].map((item) => (
                  <div
                    key={item}
                    className="mb-2 border border-gray-700 rounded-lg px-2 py-2 text-[10px] text-gray-500"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="text-gray-600 text-xs font-semibold">VS</div>

              <div className="text-center">
                <p className="text-[10px] text-[#0672FF] mb-3">RETREEVER</p>

                <div className="border border-[#0672FF] rounded-lg px-2 py-2 text-[10px]">
                  Run your App
                </div>

                <FaCheckCircle className="mx-auto mt-4 text-[#00C5AE] text-3xl" />

                <p className="mt-2 text-[10px] text-[#00C5AE]">Studio Ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARD 3 ================= */}
        <div className="rounded-[28px] border border-[#3A3A3A] bg-[#0b0b0b] p-5 sm:p-6">
          <h3 className="text-xl md:text-2xl font-semibold leading-tight">
            Local First Architecture
          </h3>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Designed to operate directly within your application environment,
            keeping API exploration, testing, and workflow automation close to
            the runtime where your systems already execute.
          </p>

          <div className="mt-8 h-50 rounded-3xl bg-[#141414] flex items-center justify-center overflow-hidden">
            <div className="flex items-center justify-center gap-3">
              <div className="border border-[#00C5AE] rounded-lg px-2 py-1 text-[#00C5AE] text-[15px]">
                Your App
              </div>

              <MdArrowForward className="text-gray-500 text-xl" />

              <div className="border border-[#0672FF] rounded-lg px-2 py-1 text-[#0672FF] text-[15px]">
                Retreever
              </div>

              <MdArrowForward className="text-gray-500 text-xl" />

              <div className="flex flex-col items-center">
                <div className="relative">
                  <FaCloud className="text-red-500 text-5xl" />
                  <IoMdClose className="absolute -top-1 -right-1 text-red-500 text-lg" />
                </div>
                <span className="text-[12px] text-red-500 mt-1">no cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlugAndPlaySection;
