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
    <article className="group overflow-hidden rounded-[1.4rem] border border-foreground/10 bg-background shadow-[0_12px_40px_-28px_rgba(4,16,19,0.38)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-brand-600/20 hover:shadow-[0_26px_70px_-36px_rgba(4,16,19,0.48)] motion-reduce:transform-none">
      <div className="relative">
        <DemoPropertyVisual property={property} compact />
        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-brand-950/65 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-md sm:right-5 sm:top-5">
          {availabilityLabel[property.availability]}
        </span>
      </div>

      <div className={`p-5 sm:p-6 ${feature ? "sm:p-7" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.16em] uppercase">
              {property.type}
            </p>
            <h3 className={`font-heading mt-2 font-bold tracking-tight ${feature ? "text-2xl sm:text-3xl" : "text-xl"}`}>
              <Link
                href={`/properties/${property.slug}`}
                className="rounded-sm decoration-brand-600/50 underline-offset-4 transition-[text-decoration-color] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              >
                {property.title}
              </Link>
            </h3>
          </div>
          <Link
            href={`/properties/${property.slug}`}
            aria-label={`View ${property.title}`}
            className="focus-visible:ring-ring flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-[background-color,color,transform] duration-300 group-hover:-rotate-45 group-hover:bg-brand-600 group-hover:text-white focus-visible:ring-2 focus-visible:outline-none"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="text-muted-foreground mt-3 flex items-center gap-1.5 text-sm">
          <MapPin className="text-brand-600 dark:text-brand-300 size-4 shrink-0" aria-hidden="true" />
          {property.location.area}, {property.location.city}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-border/80 pt-4">
          <div>
            <p className="text-muted-foreground text-[10px] font-medium tracking-[0.12em] uppercase">
              Illustrative price
            </p>
            <p className={`font-heading mt-1 font-bold tracking-tight ${feature ? "text-2xl" : "text-xl"}`}>
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
