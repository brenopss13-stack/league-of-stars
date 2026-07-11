import { motion } from "framer-motion";
import type { Player } from "@/lib/ranking-data";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { AnimatedRevenue } from "./AnimatedRevenue";



type Props = {
  player: Player;
  position: 1 | 2 | 3;
};

const accentByPos = {
  1: "#F4C542",
  2: "#C0C0C0",
  3: "#CD7F32",
} as const;
const glowByPos = {
  1: "rgba(244,197,66,0.14)",
  2: "rgba(220,220,230,0.08)",
  3: "rgba(205,127,50,0.10)",
} as const;

export function PodiumCard({ player, position }: Props) {
  const isFirst = position === 1;
  const accent = accentByPos[position];
  const glow = glowByPos[position];
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
      {/* soft ambient glow behind the card */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${
          isFirst ? "-inset-10 opacity-80" : "-inset-6 opacity-60"
        }`}
        style={{
          background: `radial-gradient(closest-side, ${glow}, transparent 75%)`,
        }}
      />

      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0F0F10]/80 backdrop-blur-xl transition-all duration-300 group-hover:border-white/12 sm:rounded-3xl ${
          isFirst ? "p-4 sm:p-8" : "p-3 sm:p-6"
        }`}
        style={{
          boxShadow: isFirst
            ? `0 24px 60px -30px rgba(0,0,0,0.7), 0 1px 0 0 rgba(255,255,255,0.04) inset`
            : `0 18px 50px -30px rgba(0,0,0,0.6), 0 1px 0 0 rgba(255,255,255,0.03) inset`,
        }}
      >
        {/* soft top hairline */}
        <div
          aria-hidden
          className="absolute inset-x-10 top-0 h-px opacity-50"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />

        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar
              initials={player.avatar}
              image={player.image}
              name={player.name}
              size={isFirst ? 88 : 68}
              mobileSize={isFirst ? 60 : 48}
            />
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

