import Link from "next/link";
import { ArrowRight, Compass, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

const steps = [
  {
    number: "01",
    title: "Explore",
    text: "Search by property type, location, and budget.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Review",
    text: "Read the details and understand what documentation is available.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Plan a visit",
    text: "Review virtual viewing options or arrange a physical inspection.",
    icon: MapPin,
  },
];

export function CustomerJourney() {
  return (
    <Section spacing="lg" border="top">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-brand-600 dark:text-brand-300 text-xs font-semibold tracking-[0.14em] uppercase">
                A thoughtful property journey
              </p>
              <Heading as="h2" level="h1" className="mt-3">
                Know what to do next.
              </Heading>
              <Text className="text-muted-foreground mt-4 max-w-md">
                The product is being designed to make each step easier to understand, from first
                search through inspection planning.
              </Text>
              <Button asChild variant="link" className="mt-6">
                <Link href="/how-it-works">
                  See the full journey <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="divide-border border-border divide-y border-t">
            {steps.map(({ number, title, text, icon: Icon }, index) => (
              <Reveal key={number} delay={index * 80}>
                <article className="grid gap-4 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-start sm:gap-6 sm:py-9">
                  <span className="text-muted-foreground/60 font-mono text-xs">{number}</span>
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
                      {title}
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-lg text-sm leading-6">{text}</p>
                  </div>
                  <Icon className="text-brand-600/70 dark:text-brand-300/70 size-5" strokeWidth={1.6} aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
