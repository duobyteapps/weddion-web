import { HomeHero } from "../components/HomeHero";
import { HomeFeatureStrip } from "../components/HomeFeatureStrip";
import { HomeFloralDecorations } from "../components/HomeFloralDecorations";

export function HomePage() {
  return (
    <main className="relative bg-background">
      <HomeFloralDecorations />

      <div className="relative z-10">
        <HomeHero />
        <HomeFeatureStrip />
      </div>
    </main>
  );
}
