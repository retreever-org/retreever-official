
import HeroSection from "../components/Home/HeroSection";
import StudioSection from "../components/Home/StudioSection";
import GetStartedSection from "../components/Home/GetStartedSection";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <section className="home-page bg-app-background text-text-title overflow-hidden">
      <div className="home-page__content">
        <HeroSection />
        {/* <WorkflowSection /> */}
        <StudioSection />
        {/* <PlugPlaySection />
        <RuntimeSection /> */}
        <GetStartedSection />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
