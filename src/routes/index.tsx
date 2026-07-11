import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { players } from "@/lib/ranking-data";
import { Header } from "@/components/ranking/Header";
import { Podium } from "@/components/ranking/Podium";
import { RankingList } from "@/components/ranking/RankingList";
import { Particles } from "@/components/ranking/Particles";
import { PeriodTabs } from "@/components/ranking/PeriodTabs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const sorted = useMemo(
    () => [...players].sort((a, b) => b.revenue - a.revenue),
    [],
  );
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#050505", fontFamily: "'Inter', sans-serif" }}
    >
      <Particles />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 py-16 sm:gap-16 sm:px-8 md:gap-20 md:px-12 md:py-28">
        <Header />
        <PeriodTabs />
        <section>
          <Podium top3={top3} />
        </section>
        <section>
          <RankingList players={rest} />
        </section>


        <footer className="pt-8 text-center text-xs text-white/30">
          © Marketplace · Temporada 2026
        </footer>
      </div>
    </main>
  );
}
