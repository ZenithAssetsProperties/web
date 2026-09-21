import Link from "next/link";
import { ArrowRight, Building2, LineChart, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Grid } from "@/components/ui/grid";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const highlights = [
  {
    icon: Building2,
    title: "Curated listings",
    description: "Every property is vetted for value, location, and long-term upside.",
  },
  {
    icon: LineChart,
    title: "Investor-grade insight",
    description: "Market data and comparables so decisions are backed by evidence.",
  },
  {
    icon: ShieldCheck,
    title: "White-glove support",
    description: "A dedicated advisor guides you from first viewing to closing.",
  },
];

export default function HomePage() {
  return (
    <>
      <Section spacing="lg" border="bottom">
        <Container>
          <Stack gap="lg" className="max-w-2xl">
            <Badge>Now accepting new clients</Badge>
            <Heading as="h1" level="display">
              Premium properties, managed with precision.
            </Heading>
            <Text size="lead">
              Zenith Assets Properties helps buyers, sellers, and investors move on the right
              opportunities with confidence.
            </Text>
            <Stack direction="row" gap="md" wrap>
              <Button asChild size="lg">
                <Link href="/listings">
                  Browse listings
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Talk to an advisor</Link>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <Grid cols={3} gap="lg">
            {highlights.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="bg-brand-50 dark:bg-brand-950 flex size-10 items-center justify-center rounded-md">
                    <Icon
                      className="text-brand-600 dark:text-brand-400 size-5"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
