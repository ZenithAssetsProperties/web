import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

const coreValues = [
  "Integrity",
  "Transparency",
  "Excellence",
  "Innovation",
  "Accountability",
  "Long-Term Value Creation",
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

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-2">
              {coreValues.map((value) => (
                <Badge
                  key={value}
                  variant="outline"
                  className="hover:border-brand-600 hover:text-brand-600 dark:hover:border-brand-400 dark:hover:text-brand-400 transition-colors"
                >
                  {value}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <Grid cols={2} gap="lg" className="pt-8">
              <Stack gap="sm" className="sm:pr-8">
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
