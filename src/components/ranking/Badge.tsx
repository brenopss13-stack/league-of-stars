import { Medal } from "lucide-react";

type Props = { position: 1 | 2 | 3 };

const styles = {
  1: {
    bg: "bg-[#F4C542]/12 border-[#F4C542]/40 text-[#F4C542]",
    icon: <Medal className="h-3.5 w-3.5" />,
    label: "1º Lugar",
  },
  2: {
    bg: "bg-[#C0C0C0]/10 border-[#C0C0C0]/35 text-[#C0C0C0]",
    icon: <Medal className="h-3.5 w-3.5" />,
    label: "2º Lugar",
  },
  3: {
    bg: "bg-[#CD7F32]/12 border-[#CD7F32]/40 text-[#CD7F32]",
    icon: <Medal className="h-3.5 w-3.5" />,
    label: "3º Lugar",
  },
} as const;

export function Badge({ position }: Props) {
  const s = styles[position];
  return (
    <span
      className={`inline-flex max-w-full items-center gap-1 whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide sm:gap-1.5 sm:px-3 sm:py-1 sm:text-xs ${s.bg} backdrop-blur-md`}
    >
      <span className="shrink-0">{s.icon}</span>
      <span className="truncate">{s.label}</span>
    </span>
  );
}
