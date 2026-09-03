import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
  light?: boolean;
}

/**
 * Text-based recreation of the flyer logo: a script "Ade" with a
 * decorative chef-hat/ribbon flourish above it, and "CAKES HAVEN" below.
 */
export default function Logo({ className, light = false }: LogoProps) {
  return (
    <div className={cn("flex select-none flex-col items-center leading-none", className)}>
      <svg
        viewBox="0 0 120 40"
        className="mb-[-10px] h-8 w-auto text-coral"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 30C40 12 55 8 65 14C58 6 70 2 78 8C86 2 100 8 98 18C96 26 82 30 70 26C60 32 42 33 30 30Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path d="M55 26C60 20 70 20 76 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span
        className={cn(
          "font-script text-4xl sm:text-5xl",
          light ? "text-white" : "text-brown",
        )}
      >
        Ade
      </span>
      <span
        className={cn(
          "mt-1 flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.35em] sm:text-xs",
          light ? "text-white/90" : "text-coral",
        )}
      >
        <span className="h-px w-4 bg-current opacity-70" />
        CAKES & MORE
        <span className="h-px w-4 bg-current opacity-70" />
      </span>
    </div>
  );
}
