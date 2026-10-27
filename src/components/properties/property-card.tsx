import Link from "next/link";
import { ArrowUpRight, BedDouble, Maximize2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DemoPropertyVisual } from "@/components/properties/demo-property-visual";
import { formatNgn, type Property } from "@/lib/properties";

const availabilityLabel = {
  available: "Available · demo",
  reserved: "Reserved · demo",
  sold: "Sold · demo",
} as const;

export function PropertyCard({ property }: { property: Property }) {
  const sizeLabel = `${new Intl.NumberFormat("en-NG").format(property.size.value)} ${property.size.unit}`;

  return (
    <Card className="group overflow-hidden rounded-2xl p-0 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/properties/${property.slug}`}
        className="block rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <div className="relative">
          <DemoPropertyVisual property={property} compact />
          <Badge className="absolute top-4 right-4 border border-white/15 bg-brand-950/65 text-white backdrop-blur-md">
            {availabilityLabel[property.availability]}
          </Badge>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.12em] uppercase">
                {property.type}
              </p>
              <h2 className="font-heading mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                {property.title}
              </h2>
            </div>
            <ArrowUpRight className="text-muted-foreground mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </div>
          <p className="text-muted-foreground mt-3 flex items-center gap-1.5 text-sm">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {property.location.area}, {property.location.city}
          </p>
          <div className="border-border mt-5 flex items-end justify-between gap-4 border-t pt-4">
            <div>
              <p className="text-muted-foreground text-xs">Illustrative price</p>
              <p className="font-heading mt-1 text-lg font-bold">{formatNgn(property.priceNgn)}</p>
            </div>
            <div className="text-muted-foreground flex items-center gap-3 text-xs">
              {property.bedrooms !== undefined && (
                <span className="inline-flex items-center gap-1">
                  <BedDouble className="size-3.5" aria-hidden="true" /> {property.bedrooms}
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <Maximize2 className="size-3.5" aria-hidden="true" /> {sizeLabel}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
