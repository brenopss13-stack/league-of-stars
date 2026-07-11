import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Player } from "@/lib/ranking-data";
import { RankingRow } from "./RankingRow";

export function RankingList({ players }: { players: Player[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = players.slice(0, 3);
  const hidden = players.slice(3);

  return (
    <div className="flex flex-col gap-3">
      {visible.map((p, i) => (
        <RankingRow key={p.name} player={p} position={i + 4} index={i} />
      ))}

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="hidden-rows"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 overflow-hidden"
          >
            {hidden.map((p, i) => (
              <RankingRow
                key={p.name}
                player={p}
                position={i + 4 + visible.length}
                index={i + visible.length}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {hidden.length > 0 && (
        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#111111]/60 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-xl transition-colors duration-200 hover:border-white/15 hover:text-white"
            style={{ boxShadow: "0 10px 40px -20px rgba(0,0,0,0.6)" }}
            aria-expanded={expanded}
          >
            <span>
              {expanded ? "Ver menos" : `Ver mais (${hidden.length})`}
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
}
