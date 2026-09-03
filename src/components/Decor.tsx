import { cn } from "@/utils/cn";

/** Small heart accent, inspired by the flyer's scattered heart doodles. */
export function Heart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-4 w-4", className)}>
      <path d="M12 21s-7.2-4.6-10-9.1C.4 8.7 1.9 5 5.4 5c2 0 3.4 1.1 4.1 2.3C10.2 6.1 11.6 5 13.6 5c3.5 0 5 3.7 3.4 6.9C19.2 16.4 12 21 12 21z" />
    </svg>
  );
}

/** Dotted grid accent used in the flyer corners. */
export function DotGrid({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={cn("h-16 w-16 text-soft-pink", className)} fill="currentColor">
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={6 + col * 14} cy={6 + row * 14} r="2.2" />
        )),
      )}
    </svg>
  );
}

/** Leaf/floral accent echoing the flyer's leaf sprigs. */
export function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 200" className={cn("h-40 w-20 text-soft-pink", className)} fill="none">
      <path d="M50 5C50 60 50 140 50 195" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      {[20, 55, 90, 125, 160].map((y, i) => (
        <path
          key={y}
          d={`M50 ${y} C${i % 2 === 0 ? "20 " + (y + 15) : "80 " + (y + 15)}, ${
            i % 2 === 0 ? "15 " + (y + 30) : "85 " + (y + 30)
          }, 50 ${y + 35}`}
          fill="currentColor"
          opacity="0.55"
        />
      ))}
    </svg>
  );
}

/** Soft blob accent for section backgrounds. */
export function Blob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={cn("text-blush", className)} fill="currentColor">
      <path d="M45.9,-58.5C58.3,-49.3,66.4,-33.9,69.8,-17.7C73.1,-1.6,71.6,15.3,63.9,28.9C56.2,42.6,42.3,52.9,27.1,60.2C11.9,67.5,-4.7,71.8,-20.4,68.7C-36.1,65.6,-51,55,-60.6,40.5C-70.3,26,-74.7,7.6,-71.5,-9.1C-68.3,-25.9,-57.4,-41,-43.7,-50.4C-30,-59.8,-15,-63.5,1.6,-65.6C18.2,-67.7,33.5,-67.7,45.9,-58.5Z" transform="translate(100 100)" />
    </svg>
  );
}
