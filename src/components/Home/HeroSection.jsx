import { ArrowRight, BookOpen, PlayCircle } from "lucide-react";
import HeroExperienceCard from "./HeroExperienceCard";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative flex w-full flex-col items-center justify-start overflow-visible pt-38 pb-8 sm:min-h-screen sm:pt-37.5 sm:pb-0"
    >
      <div className="w-full">
        <div className="relative w-full text-center">
        <div className="hero-aurora-blue pointer-events-none absolute left-[14%] top-[34%] h-36 w-40 rounded-full bg-shadow-blue/18 blur-[58px] md:left-[26%] md:top-[20%] md:h-100 md:w-120 md:bg-shadow-blue/20 md:blur-[120px]" />
        <div className="pointer-events-none absolute right-[-18%] top-[-18%] h-60 w-72 rounded-full bg-shadow-green/10 blur-[100px] md:right-[-42%] md:top-[-80%] md:h-140 md:w-180 md:bg-shadow-green/15 md:blur-[160px]" />

        <div className="relative z-10">
          <h2 className="text-[clamp(28px,7vw,40px)] font-bold leading-none tracking-[-0.04em] text-text-title md:text-[52px] xl:text-[65px]">
            Runtime Native
          </h2>

          <h1 className="mt-1 bg-linear-to-r from-primary-blue from-40% to-75% to-primary-green bg-clip-text text-[clamp(52px,13vw,76px)] font-bold leading-none tracking-[-0.04em] text-transparent md:text-[92px] lg:text-[112px] xl:text-[128px]">
            API Studio
          </h1>

          <p className="mx-auto mt-4 max-w-[min(100%,34rem)] text-[clamp(15px,3.7vw,18px)] font-medium leading-[1.35] tracking-normal text-text-sub-title md:mt-5 md:max-w-352.5 md:text-[20px]">
            API documentation, testing, and workflows generated directly from
            your running application
            <br />- always live, always in sync.
          </p>
        </div>
      </div>

      <div className="mt-6 flex w-full items-center justify-center gap-2 md:mt-10 md:gap-4">
        <a
          href="https://docs.retreever.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-linear-to-r from-brand-blue-1 to-brand-blue-2 px-[clamp(0.9rem,3vw,1.35rem)] text-[clamp(13px,3vw,15px)] font-medium tracking-normal text-text-title shadow-[0_18px_45px_rgba(6,114,255,0.12)] transition-transform duration-300 hover:scale-[1.02] md:h-14 md:gap-2 md:px-8 md:text-base"
        >
          <PlayCircle className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.8} />
          Tutorial
        </a>

        <a
          href="https://docs.retreever.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary-blue/30 px-[clamp(0.9rem,3vw,1.35rem)] text-[clamp(13px,3vw,15px)] font-medium tracking-normal text-text-title shadow-[0_18px_45px_rgba(6,114,255,0.07)] transition-transform duration-300 hover:scale-[1.02] md:h-14 md:gap-2 md:px-8 md:text-base"
        >
          <BookOpen className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.8} />
          Documentation
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.8} />
        </a>
      </div>
      </div>

      <HeroExperienceCard />
    </div>
  );
};

export default HeroSection;
