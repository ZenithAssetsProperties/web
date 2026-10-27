import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { demoProperties } from "@/lib/properties";

const residenceImages = [
  { src: "/properties/seventh-residence/lounge.jpg", alt: "Lounge rendering supplied for The Seventh Residence" },
  { src: "/properties/seventh-residence/bedroom.jpg", alt: "Bedroom rendering supplied for The Seventh Residence" },
  { src: "/properties/seventh-residence/kitchen.jpg", alt: "Kitchen rendering supplied for The Seventh Residence" },
];

function ProjectFeature() {
  return (
    <Reveal className="project-feature-reveal min-w-0">
      <article className="group/project">
        <Link
          href="/properties/the-seventh-residence"
          aria-label="Explore The Seventh Residence project preview"
          className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
        >
          <figure className="relative grid aspect-[1.18] grid-cols-[1.35fr_0.9fr] grid-rows-2 gap-1 overflow-hidden bg-brand-950 sm:aspect-[1.4]">
            {residenceImages.map(({ src, alt }, index) => (
              <div key={src} className={`relative min-h-0 overflow-hidden ${index === 0 ? "row-span-2" : ""}`}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="project-feature-image object-cover transition-transform duration-[1400ms] ease-out group-hover/project:scale-[1.025]"
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/5 to-brand-950/10 transition-colors duration-700 group-hover/project:from-brand-950/80" />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6">
              <span className="border-l border-brand-300 pl-3 text-[9px] font-medium leading-5 tracking-[0.16em] text-white uppercase sm:text-[10px]">
                Project preview<br />Supplied visual collection
              </span>
              <span className="flex size-10 shrink-0 items-center justify-center border border-white/55 text-white transition-[background-color,color,transform] duration-500 group-hover/project:-rotate-45 group-hover/project:bg-white group-hover/project:text-brand-950">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </figcaption>
          </figure>
        </Link>

        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border/80 py-4 transition-colors duration-500 group-hover/project:border-brand-600/45 sm:py-5">
          <div>
            <p className="text-brand-600 text-[9px] font-semibold tracking-[0.17em] uppercase">Residential project</p>
            <h3 className="font-heading mt-1.5 text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
              The Seventh Residence
            </h3>
            <p className="text-muted-foreground mt-2 text-xs">Architecture and interior visuals</p>
          </div>
          <Link
            href="/properties/the-seventh-residence"
            className="group/link inline-flex h-9 items-center gap-2 border border-border px-3 text-[11px] font-medium text-foreground transition-[background-color,border-color] duration-500 hover:border-brand-600/40 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          >
            Explore project
            <ArrowRight className="size-3.5 transition-transform duration-500 group-hover/link:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

function SampleListing({ property, delay }: { property: (typeof demoProperties)[number]; delay: number }) {
  const sizeLabel = `${new Intl.NumberFormat("en-NG").format(property.size.value)} ${property.size.unit}`;

  return (
    <Reveal delay={delay} className="sample-listing-reveal">
      <article className="group/listing border-b border-border/80 pb-5 transition-colors duration-500 hover:border-brand-600/45 sm:pb-6">
        <Link
          href={`/properties/${property.slug}`}
          aria-label={`View illustrative listing: ${property.title}`}
          className="grid grid-cols-[112px_minmax(0,1fr)_auto] items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 sm:grid-cols-[132px_minmax(0,1fr)_auto] sm:gap-5"
        >
          <figure className="relative aspect-[1.08] overflow-hidden bg-brand-900">
            <Image
              src={property.image.src}
              alt={property.image.alt}
              fill
              sizes="(max-width: 640px) 112px, 132px"
              className="sample-listing-image object-cover transition-transform duration-[1200ms] ease-out group-hover/listing:scale-[1.06]"
            />
            <span className="absolute top-2 left-2 bg-brand-950/75 px-2 py-1 text-[8px] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-sm">
              Demo
            </span>
          </figure>

          <div className="min-w-0 py-1">
            <p className="text-brand-600 text-[9px] font-semibold tracking-[0.14em] uppercase">{property.type}</p>
            <h3 className="font-heading mt-1.5 text-lg leading-tight font-normal text-foreground sm:text-xl">
              {property.title}
            </h3>
            <p className="text-muted-foreground mt-2 text-[11px] leading-5">
              {property.location.area}, {property.location.city} <span className="px-1 text-border">/</span> {sizeLabel}
            </p>
            <p className="text-muted-foreground mt-3 text-[9px] font-medium tracking-[0.1em] uppercase">
              Illustrative price <span className="px-1 text-border">·</span> NGN {new Intl.NumberFormat("en-NG").format(property.priceNgn)}
            </p>
          </div>

          <ArrowUpRight className="size-4 text-muted-foreground transition-[color,transform] duration-500 group-hover/listing:-translate-y-1 group-hover/listing:translate-x-1 group-hover/listing:text-brand-600" aria-hidden="true" />
        </Link>
      </article>
    </Reveal>
  );
}

export function FeaturedProperties() {
  return (
    <Section id="featured-properties" spacing="lg" className="bg-[linear-gradient(180deg,#ffffff_0%,#f8faf9_100%)]">
      <Container size="xl">
        <div className="mb-9 grid gap-6 border-b border-border/80 pb-7 sm:mb-11 sm:pb-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-brand-600 uppercase">
              <span className="h-px w-7 bg-brand-600/60" aria-hidden="true" />
              The Zenith selection <span className="text-foreground/35">01 / In focus</span>
            </p>
            <Heading as="h2" level="h1" className="mt-4 max-w-2xl text-4xl leading-[1.04] sm:text-5xl lg:text-[3.5rem]">
              Places with a <span className="font-normal italic">point of view.</span>
            </Heading>
            <Text className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-[15px] sm:leading-7">
              A first look at the spaces and projects shaping the Zenith collection.
            </Text>
          </Reveal>

          <Reveal delay={140}>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between lg:justify-end">
              <div className="max-w-xs border-l border-brand-600/35 pl-4">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-foreground uppercase">A considered first look</p>
                <Text size="sm" className="mt-2 leading-5 text-muted-foreground">
                  One supplied project preview and two sample listings. Catalogue details are illustrative, not confirmed inventory.
                </Text>
              </div>
              <Link
                href="/properties"
                className="group inline-flex h-10 shrink-0 items-center gap-2 border border-foreground/20 px-4 text-[11px] font-medium text-foreground transition-[background-color,border-color,color] duration-500 hover:border-brand-950 hover:bg-brand-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              >
                Explore the catalogue
                <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid items-start gap-9 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12">
          <ProjectFeature />
          <div className="flex flex-col gap-5 sm:gap-6">
            {demoProperties.slice(0, 2).map((property, index) => (
              <SampleListing key={property.id} property={property} delay={180 + index * 160} />
            ))}
            <Reveal delay={500} className="pt-1">
              <p className="max-w-sm border-l border-brand-600/35 pl-3 text-[10px] leading-5 text-muted-foreground">
                Sample locations, prices, sizes, and specifications are for interface preview only. Approved listing details will replace them before publication.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
