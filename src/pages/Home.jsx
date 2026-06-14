
import HeroSection from "../components/Home/HeroSection";
import StudioSection from "../components/Home/StudioSection";
import GetStartedSection from "../components/Home/GetStartedSection";
import Footer from "../components/Home/Footer";

const pageSpotlightBackground =
  "radial-gradient(560px circle at var(--page-light-x, 50%) var(--page-light-y, 20rem), rgba(255,255,255,0.055), rgba(185,185,185,0.035) 34%, rgba(6,114,255,0.018) 54%, transparent 76%)";

const Home = () => {
  const handlePointerMove = (event) => {
    const spotlightZone = event.target.closest?.("[data-page-spotlight-zone]");

    if (!spotlightZone) {
      event.currentTarget.style.setProperty("--page-light-opacity", "0");
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty("--page-light-opacity", "1");
    event.currentTarget.style.setProperty(
      "--page-light-x",
      `${event.clientX - bounds.left}px`
    );
    event.currentTarget.style.setProperty(
      "--page-light-y",
      `${event.clientY - bounds.top}px`
    );
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty("--page-light-opacity", "0");
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="home-page relative overflow-hidden bg-app-background text-text-title"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: pageSpotlightBackground,
          opacity: "var(--page-light-opacity, 0)",
        }}
      />
      <div className="home-page__content relative z-10">
        <HeroSection />
        {/* <WorkflowSection /> */}
        <StudioSection />
        {/* <PlugPlaySection />
        <RuntimeSection /> */}
        <GetStartedSection />
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
