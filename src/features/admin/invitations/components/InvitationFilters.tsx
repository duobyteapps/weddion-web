import { X } from "lucide-react";

import { AppActionButton, AppCard, AppSelect } from "@/components/ui";

const categoryOptions = [
  { label: "Tüm Kategoriler", value: "all" },
  { label: "Çiçekli", value: "flower" },
  { label: "Minimal", value: "minimal" },
  { label: "Klasik", value: "classic" },
  { label: "Doğa", value: "nature" },
];

const premiumOptions = [
  { label: "Premium Durumu", value: "all" },
  { label: "Premium", value: "premium" },
  { label: "Standart", value: "standard" },
];

type InvitationFiltersProps = {
  categoryFilter: string;
  premiumFilter: string;
  onCategoryFilterChange: (value: string) => void;
  onPremiumFilterChange: (value: string) => void;
  onClearFilters: () => void;
};

export function InvitationFilters({
  categoryFilter,
  premiumFilter,
  onCategoryFilterChange,
  onPremiumFilterChange,
  onClearFilters,
}: InvitationFiltersProps) {
  return (
    <AppCard className="flex h-full items-center">
      <div className="grid w-full gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <AppSelect
          options={categoryOptions}
          value={categoryFilter}
          onValueChange={onCategoryFilterChange}
        />

        <AppSelect
          options={premiumOptions}
          value={premiumFilter}
          onValueChange={onPremiumFilterChange}
        />

        <AppActionButton
          onClick={onClearFilters}
          className="h-12 rounded-2xl px-5"
        >
          <X size={17} />
          Temizle
        </AppActionButton>
      </div>
    </AppCard>
  );
}
