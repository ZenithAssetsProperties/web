"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroBackdrop() {
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 767px)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

    const updatePlayback = () => {
      setVideoEnabled(!motion.matches && !smallScreen.matches && !connection?.saveData);
      if (motion.matches || smallScreen.matches || connection?.saveData) setVideoReady(false);
    };

    updatePlayback();
    motion.addEventListener("change", updatePlayback);
    smallScreen.addEventListener("change", updatePlayback);

    return () => {
      motion.removeEventListener("change", updatePlayback);
      smallScreen.removeEventListener("change", updatePlayback);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-950" aria-hidden="true">
      <Image
        src="/videos/hero-lagos-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center brightness-[0.78] saturate-[0.82] transition-opacity duration-700 md:object-contain ${videoReady ? "opacity-0" : "opacity-100"}`}
      />
      {videoEnabled && (
        <video
          className={`absolute inset-0 size-full object-cover object-center brightness-[0.78] saturate-[0.82] transition-opacity duration-1000 md:object-contain ${videoReady ? "opacity-100" : "opacity-0"}`}
          src="/videos/hero-lagos.mp4"
          poster="/videos/hero-lagos-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-950/50 to-brand-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/65 via-brand-950/10 to-brand-950/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_42%,transparent_12%,rgba(4,16,19,0.2)_100%)]" />
    </div>
  );
}
