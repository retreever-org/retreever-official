
import HeroSection from "../components/Home/HeroSection";
import StudioSection from "../components/Home/StudioSection";
import GetStartedSection from "../components/Home/GetStartedSection";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <section className="bg-app-background text-text-title overflow-hidden lg:px-16">
      <HeroSection />
      {/* <WorkflowSection /> */}
      <StudioSection />
      {/* <PlugPlaySection />
      <RuntimeSection /> */}
      <GetStartedSection />
      <Footer />
    </section>
  );
};

export default Home;
