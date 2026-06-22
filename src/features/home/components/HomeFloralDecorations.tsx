import lavenderSideFrame from "@/assets/images/illustration/lavender-floral-side-frame.png";
import purpleFloralBorder from "@/assets/images/illustration/purple-watercolor-floral-border.png";

export function HomeFloralDecorations() {
  return (
    <>
      {/* Sol çiçek */}
      <img
        src={purpleFloralBorder}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-40px] z-0 hidden w-[360px] select-none object-contain opacity-85 lg:block xl:left-[-40px] xl:w-[430px]"
      />

      {/* Sağ çiçek */}
      <img
        src={lavenderSideFrame}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20px] z-0 hidden w-[300px] select-none object-contain opacity-80 lg:block xl:right-[-20px] xl:w-[340px]"
      />
    </>
  );
}
