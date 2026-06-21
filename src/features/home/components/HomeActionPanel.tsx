import { ChevronRight } from "lucide-react";
import type { HomeActionItem } from "../types/home.types";

type HomeActionPanelProps = {
  item: HomeActionItem;
};

export function HomeActionPanel({ item }: HomeActionPanelProps) {
  const Icon = item.icon;

  return (
    <button className="group flex w-full items-center justify-between rounded-[24px] border border-[#eadcf2] bg-white/65 p-7 text-left transition hover:border-[#cdaee2] hover:bg-white">
      <div className="flex items-center gap-7">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#dbc8e9] bg-[#fbf7fd] text-[#8f58c9]">
          <Icon size={36} />
        </div>

        <div>
          <h3 className="weddion-serif text-2xl font-bold text-[#2d2138]">
            {item.title}
          </h3>
          <p className="mt-2 max-w-[380px] text-base leading-7 text-[#6c6275]">
            {item.description}
          </p>
        </div>
      </div>

      <ChevronRight
        size={34}
        className="text-[#8a7a99] transition group-hover:translate-x-1 group-hover:text-[#8f58c9]"
      />
    </button>
  );
}