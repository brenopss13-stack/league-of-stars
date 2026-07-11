import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="flex flex-wrap items-center justify-center gap-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[56px] md:leading-[1.05]"
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
