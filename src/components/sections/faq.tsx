import { Accordion, type AccordionItemData } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

// Grounded in the brand guideline's own description of the company and
// platform — no invented fees, minimums, or figures that don't exist yet.
const faqs: AccordionItemData[] = [
  {
    question: "What is Zenith Asset Group?",
    answer:
      "A Nigerian real estate investment company making property ownership accessible through fractional investing — letting people own shares of income-generating properties without needing millions upfront.",
  },
  {
    question: "What is fractional investing?",
    answer:
      "Instead of buying a property outright, you buy a share of it alongside other investors — a proportional stake in its income and value, at a fraction of the capital a full purchase would take.",
  },
  {
    question: "What is Partners by Zenith Asset Group?",
    answer:
      "Our platform for investing online: verified listings, virtual inspections, secure investing, and portfolio tracking, all in one dashboard.",
  },
  {
    question: "Who can invest?",
    answer:
      "Everyday individuals, the diaspora, and institutions alike — we're building for anyone ready to invest in property, regardless of geography or capital size.",
  },
  {
    question: "How are properties vetted?",
    answer:
      "Every listing goes through careful due diligence before it reaches the platform, with full transparency on fees and returns.",
  },
  {
    question: "When can I start investing?",
    answer:
      "The platform hasn't launched yet. Join the waitlist and we'll email you the moment listings go live.",
  },
];

export function Faq() {
  return (
    <Section id="faq" spacing="lg" border="bottom">
      <Container size="lg">
        <div className="grid gap-10 md:grid-cols-[minmax(0,300px)_1fr] md:gap-16">
          <Reveal>
            <Stack gap="sm" className="md:sticky md:top-28">
              <Text
                as="span"
                size="sm"
                className="text-brand-600 dark:text-brand-400 font-semibold tracking-wider uppercase"
              >
                FAQ
              </Text>
              <Heading as="h2" level="h1">
                Questions, answered.
              </Heading>
              <Text size="sm" className="text-muted-foreground">
                Can&apos;t find what you&apos;re looking for?{" "}
                <a
                  href="mailto:hello@zenithassetgroup.com"
                  className="text-foreground font-medium underline underline-offset-4"
                >
                  Email us directly
                </a>
                .
              </Text>
            </Stack>
          </Reveal>

          <Reveal delay={150}>
            <Accordion items={faqs} defaultOpen={0} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
