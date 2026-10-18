export function TrackMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 72"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 56c28-28 58-40 98-40 36 0 64 10 98 32"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M20 62c26-24 54-34 90-34 34 0 62 9 92 28"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <path
        d="M28 68c24-20 50-28 82-28 32 0 58 8 84 24"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.3"
      />
    </svg>
  );
}
