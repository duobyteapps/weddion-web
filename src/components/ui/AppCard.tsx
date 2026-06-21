import type { ReactNode } from "react";

type AppCardProps = {
  children: ReactNode;
  className?: string;
};

export function AppCard({ children, className = "" }: AppCardProps) {
  return (
    <div
      className={`card rounded-2xl border border-[#eadcf2] ${className}`}
    >
      {children}
    </div>
  );
}