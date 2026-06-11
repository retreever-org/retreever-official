import { ArrowRight, BookOpen, PlayCircle } from "lucide-react";
import DashboardSvg from "../../assets/image 7.svg";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-app-background px-4 pt-37.5 sm:px-6 lg:px-5">
      <div className="relative mx-auto w-full max-w-310 text-center">
        <div className="hero-aurora-blue pointer-events-none absolute left-[30%] top-[50%] h-80 w-100 rounded-full bg-shadow-blue/20 blur-[100px]" />
        <div className="pointer-events-none absolute right-[10%] top-[-10%] h-80 w-110 rounded-full bg-shadow-green/9 blur-[100px]" />

        <div className="relative z-10">
          <h2 className="text-[42px] font-bold leading-none tracking-[-0.04em] text-text-title sm:text-[52px] xl:text-[65px]">
            Runtime Native
          </h2>

          <h1 className="mt-1 bg-linear-to-r from-primary-blue from-40% to-75% to-primary-green  bg-clip-text text-[50px] font-bold leading-none tracking-[-0.04em] text-transparent sm:text-[92px] lg:text-[112px] xl:text-[128px]">
            API Studio
          </h1>

          <p className="mx-auto mt-5 max-w-75 text-[16px] font-medium leading-[1.35] tracking-normal text-text-sub-title sm:max-w-352.5 sm:text-[20px]">
            API documentation, testing, and workflows generated directly from
            your running application
            <br />- always live, always in sync.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="https://docs.retreever.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-blue-1 to-brand-blue-2 px-8 text-base font-medium tracking-normal text-text-title shadow-[0_18px_45px_rgba(6,114,255,0.12)] transition-transform duration-300 hover:scale-[1.02]"
        >
          <PlayCircle size={20} strokeWidth={1.8} />
          Tutorial
        </a>

        <a
          href="https://docs.retreever.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary-blue/30 px-8 text-base font-medium tracking-normal text-text-title shadow-[0_18px_45px_rgba(6,114,255,0.07)] transition-transform duration-300 hover:scale-[1.02]"
        >
          <BookOpen size={20} strokeWidth={1.8} />
          Documentation
          <ArrowRight size={20} strokeWidth={1.8} />
        </a>
      </div>

      <div className="relative mx-auto mt-28">

        <div className="relative overflow-hidden rounded-[20px] border border-border-mute shadow-[0_18px_70px_rgba(0,0,0,0.35)] sm:rounded-3xl">
          <img src={DashboardSvg} alt="Dashboard Preview" className="w-full" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%] bg-linear-to-b from-app-background/0 via-app-background/80 to-app-background" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-linear-to-b from-transparent to-app-background/55" />

          <a
            href="https://exp.retreever.dev"
            className="group absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 rounded-full bg-text-mute/16 px-9 py-4 text-[22px] font-bold tracking-normal text-text-mute/90 shadow-[0_20px_45px_rgba(0,0,0,0.42)] backdrop-blur-md transition-all duration-300 ease-out hover:scale-[1.045] hover:bg-text-mute/22 hover:text-text-primary hover:shadow-[0_24px_58px_rgba(0,0,0,0.55)] active:scale-[0.98] active:translate-y-[calc(-50%+2px)]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-text-mute/18 text-text-mute/85 transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-95">
              <PlayCircle size={36} strokeWidth={1.8} />
            </span>
            Experience
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
