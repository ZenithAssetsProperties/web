import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

interface FeaturedProperty {
  name: string;
  location: string;
  price: string;
}

// Illustrative pipeline only — real listings, pricing, and availability go
// live at launch. Kept clearly labelled "Preview" on every tile for that
// reason (see PropertyTile below).
const featuredProperties: FeaturedProperty[] = [
  { name: "Lekki Waterfront Residences", location: "Lekki, Lagos", price: "From ₦2.5M / share" },
  {
    name: "Victoria Island Heights",
    location: "Victoria Island, Lagos",
    price: "From ₦4M / share",
  },
  {
    name: "Abuja Central Business Suites",
    location: "Central Area, Abuja",
    price: "From ₦3.2M / share",
  },
  { name: "Ikoyi Prime Court", location: "Ikoyi, Lagos", price: "From ₦5M / share" },
  { name: "Port Harcourt Riverside", location: "GRA, Port Harcourt", price: "From ₦1.8M / share" },
  {
    name: "Enugu Heritage Park",
    location: "Independence Layout, Enugu",
    price: "From ₦1.5M / share",
  },
];

function PropertyTile({ property }: { property: FeaturedProperty }) {
  return (
    <div className="group relative w-64 shrink-0 sm:w-72" data-cursor="View">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        {/* Base — brand gradient, not a stock photo */}
        <div className="from-brand-700 via-brand-900 to-brand-950 absolute inset-0 bg-gradient-to-br transition-transform duration-500 ease-out group-hover:scale-105" />

        {/* Real brand texture — the interlocking-Z motif from the guideline's
            Pattern Design page, tiled at low opacity, not a generic icon. */}
        <div
          className="absolute inset-0 opacity-[0.14] transition-transform duration-500 ease-out group-hover:scale-105"
          style={{
            backgroundImage: "url(/brand/pattern-tile.png)",
            backgroundSize: "72px 75px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />

        {/* Scrim so the overlaid text stays legible */}
        <div className="from-brand-950/95 via-brand-950/10 absolute inset-0 bg-gradient-to-t to-transparent" />

        <span className="absolute top-3.5 left-4 text-[10px] font-semibold tracking-[0.15em] text-white/60 uppercase">
          Preview
        </span>

        <span className="absolute top-3.5 right-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {property.price}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="flex items-center gap-1.5 text-xs font-medium text-white/70">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            {property.location}
          </p>
          <h3 className="font-heading mt-1 text-lg leading-snug font-bold text-white">
            {property.name}
          </h3>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View details
            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export function TvScroll() {
  return (
    <Section id="tv-scroll" spacing="lg" border="bottom" className="bg-muted/40 overflow-hidden">
      <Container size="xl">
        <Reveal>
          <Stack gap="sm" align="center" className="mx-auto max-w-2xl pb-12 text-center">
            <Badge dot variant="outline">
              Now showing — concept preview
            </Badge>
            <Heading as="h2" level="h1">
              A glimpse of what&apos;s coming
            </Heading>
            <Text className="text-muted-foreground">
              Illustrative developments from our upcoming pipeline. Final listings, pricing, and
              availability go live at launch.
            </Text>
          </Stack>
        </Reveal>
      </Container>

      <Reveal delay={150}>
        <Marquee duration={38}>
          {featuredProperties.map((property) => (
            <PropertyTile key={property.name} property={property} />
          ))}
        </Marquee>
      </Reveal>
    </Section>
  );
}
