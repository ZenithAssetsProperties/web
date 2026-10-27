import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ProjectGallery } from "@/components/properties/project-gallery";
import { PropertyInterestForm } from "@/components/properties/property-interest-form";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { residenceAmenities, residenceGallery, residencePlans } from "@/lib/seventh-residence";

export const metadata: Metadata = {
  title: "The Seventh Residence",
  description: "Architecture and interior imagery for The Seventh Residence.",
  robots: { index: false, follow: false },
};

export default function SeventhResidencePage() {
  return (
    <>
      <section className="relative -mt-20 flex min-h-[670px] items-end overflow-hidden bg-brand-950 text-white sm:min-h-[min(780px,94svh)]">
        <Image
          src="/properties/seventh-residence/lounge.jpg"
          alt="Interior rendering supplied for The Seventh Residence"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/25 to-brand-950/15" />
        <Container size="xl" className="relative z-10 pb-12 pt-36 sm:pb-16">
          <Reveal>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white/80 uppercase">
              Residential <span className="px-2 text-white/45">/</span> Architecture &amp; interiors
            </p>
            <Heading as="h1" level="display" className="mt-4 max-w-4xl text-white sm:text-7xl lg:text-[5.5rem]">
              The Seventh <span className="font-normal italic">Residence</span>
            </Heading>
            <Text size="lead" className="mt-4 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Explore the architectural and interior renderings supplied for this project.
            </Text>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button asChild size="sm" className="rounded-sm px-4">
                <a href="#project-gallery">
                  View the gallery <ArrowDown aria-hidden="true" />
                </a>
              </Button>
              <span className="text-[10px] tracking-[0.14em] text-white/65 uppercase">
                Specifications awaiting confirmation
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section spacing="lg" border="bottom">
        <Container size="xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.2em] uppercase">
                Project information
              </p>
              <Heading as="h2" level="h2" className="mt-4 max-w-lg">
                See the design. Get the facts when they are ready.
              </Heading>
            </Reveal>
            <Reveal delay={100}>
              <Text className="text-muted-foreground max-w-2xl leading-7">
                These visuals introduce the design. Project location, unit mix, measurements, pricing,
                documentation status, and availability require confirmation. Contact Zenith for approved
                information and next steps.
              </Text>
              <p className="mt-5 border-t border-border pt-4 text-[10px] font-medium tracking-[0.14em] text-brand-700 uppercase dark:text-brand-300">
                Visual materials provided by the Zenith team
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="project-gallery" spacing="lg">
        <Container size="xl">
          <Reveal>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  Visual gallery
                </p>
                <Heading as="h2" level="h1" className="mt-3">
                  A closer look inside.
                </Heading>
              </div>
              <Text size="sm" className="text-muted-foreground max-w-sm">
                Select a thumbnail to explore the supplied design views. These are renderings, not
                photographs of a completed home.
              </Text>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <ProjectGallery visuals={residenceGallery} />
          </Reveal>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-muted/45">
        <Container size="xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.2em] uppercase">
                Additional visuals
              </p>
              <Heading as="h2" level="h1" className="mt-3">
                Plans and amenities.
              </Heading>
              <Text className="text-muted-foreground mt-4 max-w-md leading-7">
                The supplied materials include amenity and floor-plan concepts. Their final designs,
                specifications, and inclusion in the project require Zenith&apos;s confirmation.
              </Text>
            </Reveal>

            <div className="space-y-9">
              <div>
                <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] uppercase">Amenity visuals</p>
                <Grid cols={2} gap="sm">
                  {residenceAmenities.map((visual) => (
                    <Reveal key={visual.src}>
                      <figure>
                        <div className="relative aspect-[1.4] overflow-hidden bg-brand-900">
                          <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover transition-transform duration-700 hover:scale-[1.025]" />
                        </div>
                        <figcaption className="text-muted-foreground mt-2 text-[10px] tracking-[0.1em] uppercase">{visual.label} · concept</figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </Grid>
              </div>

              <div>
                <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] uppercase">Plan visuals · unverified</p>
                <Grid cols={2} gap="sm">
                  {residencePlans.map((visual) => (
                    <Reveal key={visual.src}>
                      <figure>
                        <div className="relative aspect-[0.9] overflow-hidden bg-white">
                          <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-contain" />
                        </div>
                        <figcaption className="text-muted-foreground mt-2 text-[10px] tracking-[0.1em] uppercase">{visual.label} · for visual reference</figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="xl">
          <div className="flex flex-col justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="text-brand-600 dark:text-brand-300 text-[10px] font-semibold tracking-[0.2em] uppercase">
                Interested in this project?
              </p>
              <Heading as="h2" level="h2" className="mt-3">Choose your next step.</Heading>
              <Text size="sm" className="text-muted-foreground mt-2">
                Ask for approved information, discuss a viewing, or understand the purchase journey for this project.
              </Text>
            </div>
            <Button asChild size="sm" variant="secondary" className="w-fit rounded-sm px-4">
              <Link href="#property-interest">
                Express project interest <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" border="top" className="bg-muted/30">
        <Container size="xl">
          <PropertyInterestForm
            propertyTitle="The Seventh Residence"
            propertyHref="/properties/the-seventh-residence"
          />
        </Container>
      </Section>
    </>
  );
}
