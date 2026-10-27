import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

const subscribeHref =
  "mailto:hello@zenithassetgroup.com?subject=Join%20the%20Zenith%20letter&body=Please%20share%20the%20details%20for%20joining%20the%20Zenith%20newsletter.";

export function NewsletterSignup() {
  return (
    <Section spacing="md" className="bg-[#f7f7f4]">
      <Container size="xl">
        <div className="grid gap-7 border-y border-brand-950/15 py-7 sm:py-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.19em] text-brand-700 uppercase">
              <span className="h-px w-7 bg-brand-700/60" aria-hidden="true" />
              Newsletter <span className="text-foreground/35">/ The Zenith letter</span>
            </p>
            <Heading as="h2" level="h2" className="mt-3 max-w-2xl text-3xl leading-[1.06] sm:text-4xl">
              A little more perspective, <span className="font-normal italic">when it matters.</span>
            </Heading>
            <Text size="sm" className="mt-3 max-w-xl leading-6 text-muted-foreground">
              Occasional notes on property, new projects, and the details worth considering.
            </Text>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <Button asChild size="sm" className="h-10 rounded-none px-4">
                <a href={subscribeHref}>
                  Request to subscribe <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <p className="text-[10px] leading-4 text-muted-foreground">
                Opens an email to Zenith. Subscription preferences are confirmed directly with the team.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
