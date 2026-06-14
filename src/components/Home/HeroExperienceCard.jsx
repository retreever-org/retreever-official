import { PlayCircle } from "lucide-react";
import DashboardSvg from "../../assets/image 7.svg";

const borderGlowBackground =
  "radial-gradient(360px circle at var(--hero-card-x, 50%) var(--hero-card-y, 50%), rgba(6,114,255,0.62), rgba(0,197,174,0.48) 34%, rgba(6,114,255,0.16) 58%, transparent 78%)";

const cardGlowBackground =
  "radial-gradient(580px circle at var(--hero-card-x, 50%) var(--hero-card-y, 50%), rgba(255,255,255,0.055), rgba(6,114,255,0.06) 32%, transparent 68%)";

const maskStyle = {
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
};

const HeroExperienceCard = () => {
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--hero-card-x",
      `${event.clientX - bounds.left}px`
    );
    event.currentTarget.style.setProperty(
      "--hero-card-y",
      `${event.clientY - bounds.top}px`
    );
  };

  return (
    <div className="relative mt-14 w-full md:mt-28">
      <div
        data-page-spotlight-zone
        onPointerMove={handlePointerMove}
        className="group relative overflow-hidden rounded-[20px] border border-transparent bg-surface-1/30 shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:-translate-y-1 md:rounded-3xl"
      >
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] p-px"
          style={{
            background: "var(--color-border-mute)",
            ...maskStyle,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: cardGlowBackground }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: borderGlowBackground,
            ...maskStyle,
          }}
        />

        <img
          src={DashboardSvg}
          alt="Dashboard Preview"
          className="relative z-10 w-full"
          draggable={false}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-linear-to-b from-app-background/0 via-app-background/45 to-app-background/70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[24%] bg-linear-to-b from-transparent to-app-background/30" />

        <a
          href="https://exp.retreever.dev"
          className="group/cta absolute left-1/2 top-1/2 z-30 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-text-mute/16 px-5 py-3 text-[16px] font-bold tracking-normal text-text-mute/90 shadow-[0_20px_45px_rgba(0,0,0,0.42)] backdrop-blur-md transition-all duration-300 ease-out hover:scale-[1.045] hover:bg-text-mute/22 hover:text-text-primary hover:shadow-[0_24px_58px_rgba(0,0,0,0.55)] active:scale-[0.98] active:translate-y-[calc(-50%+2px)] md:gap-4 md:px-9 md:py-4 md:text-[22px]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-text-mute/18 text-text-mute/85 transition-transform duration-300 ease-out group-hover/cta:scale-105 group-active/cta:scale-95 md:h-14 md:w-14">
            <PlayCircle className="h-6 w-6 md:h-9 md:w-9" strokeWidth={1.8} />
          </span>
          Experience
        </a>
      </div>
    </div>
  );
};

export default HeroExperienceCard;
