"use client";

import { useEffect, useRef, useState } from "react";

// Three short, self-contained lines instead of one long sentence forced to
// wrap awkwardly — each grounded in the brand guideline (accessibility,
// trust/transparency, who the platform is for), not invented copy.
const messages = [
  { lead: "Property ownership, ", emphasis: "without the millions." },
  { lead: "Secure investing, ", emphasis: "full transparency." },
  { lead: "Built for everyday investors, ", emphasis: "and the diaspora." },
];

const ROTATE_MS = 5000;

/** Auto-rotates through the messages; pauses while hovered so reading
 * isn't interrupted mid-line. */
export function HeroHeadline() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused]);

  const message = messages[index];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span key={index} className="animate-fade-up block">
        {message?.lead}
        <em className="text-brand-300">{message?.emphasis}</em>
      </span>
    </div>
  );
}
