import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-md"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22C55E]" />
        Temporada ativa · Atualizado agora
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[56px] md:leading-[1.05]"
      >
        <Trophy
          className="h-9 w-9 md:h-12 md:w-12"
          style={{ color: "#F4C542" }}
          strokeWidth={2.2}
        />
        <span>Ranking</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-4 max-w-xl text-base text-[#9CA3AF] sm:text-lg md:text-xl"
      >
        Top 10 Players do Marketplace
      </motion.p>
    </div>
  );
}
