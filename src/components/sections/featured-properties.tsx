import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PropertyCard } from "@/components/properties/property-card";
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
          <div className="mb-10 flex flex-col justify-between gap-5 lg:mb-12 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.18em] uppercase">
                The collection · Preview
              </p>
              <Heading as="h2" level="h1" className="mt-3">
                Property, presented with more care.
              </Heading>
              <Text className="text-muted-foreground mt-3 max-w-xl">
                Explore the listing experience with sample properties, clear details, and imagery
                that is explicitly illustrative.
              </Text>
            </div>
            <Button asChild variant="secondary" className="w-fit">
              <Link href="/properties">
                Explore the collection <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Grid cols={2} gap="md">
          {featuredProperties.map((property, index) => (
            <Reveal
              key={property.id}
              delay={index * 90}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              <PropertyCard property={property} variant={index === 0 ? "feature" : "standard"} />
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
