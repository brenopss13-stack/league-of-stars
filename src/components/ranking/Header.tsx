import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col items-start text-left">
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="flex w-full items-center gap-2 whitespace-nowrap text-2xl font-extrabold tracking-tight text-white sm:gap-3 sm:text-4xl md:text-5xl md:leading-[1.05] lg:text-[56px]"
      >
        <Trophy
          className="h-6 w-6 shrink-0 sm:h-9 sm:w-9 md:h-12 md:w-12"
          style={{ color: "#F4C542" }}
          strokeWidth={2.2}
        />
        <span>Ranking de Faturamento</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-3 max-w-xl text-sm text-[#9CA3AF] sm:mt-4 sm:text-lg md:text-xl"
      >
        Top 10 Players do Marketplace
      </motion.p>
    </div>
  );
}
