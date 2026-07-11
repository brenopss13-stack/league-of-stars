import type { Player } from "@/lib/ranking-data";
import { PodiumCard } from "./PodiumCard";

export function Podium({ top3 }: { top3: Player[] }) {
  const [first, second, third] = top3;
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-end sm:gap-8">
      <div className="order-2 sm:order-1">
        {second && <PodiumCard player={second} position={2} />}
      </div>
      <div className="order-1 sm:order-2">
        {first && <PodiumCard player={first} position={1} />}
      </div>
      <div className="order-3">
        {third && <PodiumCard player={third} position={3} />}
      </div>
    </div>
  );
}
