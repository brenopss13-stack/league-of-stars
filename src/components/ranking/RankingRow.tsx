import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import type { Player } from "@/lib/ranking-data";
import { Avatar } from "./Avatar";
import { formatRevenue } from "@/lib/format-revenue";

function PositionDelta({ change }: { change: number }) {
  if (change === 0) {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/50"
        title="Manteve a posição"
      >
        <Minus className="h-3.5 w-3.5" />
        <span className="tabular-nums">—</span>
      </span>
    );
  }
  const up = change > 0;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold tabular-nums ${
        up
          ? "border-[#22C55E]/25 bg-[#22C55E]/10 text-[#22C55E]"
          : "border-red-500/25 bg-red-500/10 text-red-400"
      }`}
      title={up ? `Subiu ${change} posições` : `Desceu ${Math.abs(change)} posições`}
    >
      {up ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />}
      {Math.abs(change)}
    </span>
  );
}

export function RankingRow({
  player,
  position,
  index,
}: {
  player: Player;
  position: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.05 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.01 }}
      className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-[18px] border border-white/[0.08] bg-[#111111]/60 px-5 py-4 backdrop-blur-xl transition-colors duration-300 hover:border-white/15 sm:grid-cols-[64px_minmax(0,1fr)_auto_auto] sm:px-6"
      style={{ boxShadow: "0 10px 40px -20px rgba(0,0,0,0.5)" }}
    >
      <div className="col-span-1 flex min-w-0 items-center gap-4 sm:contents">
        <span className="hidden w-[64px] shrink-0 text-lg font-semibold tabular-nums text-white/40 sm:block">
          #{position}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-white/40 sm:hidden">
          #{position}
        </span>
        <div className="flex min-w-0 items-center gap-3">
          <Avatar initials={player.avatar} size={44} />
          <span className="truncate text-base font-medium text-white">
            {player.name}
          </span>
        </div>
      </div>

      <div className="text-right sm:text-left">
        <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
          {formatRevenue(player.revenue)}
        </span>
      </div>

      <div className="hidden justify-end sm:flex">
        <PositionDelta change={player.positionChange} />
      </div>
    </motion.div>
  );
}

