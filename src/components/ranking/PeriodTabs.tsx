import { motion } from "framer-motion";
import { useState } from "react";

const OPTIONS = ["Semanal", "Mensal", "Anual"] as const;
type Period = (typeof OPTIONS)[number];

export function PeriodTabs({
  defaultValue = "Mensal",
  onChange,
}: {
  defaultValue?: Period;
  onChange?: (value: Period) => void;
}) {
  const [active, setActive] = useState<Period>(defaultValue);

  return (
    <div className="flex justify-center">
      <div
        role="tablist"
        aria-label="Período do ranking"
        className="relative inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#111111]/60 p-1 backdrop-blur-xl"
        style={{ boxShadow: "0 10px 40px -20px rgba(0,0,0,0.6)" }}
      >
        {OPTIONS.map((opt) => {
          const isActive = active === opt;
          return (
            <button
              key={opt}
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActive(opt);
                onChange?.(opt);
              }}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 sm:px-6 sm:py-2.5 ${
                isActive ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="period-tab-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.08]"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(255,255,255,0.06), 0 4px 16px -6px rgba(244,197,66,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
