import { useIsMobile } from "@/hooks/use-mobile";
import { VerifiedBadge } from "./VerifiedBadge";

type Props = {
  initials: string;
  image?: string;
  name?: string;
  size?: number;
  mobileSize?: number;
  ring?: "gold" | "silver" | "bronze" | "none";
  verified?: boolean;
};

const ringColors = {
  gold: {
    solid: "#F4C542",
    glow: "rgba(244,197,66,0.28)",
  },
  silver: {
    solid: "#D9D9DE",
    glow: "rgba(220,220,230,0.22)",
  },
  bronze: {
    solid: "#CD7F32",
    glow: "rgba(205,127,50,0.24)",
  },
};

export function Avatar({
  initials,
  image,
  name,
  size = 56,
  mobileSize,
  ring = "none",
  verified = false,
}: Props) {
  const isMobile = useIsMobile();
  const finalSize = isMobile && mobileSize ? mobileSize : size;
  const s = finalSize;
  const badgeSize = Math.max(14, Math.round(s * 0.32));

  const inner = image ? (
    <img
      src={image}
      alt={name ?? initials}
      className="h-full w-full rounded-full object-cover"
      loading="lazy"
    />
  ) : (
    <div
      className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-white/12 to-white/[0.02] font-semibold text-white"
      style={{ fontSize: s * 0.36 }}
    >
      {initials}
    </div>
  );

  const badge = verified && (
    <VerifiedBadge
      size={badgeSize}
      className="absolute -bottom-0.5 -right-0.5 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
    />
  );

  if (ring === "none") {
    return (
      <div className="relative shrink-0" style={{ width: s, height: s }}>
        <div className="h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-white/10 to-white/[0.02]">
          {inner}
        </div>
        {badge}
      </div>
    );
  }

  const c = ringColors[ring];
  const ringWidth = Math.max(2, Math.round(s * 0.03));
  const gap = Math.max(2, Math.round(s * 0.045));

  return (
    <div className="relative shrink-0" style={{ width: s, height: s }}>
      {/* very soft outer glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: `radial-gradient(closest-side, ${c.glow}, transparent 70%)`,
          transform: "scale(1.35)",
        }}
      />
      {/* thin solid ring with inset gap around the image */}
      <div
        className="relative h-full w-full rounded-full"
        style={{
          padding: ringWidth,
          background: c.solid,
          boxShadow: `0 0 12px ${c.glow}`,
        }}
      >
        <div
          className="h-full w-full overflow-hidden rounded-full bg-[#0F0F10]"
          style={{ padding: gap }}
        >
          <div className="h-full w-full overflow-hidden rounded-full">
            {inner}
          </div>
        </div>
      {badge}
    </div>
  );
}
