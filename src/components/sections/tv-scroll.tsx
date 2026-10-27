import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PropertyCard } from "@/components/properties/property-card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";
import { propertyCatalogue } from "@/lib/properties";

export async function TvScroll() {
  const featuredProperties = await propertyCatalogue.featured();

  return (
    <Section id="tv-scroll" spacing="lg" border="bottom" className="bg-muted/40 overflow-hidden">
      <Container size="xl">
        <Reveal>
          <Stack gap="sm" align="center" className="mx-auto max-w-2xl pb-12 text-center">
            <Badge variant="outline">Marketplace preview · demo data</Badge>
            <Heading as="h2" level="h1">
              Explore property types
            </Heading>
            <Text className="text-muted-foreground">
              These fictional listings preview the property discovery experience. Names, prices, and
              availability are illustrative and are not active offers.
            </Text>
          </Stack>
        </Reveal>
      </Container>

      <Reveal delay={150}>
        <Marquee duration={48} pauseOnHover>
          {featuredProperties.map((property) => (
            <div key={property.id} className="w-[min(84vw,380px)] shrink-0">
              <PropertyCard property={property} />
            </div>
          ))}
        </Marquee>
      </Reveal>

      <Container className="mt-10 flex justify-center">
        <Link
          href="/properties"
          className="text-brand-600 dark:text-brand-300 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
        >
          Browse demo properties <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </Section>
  );
}
