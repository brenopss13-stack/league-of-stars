type Props = {
  size?: number;
  className?: string;
};

/** Instagram-style verified badge in purple */
export function VerifiedBadge({ size = 20, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-label="Verificado"
      role="img"
    >
      <defs>
        <linearGradient id="verified-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      {/* 12-point starburst (Instagram-like scalloped edge) */}
      <path
        fill="url(#verified-purple)"
        d="M12 1.5l2.09 1.62 2.6-.55.98 2.47 2.47.98-.55 2.6L21.21 10.7l-1.62 2.09.55 2.6-2.47.98-.98 2.47-2.6-.55L12 19.91l-2.09-1.62-2.6.55-.98-2.47-2.47-.98.55-2.6L2.79 10.7l1.62-2.09-.55-2.6 2.47-.98.98-2.47 2.6.55L12 1.5z"
      />
      <path
        fill="#FFFFFF"
        d="M10.6 14.6l-2.7-2.7 1.4-1.4 1.3 1.3 3.9-3.9 1.4 1.4-5.3 5.3z"
      />
    </svg>
  );
}
