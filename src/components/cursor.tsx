"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, [data-cursor]';

/**
 * Hand-rolled custom cursor (no dependency): a tight dot tracks the pointer
 * exactly, a ring trails behind it with easing. Hovering anything matching
 * INTERACTIVE_SELECTOR grows the ring into a filled blob; add
 * `data-cursor-text="View"` to any element to have it show a label inside
 * the ring while hovered. Disabled entirely on touch devices and when the
 * user prefers reduced motion — the native cursor stays in those cases.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hasShown = false;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!hasShown) {
        hasShown = true;
        setVisible(true);
      }
      dotRef.current?.style.setProperty(
        "transform",
        `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`,
      );
    };

    const onOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>(INTERACTIVE_SELECTOR);
      setHovering(!!target);
      setLabel(target?.dataset.cursor ?? null);
    };

    const onLeaveWindow = () => setVisible(false);

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ringRef.current?.style.setProperty(
        "transform",
        `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`,
      );
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={cn(
          "bg-brand-600 dark:bg-brand-400 pointer-events-none fixed top-0 left-0 z-[9999] size-1.5 rounded-full transition-opacity duration-200",
          hovering && "opacity-0",
          !visible && "opacity-0",
        )}
      />
      <div
        ref={ringRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color,opacity] duration-200 ease-out",
          hovering
            ? "bg-brand-600 dark:bg-brand-400 size-16 border-transparent"
            : "border-brand-600/40 dark:border-brand-400/50 size-8 bg-transparent",
          visible ? "opacity-100" : "opacity-0",
        )}
      >
        {label && (
          <span className="dark:text-brand-950 text-[10px] font-semibold tracking-wide text-white uppercase">
            {label}
          </span>
        )}
      </div>
    </>
  );
}
