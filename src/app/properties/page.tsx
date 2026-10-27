import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, SlidersHorizontal } from "lucide-react";
import { PropertyCard } from "@/components/properties/property-card";
import { PropertySearchForm, type PropertySearchValues } from "@/components/properties/property-search-form";
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
      <section className="bg-brand-950 relative isolate overflow-hidden pb-12 pt-32 text-white sm:pb-16 sm:pt-36">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url(/videos/hero-modern-villa-poster.jpg)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/55" />
        <Container size="xl" className="relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-[10px] text-white/60">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <ChevronRight className="size-3" aria-hidden="true" />
              <span className="text-white/90" aria-current="page">Properties</span>
            </nav>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-200 uppercase">
              Zenith Asset Group <span className="px-2 text-white/40">/</span> Property collection
            </p>
            <Heading as="h1" level="display" className="mt-3 text-white sm:text-6xl">
              Explore properties.
            </Heading>
            <Text size="lead" className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              Explore residential, land, and commercial property listings.
            </Text>
          </Reveal>
        </Container>
      </section>

      <Section spacing="sm" className="relative z-10 -mt-4 pt-0 sm:-mt-6">
        <Container size="xl">
          <Reveal delay={100}>
            <PropertySearchForm values={values} />
          </Reveal>
        </Container>
      </Section>

      <Section spacing="md" className="pt-4 sm:pt-8">
        <Container size="xl">
          <div className="mb-7 flex flex-col justify-between gap-5 border-b border-border/80 pb-6 sm:mb-9 sm:flex-row sm:items-end">
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
                  className="group inline-flex h-10 items-center gap-2 border border-border px-4 text-xs font-medium text-foreground transition-[background-color,border-color] duration-500 hover:border-brand-600/40 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                >
                  Clear filters <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
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
                  className="group inline-flex h-10 items-center gap-2 border border-border px-4 text-xs font-medium text-foreground transition-[background-color,border-color] duration-500 hover:border-brand-600/40 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                >
                  Clear filters <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
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
                Project spotlight <span className="px-2 text-foreground/30">/</span> Supplied visuals
              </p>
              <Heading as="h2" level="h3" className="mt-2">The Seventh Residence</Heading>
            </div>
            <ResidenceListing />
          </Container>
        </Section>
      )}

      <Section spacing="sm" border="top" className="bg-background">
        <Container size="xl">
          <p className="text-muted-foreground text-xs leading-5">
            Illustrative listings are not offers. Confirm property details and availability with Zenith. Online reservations and payments are not available on this website.
          </p>
        </Container>
      </Section>
    </>
  );
}
