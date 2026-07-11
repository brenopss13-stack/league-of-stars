import { motion } from "framer-motion";
import type { Player } from "@/lib/ranking-data";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { AnimatedRevenue } from "./AnimatedRevenue";


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
      className={`group relative flex flex-col items-center ${
        isFirst ? "w-full sm:w-[320px]" : "w-full sm:w-[240px]"
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
        className={`relative w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111111]/70 backdrop-blur-xl transition-all duration-300 group-hover:border-white/15 ${
          isFirst ? "p-8" : "p-6"
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

        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar
              initials={player.avatar}
              size={isFirst ? 88 : 68}
              ring={ringByPos[position]}
            />
            <div
              className="absolute -bottom-1 left-1/2 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-[#050505] text-xs font-bold"
              style={{ color: accent }}
            >
              {position}
            </div>
          </div>

          <div className="mt-5">
            <Badge position={position} />
          </div>

          <h3
            className={`mt-4 font-semibold text-white ${
              isFirst ? "text-2xl" : "text-lg"
            }`}
          >
            {player.name}
          </h3>

          <AnimatedRevenue
            value={player.revenue}
            delay={0.4 + delay}
            className={`mt-3 block font-bold tracking-tight text-white ${
              isFirst ? "text-4xl" : "text-3xl"
            }`}
          />

        </div>

    </motion.div>
  );
}
