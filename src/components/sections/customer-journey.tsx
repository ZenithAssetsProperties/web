import Link from "next/link";
import { ArrowUpRight, ClipboardList, Compass, FileText, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Start with a property type, location, or budget that fits your search.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Understand",
    text: "Review the property story, key details, and the status of its documents.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Plan a visit",
    text: "Explore viewing options and plan an inspection where one is confirmed.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Express interest",
    text: "Tell Zenith what you need next, with the property context carried through.",
    icon: ClipboardList,
  },
];

export function CustomerJourney() {
  return (
    <Section spacing="lg" className="relative isolate overflow-hidden bg-brand-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] [background:radial-gradient(ellipse_at_78%_15%,rgba(196,164,106,0.5),transparent_42%)]"
        aria-hidden="true"
      />
      <Container size="xl">
        <div className="grid gap-8 border-b border-white/15 pb-8 sm:pb-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.19em] text-brand-200 uppercase">
              <span className="h-px w-7 bg-brand-200/70" aria-hidden="true" />
              A more considered journey <span className="text-white/45">/ From search to next step</span>
            </p>
            <Heading as="h2" level="h1" className="mt-4 max-w-2xl text-4xl leading-[1.04] text-white sm:text-5xl lg:text-[3.5rem]">
              Clarity at every <span className="font-normal italic">stage.</span>
            </Heading>
          </Reveal>
          <Reveal delay={120}>
            <div className="lg:justify-self-end lg:max-w-sm">
              <Text size="sm" className="leading-6 text-white/65">
                From first search to a property-specific enquiry, each step should make the decision easier to understand.
              </Text>
              <Link
                href="/how-it-works"
                className="group mt-5 inline-flex h-10 items-center gap-3 border border-white/35 px-4 text-xs font-medium text-white transition-[background-color,border-color,color] duration-500 hover:border-white hover:bg-white hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore how it works
                <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-x-7 sm:grid-cols-2 sm:gap-x-9 xl:grid-cols-4">
          {steps.map(({ number, title, text, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 100} className="h-full">
              <article className="group/step relative h-full border-t border-white/20 py-6 transition-colors duration-500 hover:border-brand-200 sm:py-8 xl:min-h-60">
                <span className="absolute -top-px left-0 h-px w-0 bg-brand-200 transition-[width] duration-700 group-hover/step:w-full" aria-hidden="true" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-white/45">{number}</span>
                  <Icon className="size-4 text-brand-200/80 transition-transform duration-500 group-hover/step:-translate-y-0.5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-heading mt-8 text-2xl font-normal tracking-tight text-white sm:mt-10 sm:text-3xl">{title}</h3>
                <p className="mt-3 max-w-xs text-xs leading-6 text-white/60 sm:text-sm">{text}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="mt-5 hidden size-4 text-white/35 xl:block" aria-hidden="true" />
                )}
              </article>
            </Reveal>
          ))}
        </div>

      </Container>
    </Section>
  );
}
