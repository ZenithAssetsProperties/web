"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, [data-cursor]';

type HoverKind = "none" | "generic" | "label";

/**
 * Hand-rolled custom cursor (no dependency, no mix-blend-mode — that was
 * unreliable, especially over the hero <video>). Visibility instead comes
 * from a hard drop-shadow on a solid white fill, which reads against any
 * background without depending on compositing behavior:
 *
 * - idle: a dot tracks the pointer exactly, a loose ring trails behind it.
 * - generic interactive (any <a>/<button>/input/etc without data-cursor):
 *   the dot ticks up slightly and the ring hides — a small "this is
 *   clickable" nudge that never covers a small control like an icon button.
 * - `data-cursor="Label"` elements (big deliberate moments, e.g. a whole
 *   property card): the ring grows into a filled blob showing that label.
 *
 * Disabled entirely on touch devices — a cursor concept doesn't apply
 * there. NOT gated behind prefers-reduced-motion: that setting exists for
 * autoplaying/parallax motion the user didn't initiate (Ken Burns, shimmer,
 * marquee — see globals.css, which does gate those), not for a dot that
 * tracks the user's own deliberate pointer movement 1:1.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hoverKind, setHoverKind] = useState<HoverKind>("none");
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
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
      if (!target) {
        setHoverKind("none");
        setLabel(null);
      } else if (target.dataset.cursor) {
        setHoverKind("label");
        setLabel(target.dataset.cursor);
      } else {
        setHoverKind("generic");
        setLabel(null);
      }
    };

    const onLeaveWindow = () => setVisible(false);

    const tick = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
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
          "bg-accent-500 pointer-events-none fixed top-0 left-0 z-[9999] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.6),0_0_0_1.5px_white] transition-[width,height,opacity] duration-200",
          hoverKind === "generic" ? "size-4" : "size-3",
          hoverKind === "label" && "opacity-0",
          !visible && "opacity-0",
        )}
      />
      <div
        ref={ringRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full transition-[width,height,background-color,opacity] duration-200 ease-out",
          hoverKind === "label"
            ? "bg-brand-600 dark:bg-brand-400 size-16 shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
            : "bg-brand-950/15 size-11 border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.45)] backdrop-blur-[1px]",
          visible && hoverKind !== "generic" ? "opacity-100" : "opacity-0",
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
