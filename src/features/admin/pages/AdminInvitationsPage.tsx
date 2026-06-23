import { useMemo, useState } from "react";
import { Plus, Sparkles } from "lucide-react";

import { InvitationFilters } from "@/features/admin/invitations/components/InvitationFilters";
import { InvitationStats } from "@/features/admin/invitations/components/InvitationStats";
import { InvitationsTable } from "@/features/admin/invitations/components/InvitationsTable";
import { adminInvitationsMock } from "@/features/admin/invitations/data/invitations.mock";

export function AdminInvitationsPage() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [premiumFilter, setPremiumFilter] = useState("all");

  const filteredInvitations = useMemo(() => {
    return adminInvitationsMock.filter((invitation) => {
      const matchesCategory =
        categoryFilter === "all" || invitation.categoryValue === categoryFilter;

      const matchesPremium =
        premiumFilter === "all" ||
        (premiumFilter === "premium" && invitation.isPremium) ||
        (premiumFilter === "standard" && !invitation.isPremium);

      return matchesCategory && matchesPremium;
    });
  }, [categoryFilter, premiumFilter]);

  const handleClearFilters = () => {
    setCategoryFilter("all");
    setPremiumFilter("all");
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm font-manropeSemiBold text-primaryDark">
            <Sparkles size={17} />
            Davetiye Yönetimi
          </p>

          <h1 className="font-cormorantBold text-4xl text-textDark lg:text-5xl">
            Davetiyeleri Listele
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-textMuted">
            Sistemdeki tüm davetiye şablonlarını, premium durumlarını ve
            kategorilerini buradan yönetin.
          </p>
        </div>

        <button
          type="button"
          className="btn border-0 bg-primaryDark px-6 text-white shadow-button hover:bg-primaryDark"
        >
          <Plus size={18} />
          Yeni Davetiye Ekle
        </button>
      </header>

      <div className="grid items-stretch gap-5 xl:grid-cols-[1.1fr_1fr]">
        <InvitationStats invitations={adminInvitationsMock} />

        <InvitationFilters
          categoryFilter={categoryFilter}
          premiumFilter={premiumFilter}
          onCategoryFilterChange={setCategoryFilter}
          onPremiumFilterChange={setPremiumFilter}
          onClearFilters={handleClearFilters}
        />
      </div>

      <InvitationsTable invitations={filteredInvitations} />
    </div>
  );
}
