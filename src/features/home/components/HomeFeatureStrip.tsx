import { CalendarHeart, Heart, UsersRound } from "lucide-react";
import { AppContainer } from "@/components/ui/AppContainer";
import type { HomeFeatureItem } from "../types/home.types";

const features: HomeFeatureItem[] = [
  {
    title: "Kolay Davetiye Oluşturma",
    description:
      "Zarif şablonlar ve kişiselleştirme araçlarıyla davetiyeni dakikalar içinde hazırla.",
    icon: CalendarHeart,
  },
  {
    title: "Misafir Yönetimi",
    description:
      "RSVP takibi yap, misafir listeni düzenle ve katılım durumlarını kolayca yönet.",
    icon: UsersRound,
  },
  {
    title: "Anıları Topla",
    description:
      "Fotoğraf ve videoları tek bir yerde topla, özel anılarını ölümsüzleştir.",
    icon: Heart,
  },
];

export function HomeFeatureStrip() {
  return (
    <section className="relative z-10 pb-16 pt-10">
      <AppContainer>
        <div className="rounded-[28px] border border-[#eadcf2] bg-white/70 px-8 py-7 shadow-[0_18px_60px_rgba(75,45,95,0.08)] backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex gap-7 lg:border-r lg:border-[#d8bee9] lg:pr-8 last:lg:border-r-0"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#f4eafa] text-[#8f58c9]">
                    <Icon size={38} />
                  </div>

                  <div>
                    <h3 className="weddion-serif text-2xl font-bold text-[#2d2138]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#6c6275]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="weddion-serif mt-7 text-center text-2xl text-[#9b62d0]">
          Weddion ile davetiyeler artık daha romantik ve modern.
        </p>
      </AppContainer>
    </section>
  );
}