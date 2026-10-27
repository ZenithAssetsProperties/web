import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Compass, FileSearch, Headset, MapPinned, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "How it works",
  description: "Explore the stages of a property search, from discovery through to a confident next step.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Explore properties and narrow your search by the details that matter to you.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Explore",
    description: "Review the property description, available media, location context, and key facts.",
    icon: ScanSearch,
  },
  {
    number: "03",
    title: "Review",
    description: "Check what documentation information is available and ask for clarification when needed.",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Inspect",
    description: "Explore virtual viewing options or arrange a physical inspection with the team.",
    icon: MapPinned,
  },
  {
    number: "05",
    title: "Connect",
    description: "Speak with a Zenith representative to understand the next steps for a property.",
    icon: Headset,
  },
  {
    number: "06",
    title: "Proceed",
    description: "Review the applicable terms and process with Zenith before making a decision.",
    icon: ClipboardCheck,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-brand-950 relative overflow-hidden pb-14 pt-32 text-white sm:pb-20 sm:pt-40">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/brand/pattern-tile.png)",
            backgroundSize: "112px 117px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden="true"
        />
        <Container className="relative">
          <Stack gap="md" className="max-w-3xl">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-brand-200 uppercase">The Zenith approach</p>
            <Heading as="h1" level="display" className="text-white">
              A clearer path to your next property.
            </Heading>
            <Text size="lead" className="max-w-2xl text-white/70">
              Explore the stages of the property journey and understand what to review before you proceed.
            </Text>
          </Stack>
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="text-brand-600 dark:text-brand-300 text-sm font-semibold tracking-wider uppercase">
              The journey
            </p>
            <Heading as="h2" level="h2" className="mt-3">
              From first search to a confident next step.
            </Heading>
            <Text className="text-muted-foreground mt-4">
              A clear process helps you focus on the right questions at each stage. Availability, terms, and viewing options are confirmed for each property.
            </Text>
          </div>

          <Grid cols={3} gap="md">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="border-border group relative border-t p-5 pt-6 sm:p-7 sm:pt-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground/60 font-mono text-xs">{number}</span>
                  <Icon className="text-brand-600/70 dark:text-brand-300/70 size-6 transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true" />
                </div>
                <Heading as="h3" level="h3" className="mt-8">{title}</Heading>
                <Text size="sm" className="text-muted-foreground mt-3 leading-6">{description}</Text>
              </article>
            ))}
          </Grid>

          <div className="bg-muted/50 mt-12 flex flex-col justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-heading text-lg font-normal">Property-specific guidance</p>
              <p className="text-muted-foreground mt-1 text-sm">
                Confirm availability, documentation, viewing options, and applicable terms with Zenith.
              </p>
            </div>
            <Button asChild>
              <Link href="/properties">
                Explore properties <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
