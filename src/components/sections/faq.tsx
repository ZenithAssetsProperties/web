import { Accordion, type AccordionItemData } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Heading, Text } from "@/components/ui/typography";

const faqs: AccordionItemData[] = [
  {
    question: "What is Zenith Asset Group?",
    answer:
      "Zenith Asset Group is developing an online property experience to help customers discover properties, review available information, arrange inspections, and connect with the team.",
  },
  {
    question: "Are the properties shown on this website available to buy?",
    answer:
      "Availability changes by property. Contact Zenith to confirm current options before making a decision.",
  },
  {
    question: "What does property verification mean?",
    answer:
      "Zenith should explain its review criteria and supporting information for each property. Ask the team to clarify any documentation or verification status that is not shown.",
  },
  {
    question: "Can I arrange an inspection?",
    answer: "Contact Zenith to discuss viewing options for a specific property.",
  },
  {
    question: "Can I reserve or pay for a property online?",
    answer:
      "Online reservation and payment are not offered through this website. Contact Zenith to confirm the approved next steps and payment arrangements.",
  },
  {
    question: "Can customers outside Nigeria use the platform?",
    answer:
      "The product requirements include diaspora customers in the intended audience. Zenith will share confirmed service and inspection options through its team.",
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
