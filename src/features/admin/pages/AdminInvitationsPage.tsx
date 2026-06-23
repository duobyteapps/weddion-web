import { AppCard, AppText } from "@/components/ui";

export function AdminInvitationsPage() {
  return (
    <AppCard className="border border-base-300 bg-base-100 p-6 shadow-sm">
      <AppText variant="title" as="h1">
        Davetiyeler
      </AppText>

      <AppText variant="body" className="mt-2">
        Burada kullanıcıların oluşturduğu davetiyeler, aktiflik durumu ve
        kategori bilgileri listelenecek.
      </AppText>
    </AppCard>
  );
}
