import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";

export function DemoPropertyVisual({
  property,
  compact = false,
  wide = false,
}: {
  property: Property;
  compact?: boolean;
  wide?: boolean;
}) {
  return (
    <figure
      className={`group/photo bg-brand-900 relative isolate overflow-hidden ${wide ? "aspect-[1.9]" : compact ? "aspect-[1.32]" : "aspect-[1.48] min-h-[360px] sm:min-h-[520px]"}`}
    >
      <Image
        src={property.image.src}
        alt={property.image.alt}
        fill
        sizes={compact ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "100vw"}
        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover/photo:scale-[1.045]"
      />
      <div className="from-brand-950/75 via-brand-950/5 to-brand-950/15 absolute inset-0 bg-gradient-to-t" />

      <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
        <span className="bg-brand-950/55 rounded-full border border-white/25 px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-md">
          Illustrative listing <span className="px-1 text-white/50">/</span> concept image
        </span>
      </div>

      <figcaption className="absolute right-4 bottom-4 sm:right-5 sm:bottom-5">
        <Link
          href={property.image.creditUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-brand-950/55 hover:bg-brand-950/80 rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/85 backdrop-blur-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Photo: {property.image.photographer}
        </Link>
      </figcaption>
    </figure>
  );
}
