import { MapPin } from "lucide-react";
import type { Property } from "@/lib/properties";

export function DemoPropertyVisual({
  property,
  compact = false,
}: {
  property: Property;
  compact?: boolean;
}) {
  return (
    <div
      className={`from-brand-800 via-brand-900 to-brand-950 relative isolate flex overflow-hidden bg-gradient-to-br ${compact ? "aspect-[4/3]" : "min-h-[360px] sm:min-h-[520px]"}`}
      aria-label={`Illustrative demo artwork for ${property.title}`}
      role="img"
    >
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: "url(/brand/pattern-tile.png)",
          backgroundSize: "96px 100px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/20" />
      <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-brand-950/50 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm">
        Demo listing
      </div>
      <div className="mt-auto flex w-full items-end justify-between gap-4 p-5 sm:p-8">
        <div>
          <p className="font-heading text-5xl font-bold tracking-tight text-white/15 sm:text-7xl">
            ZG
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-white/75">
            <MapPin className="size-4" aria-hidden="true" />
            {property.location.area}, {property.location.city}
          </p>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
          Illustrative artwork
        </span>
      </div>
    </div>
  );
}
