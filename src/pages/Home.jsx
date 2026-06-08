
import HeroSection from "../components/home/HeroSection";
import WorkflowSection from "../components/home/WorkflowSection";
import StudioSection from "../components/home/StudioSection";
import PlugPlaySection from "../components/home/PlugPlaySection";
import RuntimeSection from "../components/home/RuntimeSection";
import GetStartedSection from "../components/home/GetStartedSection";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <section className="bg-black text-white overflow-hidden" >
      <HeroSection />
      <WorkflowSection />
      <StudioSection />
      <PlugPlaySection />
      <RuntimeSection />
      <GetStartedSection />
      <Footer />
    </section>
  );
};

export default Home;