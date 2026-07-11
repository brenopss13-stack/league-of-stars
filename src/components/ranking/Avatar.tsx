type Props = {
  initials: string;
  size?: number;
  ring?: "gold" | "silver" | "bronze" | "none";
};

const ringColors = {
  gold: {
    from: "#FFE9A8",
    mid: "#F4C542",
    to: "#B8860B",
    glow: "rgba(244,197,66,0.55)",
  },
  silver: {
    from: "#FFFFFF",
    mid: "#E5E5E5",
    to: "#8A8A8A",
    glow: "rgba(220,220,230,0.45)",
  },
  bronze: {
    from: "#F1B27A",
    mid: "#CD7F32",
    to: "#7A4A1E",
    glow: "rgba(205,127,50,0.5)",
  },
};

export function Avatar({ initials, size = 56, ring = "none" }: Props) {
  if (ring === "none") {
    return (
      <div
        className="grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] font-semibold text-white/90"
        style={{ width: size, height: size, fontSize: size * 0.36 }}
      >
        {initials}
      </div>
    );
  }

  const c = ringColors[ring];
  const ringWidth = Math.max(3, Math.round(size * 0.055));

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      {/* soft outer glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: `radial-gradient(closest-side, ${c.glow}, transparent 70%)`,
          transform: "scale(1.6)",
        }}
      />
      {/* metallic gradient ring */}
      <div
        className="relative grid h-full w-full place-items-center rounded-full"
        style={{
          background: `conic-gradient(from 220deg, ${c.from}, ${c.mid} 40%, ${c.to} 70%, ${c.from})`,
          padding: ringWidth,
          boxShadow: `0 0 0 1px ${c.mid}55, 0 0 28px ${c.glow}`,
        }}
      >
        <div
          className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-white/12 to-white/[0.02] font-semibold text-white"
          style={{ fontSize: size * 0.36 }}
        >
          {initials}
        </div>
      </div>
    </div>
  );
}
