import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { Player } from "@/lib/ranking-data";
import { Avatar } from "./Avatar";
import { formatRevenue } from "@/lib/format-revenue";

export function RankingRow({
  player,
  position,
  index,
}: {
  player: Player;
  position: number;
  index: number;
}) {
  const up = player.growth >= 0;
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
      {/* position + avatar + name (mobile groups these) */}
      <div className="col-span-1 flex min-w-0 items-center gap-4 sm:contents">
        <span
          className="hidden w-[64px] shrink-0 text-lg font-semibold tabular-nums text-white/40 sm:block"
        >
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

      <div
        className={`hidden items-center justify-end gap-1.5 text-sm font-medium sm:inline-flex ${
          up ? "text-[#22C55E]" : "text-red-400"
        }`}
      >
        {up ? (
          <TrendingUp className="h-4 w-4" />
        ) : (
          <TrendingDown className="h-4 w-4" />
        )}
        {up ? "+" : ""}
        {player.growth}%
      </div>
    </motion.div>
  );
}
