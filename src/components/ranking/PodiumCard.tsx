import { motion } from "framer-motion";
import type { Player } from "@/lib/ranking-data";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { AnimatedRevenue } from "./AnimatedRevenue";
import { VerifiedBadge } from "./VerifiedBadge";


type Props = {
  player: Player;
  position: 1 | 2 | 3;
};

const ringByPos = { 1: "gold", 2: "silver", 3: "bronze" } as const;
const accentByPos = {
  1: "#F4C542",
  2: "#C0C0C0",
  3: "#CD7F32",
} as const;

export function PodiumCard({ player, position }: Props) {
  const isFirst = position === 1;
  const accent = accentByPos[position];
  const delay = position === 1 ? 0.15 : position === 2 ? 0.05 : 0.25;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`group relative flex min-w-0 flex-1 flex-col items-center ${
        isFirst ? "sm:w-[320px] sm:flex-none" : "sm:w-[240px] sm:flex-none"
      }`}
    >
      {isFirst && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-16 -z-10 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(244,197,66,0.28), rgba(244,197,66,0.06) 55%, transparent 75%)",
          }}
        />
      )}

      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111]/70 backdrop-blur-xl transition-all duration-300 group-hover:border-white/15 sm:rounded-3xl ${
          isFirst ? "p-4 sm:p-8" : "p-3 sm:p-6"
        }`}
        style={{
          boxShadow: isFirst
            ? `0 30px 80px -30px rgba(244,197,66,0.35), 0 1px 0 0 rgba(255,255,255,0.04) inset`
            : `0 20px 60px -30px rgba(0,0,0,0.6), 0 1px 0 0 rgba(255,255,255,0.03) inset`,
        }}
      >
        {/* top hairline */}
        <div
          aria-hidden
          className="absolute inset-x-6 top-0 h-px opacity-60"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}80, transparent)`,
          }}
        />

        <VerifiedBadge
          size={isFirst ? 22 : 18}
          className="absolute right-3 top-3 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] sm:right-4 sm:top-4"
        />

        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar
              initials={player.avatar}
              size={isFirst ? 88 : 68}
              mobileSize={isFirst ? 60 : 48}
              ring={ringByPos[position]}
            />
            <div
              className="absolute -bottom-1 left-1/2 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-[#050505] text-[10px] font-bold sm:h-7 sm:w-7 sm:text-xs"
              style={{ color: accent }}
            >
              {position}
            </div>
          </div>

          <div className="mt-4 sm:mt-5">
            <Badge position={position} />
          </div>

          <h3
            className={`mt-3 truncate max-w-full font-semibold text-white sm:mt-4 ${
              isFirst ? "text-sm sm:text-2xl" : "text-xs sm:text-lg"
            }`}
          >
            {player.name}
          </h3>

          <AnimatedRevenue
            value={player.revenue}
            delay={0.4 + delay}
            className={`mt-2 block font-bold tracking-tight text-white sm:mt-3 ${
              isFirst ? "text-lg sm:text-4xl" : "text-base sm:text-3xl"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

