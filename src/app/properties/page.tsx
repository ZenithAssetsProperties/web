import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PropertyCard } from "@/components/properties/property-card";
import {
  PropertySearchForm,
  type PropertySearchValues,
} from "@/components/properties/property-search-form";
import { ResidenceListing } from "@/components/properties/residence-listing";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import {
  propertyCatalogue,
  type PropertyAvailability,
  type PropertyCategory,
} from "@/lib/properties";

export const metadata: Metadata = {
  title: "Explore properties",
  description: "Explore residential, land, and commercial properties with Zenith Asset Group.",
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

export default async function PropertiesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = firstValue(params.q) ?? "";
  const category = validCategory(firstValue(params.category));
  const location = firstValue(params.location) ?? "";
  const minPrice = firstValue(params.minPrice) ?? "";
  const maxPrice = firstValue(params.maxPrice) ?? "";
  const bedrooms = firstValue(params.bedrooms) ?? "";
  const availability = validAvailability(firstValue(params.availability));
  const rawSort = firstValue(params.sort);
  const sort: PropertySearchValues["sort"] =
    rawSort === "price-asc" || rawSort === "price-desc" ? rawSort : "";
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
      <PageHero
        breadcrumbs={[{ label: "Properties" }]}
        eyebrow="Property Collection & Investment"
        title={
          <>
            Explore curated <span className="font-normal italic">properties.</span>
          </>
        }
        description="Explore residential, land, and commercial property opportunities vetted for clear title, architectural quality, and lasting investment value."
      />

      <Section spacing="sm" className="relative z-10 -mt-8 pt-0 sm:-mt-12">
        <Container size="xl">
          <Reveal delay={100}>
            <PropertySearchForm values={values} />
          </Reveal>
        </Container>
      </Section>

      <Section spacing="md" className="pt-4 sm:pt-8">
        <Container size="xl">
          <div className="border-border/80 mb-7 flex flex-col justify-between gap-5 border-b pb-6 sm:mb-9 sm:flex-row sm:items-end">
            <Reveal>
              <p className="text-brand-600 text-[10px] font-semibold tracking-[0.18em] uppercase">
                {hasFilters ? "Search results" : "Property collection"}
              </p>
              <Heading as="h2" level="h2" className="mt-2">
                {properties.length} {properties.length === 1 ? "property" : "properties"} to explore
              </Heading>
              <Text size="sm" className="text-muted-foreground mt-2">
                {hasFilters
                  ? "Listing details and availability require confirmation with Zenith."
                  : "Illustrative listing details. Confirm current properties and availability with Zenith."}
              </Text>
            </Reveal>

            {hasFilters && (
              <Reveal delay={100}>
                <Link
                  href="/properties"
                  className="group border-border text-foreground hover:border-brand-600/40 hover:bg-brand-50 focus-visible:outline-brand-600 inline-flex h-10 items-center gap-2 border px-4 text-xs font-medium transition-[background-color,border-color] duration-500 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Clear filters{" "}
                  <ArrowRight
                    className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            )}
          </div>

          {properties.length > 0 ? (
            <Grid cols={3} gap="md">
              {properties.map((property, index) => (
                <Reveal key={property.id} delay={index * 90}>
                  <PropertyCard property={property} />
                </Reveal>
              ))}
            </Grid>
          ) : (
            <EmptyState
              icon={SlidersHorizontal}
              title="No properties match those filters"
              description="Adjust your filters or contact Zenith for help finding the right property."
              action={
                <Link
                  href="/properties"
                  className="group border-border text-foreground hover:border-brand-600/40 hover:bg-brand-50 focus-visible:outline-brand-600 inline-flex h-10 items-center gap-2 border px-4 text-xs font-medium transition-[background-color,border-color] duration-500 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Clear filters{" "}
                  <ArrowRight
                    className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              }
            />
          )}
        </Container>
      </Section>

      {!hasFilters && (
        <Section spacing="lg" className="bg-muted/35">
          <Container size="xl">
            <div className="mb-6">
              <p className="text-brand-600 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Project spotlight <span className="text-foreground/30 px-2">/</span> Supplied
                visuals
              </p>
              <Heading as="h2" level="h3" className="mt-2">
                The Seventh Residence
              </Heading>
            </div>
            <ResidenceListing />
          </Container>
        </Section>
      )}

      <Section spacing="sm" border="top" className="bg-background">
        <Container size="xl">
          <p className="text-muted-foreground text-xs leading-5">
            Illustrative listings are not offers. Confirm property details and availability with
            Zenith. Online reservations and payments are not available on this website.
          </p>
        </Container>
      </Section>
    </>
  );
}
