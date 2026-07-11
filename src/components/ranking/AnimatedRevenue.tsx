import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { formatRevenue } from "@/lib/format-revenue";

export function AnimatedRevenue({
  value,
  className,
  delay = 0,
}: {
  value: number;
  className?: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, delay]);
  return <span className={className}>{formatRevenue(Math.round(display))}</span>;
}
