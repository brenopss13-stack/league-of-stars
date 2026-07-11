import type { Player } from "@/lib/ranking-data";
import { PodiumCard } from "./PodiumCard";

export function Podium({ top3 }: { top3: Player[] }) {
  const [first, second, third] = top3;
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-center sm:gap-8">
      {/* 1st: centered on top for mobile, middle & taller on desktop */}
      {first && (
        <div className="order-1 flex w-full max-w-[320px] justify-center sm:order-2 sm:w-auto">
          <PodiumCard player={first} position={1} />
        </div>
      )}
      {/* 2nd: pushed down on desktop to reinforce hierarchy */}
      {second && (
        <div className="order-2 flex flex-1 sm:order-1 sm:mt-8 sm:flex-none">
          <PodiumCard player={second} position={2} />
        </div>
      )}
      {/* 3rd: pushed down further on desktop */}
      {third && (
        <div className="order-3 flex flex-1 sm:mt-14 sm:flex-none">
          <PodiumCard player={third} position={3} />
        </div>
      )}
    </div>
  );
}
