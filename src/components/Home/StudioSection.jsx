import DashboardRight from "../../assets/Rectangle 7.svg";
import DashboardLeft from "../../assets/Rectangle 11.svg";
import VariableSvg from "../../assets/Rectangle 16.svg";
import ModalSvg from "../../assets/Group 10.svg";
import DocsSvg from "../../assets/Group 11.svg";
import EcommerceSvg from "../../assets/Rectangle 43.svg";
import AuthSvg from "../../assets/Rectangle 17 (1).svg";

const spotlightLinearGradient =
  "linear-gradient(112deg, rgb(from var(--color-shadow-blue) r g b / 0.9) 0%, color-mix(in srgb, var(--color-shadow-blue) 65%, var(--color-shadow-green) 35%) 58%, rgb(from var(--color-shadow-green) r g b / 0.72) 100%)";

const spotlightBlobStyle = {
  left: "var(--spotlight-x, 50%)",
  top: "var(--spotlight-y, 50%)",
  backgroundImage: spotlightLinearGradient,
};

const StudioCard = ({ children, className = "" }) => {
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--spotlight-x",
      `${event.clientX - bounds.left}px`
    );
    event.currentTarget.style.setProperty(
      "--spotlight-y",
      `${event.clientY - bounds.top}px`
    );
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className={`group relative overflow-hidden border border-transparent bg-surface-1 transition-transform duration-300 ease-out hover:-translate-y-1.5 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] p-px"
        style={{
          background: "var(--color-border-mute)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div
          className="absolute h-104 w-104 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={spotlightBlobStyle}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit] p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        <div
          className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[32px]"
          style={spotlightBlobStyle}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const LitFrame = ({ children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
);

const ApiCatalogueSection = () => {
  return (
    <section
      id="studio"
      data-page-spotlight-zone
      className="w-full scroll-mt-28 py-12"
    >
      {/* Heading */}
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Your Studio in Seconds
        </h2>
      </div> */}

      {/* ================= First Section ================= */}
      <StudioCard className="rounded-[20px] px-8 py-8 lg:rounded-2xl lg:py-4">
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

            <LitFrame className="mt-6 sm:mt-8">
              <img
                src={DashboardLeft}
                alt="API Catalogue"
                className="h-auto w-full max-w-full object-cover"
                draggable={false}
              />
            </LitFrame>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">
            <LitFrame className="order-2 mt-6 lg:order-1 lg:mt-0">
              <img
                src={DashboardRight}
                alt="API Testing"
                className="h-auto w-full max-w-full object-cover"
                draggable={false}
              />
            </LitFrame>

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
      </StudioCard>

      {/* ================= Second Section ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 mt-5 md:mt-10">
        {/* LEFT CARD */}
        <StudioCard className="rounded-2xl px-8 py-8 lg:py-4">
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
            <LitFrame className="flex w-full items-center justify-center md:h-46.25 md:flex-1">
              <img
                src={ModalSvg}
                alt="Environment Variables"
                className="h-auto w-full object-contain md:h-full"
                draggable={false}
              />
            </LitFrame>

            {/* Second Image */}
            <LitFrame className="flex w-full items-center justify-center md:h-46.25 md:flex-1">
              <img
                src={DocsSvg}
                alt="Automation Modal"
                className="h-auto w-full object-contain md:h-full"
                draggable={false}
              />
            </LitFrame>
          </div>
        </StudioCard>

        {/* RIGHT CARD */}
        <StudioCard className="flex flex-col items-start rounded-2xl px-8 py-8 lg:py-4">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-medium tracking-tight">
            Auto Generated Docs
          </h2>

          <p className="mt-4 text-sm text-text-mute leading-relaxed">
            Interactive API documentation — always aligned with your current deployment.
          </p>

          <LitFrame className="mt-6 w-full">
            <img
              src={VariableSvg}
              alt="Generated Documentation"
              className="h-auto w-full object-contain"
              draggable={false}
            />
          </LitFrame>
        </StudioCard>
      </div>

      {/* ===========third section==================== */}
      <div className="grid lg:grid-cols-[0.7fr_1.5fr] gap-5 mt-5 md:mt-10">
        {/* LEFT CARD */}
        <StudioCard className="rounded-2xl px-8 py-8 lg:py-4">
          <h2 className="text-2xl md:text-2xl font-medium leading-tight">
            Always In Sync with
            <br />
            Runtime
          </h2>

          <p className="mt-4 text-text-mute text-sm leading-relaxed">
            Generated directly from your running application — always live,
            always in sync.
          </p>

          <LitFrame className="mt-8">
            <img
              src={EcommerceSvg}
              alt="Runtime Sync"
              className="w-full object-cover"
              draggable={false}
            />
          </LitFrame>
        </StudioCard>

        {/* RIGHT CARD */}
        <StudioCard className="rounded-2xl px-8 py-8 lg:py-4">
          <h2 className="text-2xl md:text-2xl font-medium leading-tight">
            Global Authorization
          </h2>

          <p className="mt-4 text-text-mute text-sm leading-relaxed max-w-4xl">
            Configure authorization globally once and let Retreever
            automatically apply it across your testing workflow. Override
            authorization locally for specific endpoints whenever required
            without repeatedly configuring auth separately for every request.
          </p>

          <LitFrame className="mt-8">
            <img
              src={AuthSvg}
              alt="Global Authorization"
              className="w-full object-cover"
              draggable={false}
            />
          </LitFrame>
        </StudioCard>
      </div>
    </section>
  );
};

export default ApiCatalogueSection;
