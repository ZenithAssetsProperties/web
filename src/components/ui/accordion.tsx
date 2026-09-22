"use client";

import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  question: string;
  answer: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  /** Index open on first render — omit to start fully collapsed. */
  defaultOpen?: number;
  className?: string;
}

/**
 * Hand-rolled accordion (no dependency) — single item open at a time.
 * Height animates via a CSS grid-template-rows 0fr/1fr trick rather than
 * measuring pixel heights in JS, so it animates to true "auto" height
 * smoothly with no ResizeObserver.
 */
export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ?? null);

  return (
    <div className={cn("divide-border border-border divide-y border-t", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-muted-foreground/60 font-mono text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-heading text-base font-semibold transition-colors sm:text-lg",
                    open ? "text-brand-600 dark:text-brand-400" : "text-foreground",
                  )}
                >
                  {item.question}
                </span>
              </span>
              <Plus
                className={cn(
                  "text-muted-foreground mt-1 size-5 shrink-0 transition-transform duration-300 ease-out",
                  open && "text-brand-600 dark:text-brand-400 rotate-45",
                )}
                aria-hidden="true"
              />
            </button>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="text-muted-foreground max-w-xl py-0.5 pb-5 pl-11 text-sm leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
