import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import type { Player } from "@/lib/ranking-data";
import { Avatar } from "./Avatar";
import { formatRevenue } from "@/lib/format-revenue";

function PositionDelta({ change }: { change: number }) {
  if (change === 0) {
    return <Minus className="h-4 w-4 text-white/40" aria-label="Manteve a posição" />;
  }
  const up = change > 0;
  return up ? (
    <ArrowUp className="h-5 w-5 text-[#22C55E]" aria-label="Subiu de posição" />
  ) : (
    <ArrowDown className="h-5 w-5 text-red-400" aria-label="Desceu de posição" />
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
      className={`group grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 rounded-[18px] border border-white/[0.06] px-4 py-3.5 backdrop-blur-xl transition-colors duration-300 hover:border-white/15 sm:grid-cols-[auto_minmax(0,1fr)_auto_auto] sm:gap-4 sm:px-6 sm:py-4 ${
        index % 2 === 0 ? "bg-[#111111]/60" : "bg-white/[0.015]"
      }`}
      style={{ boxShadow: "0 10px 40px -20px rgba(0,0,0,0.5)" }}
    >
      <div className="col-span-1 flex min-w-0 items-center gap-4 sm:contents">
        <span className="hidden min-w-[36px] shrink-0 text-lg font-semibold tabular-nums text-white/40 sm:block">
          #{position}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-white/40 sm:hidden">
          #{position}
        </span>
        <div className="flex min-w-0 items-center gap-3">
          <Avatar
            initials={player.avatar}
            image={player.image}
            name={player.name}
            size={44}
          />
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

      <div className="flex justify-end">
        <PositionDelta change={player.positionChange} />
      </div>
    </motion.div>
  );
}

