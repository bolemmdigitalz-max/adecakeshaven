import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Wraps children in a fade-up-on-scroll animation. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
