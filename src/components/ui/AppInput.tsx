import type { InputHTMLAttributes } from "react";

type AppInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function AppInput({ label, className = "", ...props }: AppInputProps) {
  return (
    <label className="form-control w-full">
      {label ? (
        <div className="label">
          <span className="label-text text-[#4d3f58]">{label}</span>
        </div>
      ) : null}

      <input
        className={`input input-bordered h-12 rounded-xl border-[#dbc8e9] bg-white/80 text-[#2d2138] focus:border-[#9b62d0] focus:outline-none ${className}`}
        {...props}
      />
    </label>
  );
}
