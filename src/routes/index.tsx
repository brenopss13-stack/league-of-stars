import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { players } from "@/lib/ranking-data";
import { Header } from "@/components/ranking/Header";
import { Podium } from "@/components/ranking/Podium";
import { RankingList } from "@/components/ranking/RankingList";
import { Particles } from "@/components/ranking/Particles";

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
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20 px-6 py-20 md:py-28">
        <Header />
        <section>
          <Podium top3={top3} />
        </section>
        <section className="flex flex-col gap-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                Ranking completo
              </h2>
              <p className="mt-1 text-sm text-[#9CA3AF]">
                Posições 4 a 10 · atualizado em tempo real
              </p>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent sm:block" />
          </div>
          <RankingList players={rest} />
        </section>

        <footer className="pt-8 text-center text-xs text-white/30">
          © Marketplace · Temporada 2026
        </footer>
      </div>
    </main>
  );
}
