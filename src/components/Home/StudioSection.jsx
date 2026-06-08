import DashboardRight from "../../assets/Rectangle 7.svg";
import DashboardLeft from "../../assets/Rectangle 11.svg";
import VariableSvg from "../../assets/Rectangle 16.svg";
import ModalSvg from "../../assets/Group 10.svg";
import DocsSvg from "../../assets/Group 11.svg";
import EcommerceSvg from "../../assets/Rectangle 43.svg";
import AuthSvg from "../../assets/Rectangle 17 (1).svg";


const ApiCatalogueSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-10 lg:py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Your Studio in Seconds
        </h2>
      </div>

      {/* ================= First Section ================= */}
      <div className="rounded-[20px] lg:rounded-[28px] border-2 border-[#727272] bg-[#0b0b0b] p-5 sm:p-6 md:p-10">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-6 lg:gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">
              Auto Discovered API
              <br />
              Catalogue
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
              Every endpoint automatically grouped and organized, resolved
              directly from your application controllers and methods and other
              metadata.
            </p>

            <div className="mt-6 sm:mt-8 rounded-xl overflow-hidden border border-gray-800">
              <img
                src={DashboardLeft}
                alt="API Catalogue"
                className="w-full h-auto object-cover max-w-full"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="rounded-xl overflow-hidden border border-gray-800">
              <img
                src={DashboardRight}
                alt="API Testing"
                className="w-full h-auto object-cover max-w-full"
                draggable={false}
              />
            </div>

            <h2 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">
              Test Ready Endpoints
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
              Retreever generates executable endpoints directly from your
              runtime with request bodies, path variables, query params,
              validations, authentication handling, and structured payload
              support already available.
            </p>
          </div>
        </div>
      </div>

      {/* ================= Second Section ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mt-10">
        {/* LEFT CARD */}
        <div className="rounded-[28px] border-2 border-[#727272] bg-[#0b0b0b] p-5 lg:p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            One Click Environment Variable Automation
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-4xl">
            Automatically extract values from API responses and reuse them
            throughout your workflow. Runtime Native intelligently maps response
            payloads into reusable variables, eliminating manual copy-paste and
            accelerating end-to-end testing.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Image */}
            <div className="h-50 sm:h-60 md:h-70 overflow-hidden rounded-2xl bg-[#0b0b0b] flex items-center justify-center">
              <img
                src={ModalSvg}
                alt="Environment Variables"
                className="w-full h-full object-contain max-w-full"
                draggable={false}
              />
            </div>

            {/* Second Image */}
            <div className="h-50 sm:h-60 md:h-70 overflow-hidden rounded-2xl bg-[#0b0b0b] flex items-center justify-center">
              <img
                src={DocsSvg}
                alt="Automation Modal"
                className="w-full h-full object-contain max-w-full"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-[28px] border-2 border-[#727272] bg-[#0b0b0b] p-5 lg:p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            Auto Generated Docs
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Interactive API documentation generated directly from your running
            application. Keep documentation accurate, live, and synchronized
            with every deployment automatically.
          </p>

          <div className="mt-6 h-50 sm:h-55 md:h-65 overflow-hidden rounded-xl bg-[#050505] flex items-center justify-center">
            <img
              src={VariableSvg}
              alt="Generated Documentation"
              className="w-full h-full object-contain max-w-full"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* ===========third section==================== */}
      <div className="grid lg:grid-cols-[0.7fr_1.5fr] gap-6 mt-10">
        {/* LEFT CARD */}
        <div className="rounded-[28px] border-2 border-[#727272] bg-[#0b0b0b] p-6 lg:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            Always In Sync with
            <br />
            Runtime
          </h2>

          <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed">
            Generated directly from your running application — always live,
            always in sync.
          </p>

          <div className="mt-8 rounded-xl overflow-hidden border border-gray-800">
            <img
              src={EcommerceSvg}
              alt="Runtime Sync"
              className="w-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-[28px] border-2 border-[#727272] bg-[#0b0b0b] p-6 lg:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            Global Authorization
          </h2>

          <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
            Configure authorization globally once and let Retreever
            automatically apply it across your testing workflow. Override
            authorization locally for specific endpoints whenever required
            without repeatedly configuring auth separately for every request.
          </p>

          <div className="mt-8 rounded-xl overflow-hidden border border-gray-800">
            <img
              src={AuthSvg}
              alt="Global Authorization"
              className="w-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiCatalogueSection;
