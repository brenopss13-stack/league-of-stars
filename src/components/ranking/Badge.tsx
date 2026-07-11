type Props = { position: 1 | 2 | 3 };

const styles = {
  1: {
    bg: "bg-[#F4C542]/12 border-[#F4C542]/40 text-[#F4C542]",
    label: "1º Lugar",
  },
  2: {
    bg: "bg-[#C0C0C0]/10 border-[#C0C0C0]/35 text-[#C0C0C0]",
    label: "2º Lugar",
  },
  3: {
    bg: "bg-[#CD7F32]/12 border-[#CD7F32]/40 text-[#CD7F32]",
    label: "3º Lugar",
  },
} as const;

export function Badge({ position }: Props) {
  const s = styles[position];
  return (
    <span
      className={`inline-flex max-w-full items-center whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide sm:px-3 sm:py-1 sm:text-xs ${s.bg} backdrop-blur-md`}
    >
      <span className="truncate">{s.label}</span>
    </span>
  );
}
