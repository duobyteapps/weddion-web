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
  type = "button",
  ...props
}: AppButtonProps) {
  const baseClass =
    "btn min-h-0 h-10 rounded-lg px-4 text-xs font-semibold shadow-none transition-all duration-300 ease-out";

  const variantClass =
    variant === "primary"
      ? "border-none bg-gradient-to-r from-primary to-primaryDark text-white"
      : variant === "outline"
        ? "border border-primaryDark/50 bg-white/50 text-textDark hover:border-primaryDark hover:bg-primarySoft"
        : "border border-primaryDark bg-transparent text-primaryDark hover:bg-primarySoft";

  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
