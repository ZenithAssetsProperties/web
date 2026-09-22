"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Three short, self-contained lines instead of one long sentence forced to
// wrap awkwardly — each grounded in the brand guideline (accessibility,
// trust/transparency, who the platform is for), not invented copy.
const messages = [
  { lead: "Property ownership, ", emphasis: "without the millions." },
  { lead: "Secure investing, ", emphasis: "full transparency." },
  { lead: "Built for everyday investors, ", emphasis: "and the diaspora." },
];

// How long each message stays fully visible before the next transition
// starts, and how long the cross-fade itself takes.
const DISPLAY_MS = 6000;
const TRANSITION_MS = 500;

/**
 * Auto-rotates through the messages with a genuine cross-fade — the
 * outgoing line eases out, then the incoming one eases in, rather than an
 * abrupt cut. Pauses while hovered so reading isn't interrupted mid-line.
 */
export function HeroHeadline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const displayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;

    displayTimer.current = setTimeout(() => {
      setVisible(false);
      swapTimer.current = setTimeout(() => {
        setIndex((current) => (current + 1) % messages.length);
        setVisible(true);
      }, TRANSITION_MS);
    }, DISPLAY_MS);

    return () => {
      if (displayTimer.current) clearTimeout(displayTimer.current);
      if (swapTimer.current) clearTimeout(swapTimer.current);
    };
  }, [index, paused]);

  const message = messages[index];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span
        className={cn(
          "block ease-out",
          visible
            ? "translate-y-0 opacity-100 transition-all duration-500"
            : "-translate-y-1.5 opacity-0 transition-all duration-300",
        )}
      >
        {message?.lead}
        <em className="text-brand-300">{message?.emphasis}</em>
      </span>
    </div>
  );
}
