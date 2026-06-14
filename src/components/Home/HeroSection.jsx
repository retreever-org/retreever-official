import { ArrowRight, BookOpen, PlayCircle } from "lucide-react";
import DashboardSvg from "../../assets/image 7.svg";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative flex w-full flex-col items-center justify-start overflow-visible pt-38 pb-8 sm:min-h-screen sm:pt-37.5 sm:pb-0"
    >
      <div className="w-full">
        <div className="relative w-full text-center">
        <div className="hero-aurora-blue pointer-events-none absolute left-[14%] top-[34%] h-36 w-40 rounded-full bg-shadow-blue/18 blur-[58px] md:left-[26%] md:top-[20%] md:h-100 md:w-120 md:bg-blue-300/12 md:blur-[120px]" />
        <div className="pointer-events-none absolute right-[-18%] top-[-18%] h-60 w-72 rounded-full bg-shadow-green/10 blur-[100px] md:right-[-42%] md:top-[-80%] md:h-140 md:w-160 md:bg-shadow-green/11 md:blur-[160px]" />

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

      <div className="relative mt-14 w-full md:mt-28">

        <div
          data-page-spotlight-zone
          className="relative overflow-hidden rounded-[20px] border border-border-mute shadow-[0_18px_70px_rgba(0,0,0,0.35)] md:rounded-3xl"
        >
          <img src={DashboardSvg} alt="Dashboard Preview" className="w-full" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-linear-to-b from-app-background/0 via-app-background/45 to-app-background/70" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-linear-to-b from-transparent to-app-background/30" />

          <a
            href="https://exp.retreever.dev"
            className="group absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-text-mute/16 px-5 py-3 text-[16px] font-bold tracking-normal text-text-mute/90 shadow-[0_20px_45px_rgba(0,0,0,0.42)] backdrop-blur-md transition-all duration-300 ease-out hover:scale-[1.045] hover:bg-text-mute/22 hover:text-text-primary hover:shadow-[0_24px_58px_rgba(0,0,0,0.55)] active:scale-[0.98] active:translate-y-[calc(-50%+2px)] md:gap-4 md:px-9 md:py-4 md:text-[22px]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-text-mute/18 text-text-mute/85 transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95 md:h-14 md:w-14">
              <PlayCircle
                className="h-6 w-6 md:h-9 md:w-9"
                strokeWidth={1.8}
              />
            </span>
            Experience
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
