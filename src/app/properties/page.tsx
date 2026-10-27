import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { PropertyCard } from "@/components/properties/property-card";
import { PropertySearchForm, type PropertySearchValues } from "@/components/properties/property-search-form";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";
import {
  propertyCatalogue,
  type PropertyAvailability,
  type PropertyCategory,
} from "@/lib/properties";

export const metadata: Metadata = {
  title: "Explore properties",
  description: "Preview the property discovery experience for Zenith Asset Group.",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function validCategory(value: string | undefined): PropertyCategory | "" {
  return value === "land" || value === "residential" || value === "commercial" ? value : "";
}

function validAvailability(value: string | undefined): PropertyAvailability | "" {
  return value === "available" || value === "reserved" || value === "sold" ? value : "";
}

function parsePositiveNumber(value: string) {
  const parsed = Number(value);
  return value && Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const query = firstValue(params.q) ?? "";
  const category = validCategory(firstValue(params.category));
  const location = firstValue(params.location) ?? "";
  const minPrice = firstValue(params.minPrice) ?? "";
  const maxPrice = firstValue(params.maxPrice) ?? "";
  const bedrooms = firstValue(params.bedrooms) ?? "";
  const availability = validAvailability(firstValue(params.availability));
  const rawSort = firstValue(params.sort);
  const sort = rawSort === "price-asc" || rawSort === "price-desc" ? rawSort : "";
  const filters = {
    query,
    category,
    location,
    minPrice: parsePositiveNumber(minPrice),
    maxPrice: parsePositiveNumber(maxPrice),
    bedrooms: parsePositiveNumber(bedrooms),
    availability,
    sort: sort || undefined,
  };

  const values: PropertySearchValues = {
    query,
    category,
    location,
    minPrice,
    maxPrice,
    bedrooms,
    availability,
    sort,
  };
  const properties = await propertyCatalogue.list(filters);
  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <>
      <section className="bg-brand-950 relative isolate overflow-hidden pb-16 pt-36 text-white sm:pb-24 sm:pt-44">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-[center_42%] opacity-40"
          style={{ backgroundImage: "url(/videos/hero-lagos-poster.jpg)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/55" />
        <Container size="xl" className="relative">
          <Stack gap="md" className="max-w-4xl">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-200 uppercase">
              Zenith Asset Group <span className="px-2 text-white/40">/</span> Property preview
            </p>
            <Heading as="h1" level="display" className="text-white">
              The collection.
            </Heading>
            <Text size="lead" className="max-w-2xl text-white/75">
              Explore residential, land, and commercial property examples. Every listing, price,
              availability status, and image on this page is illustrative.
            </Text>
          </Stack>
        </Container>
      </section>

      <Section spacing="md" className="relative -mt-9 pt-0 sm:-mt-12">
        <Container>
          <PropertySearchForm values={values} />
        </Container>
      </Section>

      <Section spacing="md" className="pt-4 sm:pt-8">
        <Container size="xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
                <SlidersHorizontal className="size-4" aria-hidden="true" />
                {hasFilters ? "Filtered demo results" : "Explore the collection"}
              </div>
              <Heading as="h2" level="h2" className="font-medium">
                {properties.length.toString().padStart(2, "0")} {properties.length === 1 ? "property" : "properties"} to explore
              </Heading>
            </div>
            {hasFilters && (
              <Link
                href="/properties"
                className="text-brand-600 dark:text-brand-300 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
              >
                Clear filters <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}
          </div>

          {properties.length > 0 ? (
            <Grid cols={3} gap="md">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </Grid>
          ) : (
            <EmptyState
              icon={SlidersHorizontal}
              title="No demo properties match those filters"
              description="Try another location, property type, or maximum price. The catalogue currently uses illustrative records only."
              action={
                <Link
                  href="/properties"
                  className="text-brand-600 dark:text-brand-300 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                >
                  Clear filters <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              }
            />
          )}
        </Container>
      </Section>

      <Section spacing="sm" border="top" className="bg-muted/40">
        <Container>
          <p className="text-muted-foreground text-center text-xs leading-5">
            Prototype only. All property names, availability, features, and prices shown here are
            fictional. This page does not accept enquiries or reservations.
          </p>
        </Container>
      </Section>
    </>
  );
}
