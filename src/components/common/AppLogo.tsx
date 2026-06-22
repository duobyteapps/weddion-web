import logoImage from "@/assets/images/logo.png";
import logoNameImage from "@/assets/images/logo-name.png";

type AppLogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  showName?: boolean;
  className?: string;
};

const logoSize = {
  sm: {
    image: "h-7 w-7",
    name: "h-7 w-[105px]",
    gap: "gap-3",
  },
  md: {
    image: "h-9 w-9",
    name: "h-9 w-[135px]",
    gap: "gap-4",
  },
  lg: {
    image: "h-14 w-14",
    name: "h-12 w-[175px]",
    gap: "gap-5",
  },
  xl: {
    image: "h-24 w-24",
    name: "h-16 w-[330px]",
    gap: "gap-3",
  },
};

export function AppLogo({
  size = "md",
  showName = true,
  className = "",
}: AppLogoProps) {
  const currentSize = logoSize[size];

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <img
        src={logoImage}
        alt="Weddion logo"
        className={`object-contain ${currentSize.image}`}
      />

      {showName ? (
        <img
          src={logoNameImage}
          alt="Weddion"
          className={`object-contain ${currentSize.name}`}
        />
      ) : null}
    </div>
  );
}
