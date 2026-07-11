import type { Player } from "@/lib/ranking-data";
import { PodiumCard } from "./PodiumCard";

export function Podium({ top3 }: { top3: Player[] }) {
  const [first, second, third] = top3;
  return (
    <div className="flex items-end justify-center gap-3 sm:gap-8">
      <div className="flex flex-1 sm:mt-8 sm:flex-none">
        {second && <PodiumCard player={second} position={2} />}
      </div>
      <div className="flex flex-1 sm:flex-none">
        {first && <PodiumCard player={first} position={1} />}
      </div>
      <div className="flex flex-1 sm:mt-14 sm:flex-none">
        {third && <PodiumCard player={third} position={3} />}
      </div>
    </div>
  );
}
