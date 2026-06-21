import type { ReactNode } from "react";

type AppCardProps = {
  children: ReactNode;
  className?: string;
};

export function AppCard({ children, className = "" }: AppCardProps) {
  return (
    <div
      className={`card rounded-[28px] border border-[#eadcf2] bg-white/75 shadow-[0_18px_60px_rgba(75,45,95,0.10)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}