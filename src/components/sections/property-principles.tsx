import { BadgeCheck, Eye, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

const principles = [
  {
    title: "Clear property details",
    body: "See the price, location, size, features, and availability together.",
    icon: Eye,
  },
  {
    title: "Documentation status",
    body: "Understand which property records are available to review or request.",
    icon: BadgeCheck,
  },
  {
    title: "A human next step",
    body: "Know how to ask a question or plan an inspection when you need more detail.",
    icon: MessageCircle,
  },
];

export function PropertyPrinciples() {
  return (
    <Section spacing="lg" className="bg-brand-950 text-white">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-brand-300 text-xs font-semibold tracking-[0.14em] uppercase">
              Built around transparency
            </p>
            <Heading as="h2" level="h1" className="mt-3 text-white">
              Every property should tell its story.
            </Heading>
            <Text className="mt-4 max-w-2xl text-white/70">
              Property information, documentation status, viewing options, and next steps should be
              clear and easy to review.
            </Text>
          </div>
        </Reveal>

        <Grid cols={3} gap="md" className="mt-12">
          {principles.map(({ title, body, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 70}>
              <article className="h-full border-t border-white/15 py-6 sm:py-7">
                <Icon className="text-brand-300 size-5" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="font-heading mt-7 text-xl font-normal tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{body}</p>
              </article>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
