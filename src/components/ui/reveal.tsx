"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Milliseconds to hold before the entrance starts, for staggering siblings. */
  delay?: number;
  /** Direction from which the element slides into view. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Movement distance offset. Default is 'md'. */
  distance?: "sm" | "md" | "lg";
  /** Transition duration in ms. Default is 800. */
  duration?: number;
}

const distanceOffsets = {
  sm: {
    up: "translate-y-3",
    down: "-translate-y-3",
    left: "translate-x-3",
    right: "-translate-x-3",
    none: "",
  },
  md: {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
    none: "",
  },
  lg: {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "",
  },
};

/**
 * High-end entrance animation container:
 * Uses a refined luxury deceleration curve (cubic-bezier(0.16, 1, 0.3, 1))
 * and coordinates with child elements via data-visible.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = "md",
  duration = 800,
  className,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const offsetClass = distanceOffsets[distance][direction];

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn(
        "transition-all ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        visible
          ? "translate-x-0 translate-y-0 opacity-100 filter-none"
          : cn("opacity-0", offsetClass),
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: visible ? `${delay}ms` : "0ms",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
