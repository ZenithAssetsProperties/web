import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PropertyCard } from "@/components/properties/property-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { propertyCatalogue } from "@/lib/properties";

export async function FeaturedProperties() {
  const featuredProperties = await propertyCatalogue.featured();

  return (
    <Section id="featured-properties" spacing="lg" className="bg-muted/40">
      <Container size="xl">
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Badge variant="outline">Illustrative preview · not active listings</Badge>
              <Heading as="h2" level="h1" className="mt-4">
                A closer look at the marketplace.
              </Heading>
              <Text className="text-muted-foreground mt-4 max-w-xl">
                These fictional examples show how property details may be presented. Names, prices,
                features, and availability are not real offers.
              </Text>
            </div>
            <Button asChild variant="secondary" className="w-fit">
              <Link href="/properties">
                Browse all examples <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Grid cols={3} gap="md">
          {featuredProperties.map((property, index) => (
            <Reveal key={property.id} delay={index * 70}>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
