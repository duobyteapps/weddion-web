import type { ButtonHTMLAttributes, ReactNode } from "react";

type AppButtonVariant = "primary" | "outline" | "ghost";

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: AppButtonVariant;
};

export function AppButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: AppButtonProps) {
  const baseClass =
    "btn min-h-0 h-12 rounded-xl px-8 text-[15px] font-semibold shadow-none";

  const variantClass =
    variant === "primary"
      ? "border-none bg-gradient-to-r from-[#9b62d0] to-[#8b4fc2] text-white hover:from-[#8f58c9] hover:to-[#7b43b5]"
      : variant === "outline"
        ? "border-[#b78bd5] bg-white/40 text-[#4d3f58] hover:border-[#9d6fc8] hover:bg-[#f5ecfb]"
        : "border-none bg-transparent text-[#6a527a] hover:bg-[#f3e8fb]";

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}