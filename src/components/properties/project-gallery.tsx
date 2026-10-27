"use client";

import Image from "next/image";
import { useState } from "react";
import type { ResidenceVisual } from "@/lib/seventh-residence";

export function ProjectGallery({ visuals }: { visuals: ResidenceVisual[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = visuals[activeIndex];

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-8">
      <figure className="relative aspect-[1.22] overflow-hidden bg-brand-900 sm:aspect-[1.55] lg:aspect-[1.35]">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 72vw"
          className={`object-cover ${active.kind === "plan" ? "object-contain" : "object-center"} animate-fade-in motion-reduce:animate-none`}
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-brand-950/80 to-transparent px-5 pb-4 pt-14 text-white sm:px-7 sm:pb-6">
          <span className="text-xs font-medium tracking-[0.14em] uppercase">{active.label}</span>
          <span className="font-mono text-[10px] text-white/70">
            {String(activeIndex + 1).padStart(2, "0")} / {String(visuals.length).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>

      <div className="flex gap-2.5 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {visuals.map((visual, index) => (
          <button
            key={visual.src}
            type="button"
            aria-label={`Show ${visual.label}`}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-[1.4] w-28 shrink-0 overflow-hidden bg-brand-900 transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:w-36 lg:aspect-[1.7] lg:w-full ${activeIndex === index ? "ring-2 ring-brand-600 ring-offset-2 ring-offset-background" : "opacity-65"}`}
          >
            <Image src={visual.src} alt="" fill sizes="200px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
