import { Building2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
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
  { name: "Victoria Island Heights", location: "Victoria Island, Lagos", price: "From ₦4M / share" },
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
    <Card className="w-72 shrink-0 overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-80">
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-brand-600 to-brand-900">
        <Building2 className="size-10 text-white/30" aria-hidden="true" />
        <Badge
          variant="outline"
          className="absolute top-3 left-3 border-white/25 bg-white/10 text-white backdrop-blur-sm"
        >
          Preview
        </Badge>
      </div>
      <Stack gap="sm" className="p-5">
        <CardTitle className="text-base">{property.name}</CardTitle>
        <Stack direction="row" align="center" gap="sm" className="text-muted-foreground text-sm">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          <span>{property.location}</span>
        </Stack>
        <Text size="sm" className="font-semibold text-brand-600 dark:text-brand-400">
          {property.price}
        </Text>
      </Stack>
    </Card>
  );
}

export function TvScroll() {
  return (
    <Section id="tv-scroll" spacing="lg" border="bottom" className="overflow-hidden bg-muted/40">
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
