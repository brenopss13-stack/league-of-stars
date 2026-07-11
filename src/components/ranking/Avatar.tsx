type Props = {
  initials: string;
  size?: number;
  ring?: "gold" | "silver" | "bronze" | "none";
};

const ringMap = {
  gold: "shadow-[0_0_0_2px_rgba(244,197,66,0.6),0_0_24px_rgba(244,197,66,0.35)]",
  silver: "shadow-[0_0_0_2px_rgba(192,192,192,0.55),0_0_20px_rgba(192,192,192,0.25)]",
  bronze: "shadow-[0_0_0_2px_rgba(205,127,50,0.55),0_0_20px_rgba(205,127,50,0.25)]",
  none: "",
};

export function Avatar({ initials, size = 56, ring = "none" }: Props) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] text-white/90 font-semibold ${ringMap[ring]}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}
