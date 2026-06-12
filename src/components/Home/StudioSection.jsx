import DashboardRight from "../../assets/Rectangle 7.svg";
import DashboardLeft from "../../assets/Rectangle 11.svg";
import VariableSvg from "../../assets/Rectangle 16.svg";
import ModalSvg from "../../assets/Group 10.svg";
import DocsSvg from "../../assets/Group 11.svg";
import EcommerceSvg from "../../assets/Rectangle 43.svg";
import AuthSvg from "../../assets/Rectangle 17 (1).svg";


const ApiCatalogueSection = () => {
  return (
    <section className="w-full py-12">
      {/* Heading */}
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Your Studio in Seconds
        </h2>
      </div> */}

      {/* ================= First Section ================= */}
      <div className="rounded-[20px] lg:rounded-2xl border border-border-mute bg-surface-1 px-8 py-8 lg:py-4">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-5 lg:gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-medium text-text-primary leading-tight">
              Auto Discovered API
              <br />
              Catalogue
            </h2>

            <p className="mt-4 text-sm text-text-mute max-w-md leading-relaxed">
              Every endpoint automatically grouped and organized, resolved
              directly from your application controllers and methods and other
              metadata.
            </p>

            <div className="mt-6 sm:mt-8 overflow-hidden">
              <img
                src={DashboardLeft}
                alt="API Catalogue"
                className="w-full h-auto object-cover max-w-full"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">
            <div className="order-2 mt-6 overflow-hidden lg:order-1 lg:mt-0">
              <img
                src={DashboardRight}
                alt="API Testing"
                className="w-full h-auto object-cover max-w-full"
                draggable={false}
              />
            </div>

            <div className="order-1 mt-8 lg:order-2 lg:mt-0">
              <h2 className="text-xl font-medium leading-tight text-text-primary sm:text-2xl md:text-2xl lg:mt-8">
                Test Ready Endpoints
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-mute">
                Retreever generates executable endpoints directly from your
                runtime with request bodies, path variables, query params,
                validations, authentication handling, and structured payload
                support already available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Second Section ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 mt-5 md:mt-10">
        {/* LEFT CARD */}
        <div className="rounded-2xl border border-border-mute bg-surface-1 px-8 py-8 lg:py-4">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-medium tracking-tight">
            One Click Environment Variable Automation
          </h2>

          <p className="mt-4 text-sm text-text-mute leading-relaxed max-w-4xl">
            Automatically extract values from API responses and reuse them
            throughout your workflow. Runtime Native intelligently maps response
            payloads into reusable variables, eliminating manual copy-paste and
            accelerating end-to-end testing.
          </p>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-stretch">
            {/* First Image */}
            <div className="flex w-full items-center justify-center overflow-hidden md:h-46.25 md:flex-1">
              <img
                src={ModalSvg}
                alt="Environment Variables"
                className="h-auto w-full object-contain md:h-full"
                draggable={false}
              />
            </div>

            {/* Second Image */}
            <div className="flex w-full items-center justify-center overflow-hidden md:h-46.25 md:flex-1">
              <img
                src={DocsSvg}
                alt="Automation Modal"
                className="h-auto w-full object-contain md:h-full"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl border border-border-mute bg-surface-1 px-8 py-8 flex flex-col items-start lg:py-4">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-medium tracking-tight">
            Auto Generated Docs
          </h2>

          <p className="mt-4 text-sm text-text-mute leading-relaxed">
            Interactive API documentation — always aligned with your current deployment.
          </p>

          <div className="mt-6 w-full overflow-hidden">
            <img
              src={VariableSvg}
              alt="Generated Documentation"
              className="h-auto w-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* ===========third section==================== */}
      <div className="grid lg:grid-cols-[0.7fr_1.5fr] gap-5 mt-5 md:mt-10">
        {/* LEFT CARD */}
        <div className="rounded-2xl border border-border-mute bg-surface-1 px-8 py-8 lg:py-4">
          <h2 className="text-2xl md:text-2xl font-medium leading-tight">
            Always In Sync with
            <br />
            Runtime
          </h2>

          <p className="mt-4 text-text-mute text-sm leading-relaxed">
            Generated directly from your running application — always live,
            always in sync.
          </p>

          <div className="mt-8 overflow-hidden">
            <img
              src={EcommerceSvg}
              alt="Runtime Sync"
              className="w-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl border border-border-mute bg-surface-1 px-8 py-8 lg:py-4">
          <h2 className="text-2xl md:text-2xl font-medium leading-tight">
            Global Authorization
          </h2>

          <p className="mt-4 text-text-mute text-sm leading-relaxed max-w-4xl">
            Configure authorization globally once and let Retreever
            automatically apply it across your testing workflow. Override
            authorization locally for specific endpoints whenever required
            without repeatedly configuring auth separately for every request.
          </p>

          <div className="mt-8 overflow-hidden">
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
