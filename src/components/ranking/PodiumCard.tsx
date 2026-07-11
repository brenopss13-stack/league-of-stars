import { motion } from "framer-motion";
import { Crown } from "lucide-react";
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
const glowByPos = {
  1: "rgba(244,197,66,0.22)",
  2: "rgba(220,220,230,0.14)",
  3: "rgba(205,127,50,0.16)",
} as const;
const rgbByPos = {
  1: "244,197,66",
  2: "220,220,230",
  3: "205,127,50",
} as const;

export function PodiumCard({ player, position }: Props) {
  const isFirst = position === 1;
  const accent = accentByPos[position];
  const glow = glowByPos[position];
  const rgb = rgbByPos[position];
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
      {/* soft ambient glow surrounding the card */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -z-10 rounded-[28px] blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
          isFirst ? "-inset-8 opacity-90" : "-inset-6 opacity-75"
        }`}
        style={{
          background: `radial-gradient(closest-side, ${glow}, transparent 78%)`,
        }}
      />

      {isFirst && (
        <motion.div
          initial={{ opacity: 0, y: -8, rotate: -12 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2"
          style={{ top: "-22px" }}
        >
          <Crown
            className="h-7 w-7 sm:h-10 sm:w-10"
            style={{
              color: "#F4C542",
              filter: "drop-shadow(0 0 10px rgba(244,197,66,0.55))",
            }}
            strokeWidth={2.2}
            fill="#F4C542"
            fillOpacity={0.25}
          />
        </motion.div>
      )}


      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0F0F10]/80 backdrop-blur-xl transition-all duration-300 group-hover:border-white/12 sm:rounded-3xl ${
          isFirst ? "p-4 sm:p-8" : "p-3 sm:p-6"
        }`}
        style={{
          boxShadow: isFirst
            ? `0 24px 60px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(${rgb},0.08) inset, 0 0 40px -10px rgba(${rgb},0.25), 0 1px 0 0 rgba(255,255,255,0.04) inset`
            : `0 18px 50px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(${rgb},0.06) inset, 0 0 32px -12px rgba(${rgb},0.18), 0 1px 0 0 rgba(255,255,255,0.03) inset`,
        }}
      >
        {/* accent border sheen wrapping the card */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-90"
          style={{
            padding: 1,
            background: `linear-gradient(135deg, rgba(${rgb},0.55) 0%, rgba(${rgb},0.05) 30%, transparent 50%, rgba(${rgb},0.05) 70%, rgba(${rgb},0.45) 100%)`,
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        {/* subtle top highlight */}
        <div
          aria-hidden
          className="absolute inset-x-10 top-0 h-px opacity-40"
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
              ring={ringByPos[position]}
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

