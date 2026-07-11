import type { Player } from "@/lib/ranking-data";
import { RankingRow } from "./RankingRow";

export function RankingList({ players }: { players: Player[] }) {
  return (
    <div className="flex flex-col gap-3">
      {players.map((p, i) => (
        <RankingRow key={p.name} player={p} position={i + 4} index={i} />
      ))}
    </div>
  );
}
