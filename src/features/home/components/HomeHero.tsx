import { Camera, Heart, KeyRound, Sparkle } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";
import { AppContainer } from "@/components/ui/AppContainer";
import { AppCard } from "@/components/ui/AppCard";
import { HomeActionPanel } from "./HomeActionPanel";
import type { HomeActionItem } from "../types/home.types";

const actionItems: HomeActionItem[] = [
  {
    title: "QR kod okutarak fotoğraf yükle",
    description: "Misafirlerinin anıları kolayca yüklensin ve görüntülensin.",
    icon: Camera,
  },
  {
    title: "Kod girerek fotoğraf yükle",
    description: "Etkinlik kodunu girerek fotoğraflarınızı yükleyin.",
    icon: KeyRound,
  },
];

export function HomeHero() {
  return (
    <section className="relative pt-20 lg:pt-28">
      <div className="pointer-events-none absolute left-0 top-24 hidden h-[560px] w-[230px] rounded-r-full bg-[radial-gradient(circle,#c895e8_0%,transparent_68%)] opacity-20 lg:block" />
      <div className="pointer-events-none absolute right-0 top-20 hidden h-[620px] w-[260px] rounded-l-full bg-[radial-gradient(circle,#b277df_0%,transparent_70%)] opacity-20 lg:block" />

      <AppContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-[620px]">
            <div className="mb-10 flex items-center gap-7">
              <div className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#c7a3e8] to-[#8f58c9] text-white shadow-lg">
                <span className="weddion-serif text-6xl leading-none">W</span>
              </div>

              <span className="weddion-serif text-6xl tracking-wide text-[#8d62b8] md:text-7xl">
                Weddion
              </span>
            </div>

            <h1 className="weddion-serif max-w-[540px] text-6xl font-bold leading-[1.05] tracking-tight text-[#2d2138] md:text-7xl">
              Davetiyeni zarifçe oluştur
            </h1>

            <p className="mt-7 max-w-[500px] text-xl leading-8 text-[#6c6275]">
              Misafirlerini yönet, katılım al ve etkinlik anılarını tek yerde
              topla.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <AppButton className="w-full sm:w-56">Giriş Yap</AppButton>
              <AppButton variant="outline" className="w-full sm:w-52">
                Üye Ol
              </AppButton>
            </div>
          </div>

          <AppCard className="p-8">
            <div className="rounded-[24px] bg-gradient-to-r from-[#f2e9f7] to-[#faf6fc] p-6">
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#dbc8e9] bg-[#f4eafa] text-[#8f58c9]">
                  <Sparkle size={30} fill="currentColor" />
                </div>

                <div>
                  <h2 className="weddion-serif text-2xl font-bold text-[#2d2138]">
                    Davetiyeni zarifçe oluştur
                  </h2>
                  <p className="mt-2 text-[15px] leading-6 text-[#6c6275]">
                    Misafirlerini yönet, katılım al ve etkinlik anılarını tek
                    yerde topla.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-7">
              {actionItems.map((item) => (
                <HomeActionPanel key={item.title} item={item} />
              ))}
            </div>
          </AppCard>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3 text-[#9b62d0]">
            <span className="h-px w-20 bg-[#d8bee9]" />
            <Heart size={22} fill="currentColor" />
            <span className="h-px w-20 bg-[#d8bee9]" />
          </div>
        </div>
      </AppContainer>
    </section>
  );
}