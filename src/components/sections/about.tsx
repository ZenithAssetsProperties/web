import {
  Award,
  BadgeCheck,
  Compass,
  Eye,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

const coreValues = [
  { label: "Integrity", icon: ShieldCheck },
  { label: "Transparency", icon: Eye },
  { label: "Excellence", icon: Award },
  { label: "Innovation", icon: Lightbulb },
  { label: "Accountability", icon: BadgeCheck },
  { label: "Long-Term Value Creation", icon: TrendingUp },
];

const vision = [
  "To become Africa's leading real estate investment platform",
  "Empowering individuals, families, and institutions to build generational wealth",
  "Making property investment accessible, free from the limits of geography, capital, or complexity",
  "Opening real estate ownership to anyone ready to invest in their future",
];

const mission =
  "To simplify real estate investing by offering secure, transparent, and profitable investment opportunities backed by carefully selected assets and professional management. We are committed to breaking down the traditional barriers of real estate ownership — whether that's high capital requirements, distance for diaspora investors, or the complexity of managing property — so that every investor can participate with confidence and clarity at every step of the journey.";

export function About() {
  return (
    <Section id="about" spacing="lg" border="bottom">
      <Container size="md">
        <Stack gap="lg">
          <Reveal>
            <Stack gap="md" className="max-w-3xl">
              <Text size="lead">
                Zenith Asset Group is a Nigerian real estate investment company making property
                ownership accessible through fractional investing — letting people own shares of
                income-generating properties without needing millions upfront.
              </Text>
              <Text>
                Our platform, Partners by Zenith Asset Group, brings this online with verified
                listings, virtual inspections, secure investing, and portfolio tracking in one
                dashboard. We simplify real estate investing and build long-term wealth for everyday
                people, the diaspora, and institutions alike — backed by careful due diligence and
                full transparency on fees and returns.
              </Text>
            </Stack>
          </Reveal>

          {/* Core values as blueprint-style spec panels — numbered like drawing
              annotations, oversized thin-line icons, square registration-mark
              corners. Not another rounded icon-in-a-circle feature grid. */}
          <Reveal delay={200}>
            <Stack gap="sm">
              <Heading as="h3" level="h4">
                Core values
              </Heading>
              <Grid cols={3} gap="md">
                {coreValues.map(({ label, icon: Icon }, index) => (
                  <div
                    key={label}
                    className="group border-border/70 hover:border-brand-600 dark:hover:border-brand-400 relative border p-6 transition-colors"
                  >
                    <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2 transition-colors" />
                    <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2 transition-colors" />

                    <span className="text-muted-foreground/60 font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Icon
                      strokeWidth={1.25}
                      className="text-brand-600/70 group-hover:text-brand-600 dark:text-brand-400/70 dark:group-hover:text-brand-400 mt-5 size-10 transition-all duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />

                    <Text as="span" size="sm" className="text-foreground mt-4 block font-semibold">
                      {label}
                    </Text>
                  </div>
                ))}
              </Grid>
            </Stack>
          </Reveal>

          <Reveal delay={250}>
            <Grid cols={2} gap="lg" className="pt-8">
              <Stack gap="sm" className="sm:pr-8">
                <Compass
                  strokeWidth={1.25}
                  className="text-brand-600/70 dark:text-brand-400/70 size-8"
                  aria-hidden="true"
                />
                <Heading as="h3" level="h4">
                  Vision
                </Heading>
                <ul className="space-y-2">
                  {vision.map((point) => (
                    <li key={point} className="group flex gap-2.5">
                      <span className="bg-brand-600 dark:bg-brand-400 mt-2 size-1.5 shrink-0 rounded-full transition-transform group-hover:scale-125" />
                      <Text
                        as="span"
                        size="sm"
                        className="text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {point}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Stack>
              <Stack gap="sm" className="sm:border-border sm:border-l sm:pl-8">
                <Target
                  strokeWidth={1.25}
                  className="text-brand-600/70 dark:text-brand-400/70 size-8"
                  aria-hidden="true"
                />
                <Heading as="h3" level="h4">
                  Mission
                </Heading>
                <Text size="muted">{mission}</Text>
              </Stack>
            </Grid>
          </Reveal>
        </Stack>
      </Container>
    </Section>
  );
}
