import { Crown, Medal, Award } from "lucide-react";

type Props = { position: 1 | 2 | 3 };

const styles = {
  1: {
    bg: "bg-[#F4C542]/12 border-[#F4C542]/40 text-[#F4C542]",
    icon: <Crown className="h-3.5 w-3.5" />,
    label: "1º Lugar",
  },
  2: {
    bg: "bg-[#C0C0C0]/10 border-[#C0C0C0]/35 text-[#C0C0C0]",
    icon: <Medal className="h-3.5 w-3.5" />,
    label: "2º Lugar",
  },
  3: {
    bg: "bg-[#CD7F32]/12 border-[#CD7F32]/40 text-[#CD7F32]",
    icon: <Award className="h-3.5 w-3.5" />,
    label: "3º Lugar",
  },
} as const;

export function Badge({ position }: Props) {
  const s = styles[position];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${s.bg} backdrop-blur-md`}
    >
      {s.icon}
      {s.label}
    </span>
  );
}
