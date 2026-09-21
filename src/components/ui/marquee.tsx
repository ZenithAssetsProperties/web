import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: ReactNode;
  /** Seconds for one full loop — lower plays faster. */
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  gap?: "sm" | "md" | "lg";
}

const gapValues = { sm: "1rem", md: "1.5rem", lg: "2rem" } as const;

/**
 * Infinite horizontally-scrolling strip. Renders the content twice so the
 * duplicate track lands exactly where the first one exits — see the
 * `marquee` keyframes in globals.css for the seamless-loop math. Pure CSS
 * animation, so this stays a Server Component.
 */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  pauseOnHover = true,
  gap = "md",
  className,
  style,
  ...props
}: MarqueeProps) {
  const trackStyle = {
    gap: "var(--gap)",
    "--marquee-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <div
      className={cn("group relative flex w-full overflow-hidden fade-edges", className)}
      style={{ "--gap": gapValues[gap], gap: "var(--gap)", ...style } as CSSProperties}
      {...props}
    >
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={trackStyle}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex w-max shrink-0 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={trackStyle}
      >
        {children}
      </div>
    </div>
  );
}
