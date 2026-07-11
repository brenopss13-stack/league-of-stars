import type { Player } from "@/lib/ranking-data";
import { PodiumCard } from "./PodiumCard";

export function Podium({ top3 }: { top3: Player[] }) {
  const [first, second, third] = top3;
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-center sm:gap-8">
      {/* 1st: centered on top for mobile, middle & taller on desktop */}
      {first && (
        <div className="order-1 flex w-full max-w-[280px] justify-center sm:order-2 sm:w-auto sm:max-w-none">
          <PodiumCard player={first} position={1} />
        </div>
      )}

      {/* 2nd & 3rd: side by side on mobile, flanking on desktop */}
      <div className="order-2 grid w-full grid-cols-2 gap-3 sm:contents">
        {second && (
          <div className="flex sm:order-1 sm:mt-8 sm:flex-none">
            <PodiumCard player={second} position={2} />
          </div>
        )}
        {third && (
          <div className="flex sm:order-3 sm:mt-14 sm:flex-none">
            <PodiumCard player={third} position={3} />
          </div>
        )}
      </div>
    </div>
  );
}
