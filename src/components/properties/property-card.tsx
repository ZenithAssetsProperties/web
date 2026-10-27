import Link from "next/link";
import { ArrowUpRight, BedDouble, Maximize2, MapPin } from "lucide-react";
import { DemoPropertyVisual } from "@/components/properties/demo-property-visual";
import { formatNgn, type Property } from "@/lib/properties";

const availabilityLabel = {
  available: "Available · demo",
  reserved: "Reserved · demo",
  sold: "Sold · demo",
} as const;

export function PropertyCard({
  property,
  variant = "standard",
}: {
  property: Property;
  variant?: "standard" | "feature";
}) {
  const sizeLabel = `${new Intl.NumberFormat("en-NG").format(property.size.value)} ${property.size.unit}`;
  const feature = variant === "feature";

  return (
    <article className="group border-border/90 hover:border-brand-600/40 overflow-hidden border-b bg-transparent pb-2 transition-colors duration-300 motion-reduce:transform-none">
      <div className="relative">
        <DemoPropertyVisual property={property} compact={!feature} wide={feature} />
        <span className="bg-brand-950/65 absolute top-4 right-4 rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-md sm:top-5 sm:right-5">
          {availabilityLabel[property.availability]}
        </span>
      </div>

      <div className={`px-1 pt-5 pb-5 sm:pb-6 ${feature ? "sm:pt-7" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.16em] uppercase">
              {property.type}
            </p>
            <h3
              className={`font-heading mt-2 font-normal tracking-tight ${feature ? "text-2xl sm:text-3xl" : "text-xl"}`}
            >
              <Link
                href={`/properties/${property.slug}`}
                className="decoration-brand-600/50 focus-visible:outline-brand-600 rounded-sm underline-offset-4 transition-[text-decoration-color] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                {property.title}
              </Link>
            </h3>
          </div>
          <Link
            href={`/properties/${property.slug}`}
            aria-label={`View ${property.title}`}
            className="focus-visible:ring-ring border-border group-hover:bg-brand-600 flex size-10 shrink-0 items-center justify-center rounded-full border transition-[background-color,color,transform] duration-300 group-hover:-rotate-45 group-hover:text-white focus-visible:ring-2 focus-visible:outline-none"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="text-muted-foreground mt-3 flex items-center gap-1.5 text-sm">
          <MapPin
            className="text-brand-600 dark:text-brand-300 size-4 shrink-0"
            aria-hidden="true"
          />
          {property.location.area}, {property.location.city}
        </p>

        <div className="border-border/80 mt-5 flex items-end justify-between gap-4 border-t pt-4">
          <div>
            <p className="text-muted-foreground text-[10px] font-medium tracking-[0.12em] uppercase">
              Illustrative price
            </p>
            <p
              className={`font-heading mt-1 font-normal tracking-tight ${feature ? "text-2xl" : "text-xl"}`}
            >
              {formatNgn(property.priceNgn)}
            </p>
          </div>
          <div className="text-muted-foreground flex items-center gap-3 text-xs">
            {property.bedrooms !== undefined && (
              <span className="inline-flex items-center gap-1.5">
                <BedDouble className="size-3.5" aria-hidden="true" /> {property.bedrooms}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Maximize2 className="size-3.5" aria-hidden="true" /> {sizeLabel}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
