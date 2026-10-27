"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";

export function NewsletterSignup() {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section spacing="lg" className="bg-[#f7f7f4]">
      <Container size="xl">
        <div className="grid gap-8 border-y border-brand-950/15 py-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-12">
          <Reveal>
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.19em] text-brand-700 uppercase">
              <span className="h-px w-7 bg-brand-700/60" aria-hidden="true" />
              The Zenith letter <span className="text-foreground/35">/ Occasional notes</span>
            </p>
            <Heading as="h2" level="h2" className="mt-4 max-w-lg text-3xl leading-[1.06] sm:text-4xl">
              A little more perspective, <span className="font-normal italic">when it matters.</span>
            </Heading>
            <Text size="sm" className="mt-3 max-w-md leading-6 text-muted-foreground">
              Property insights and product updates, thoughtfully sent. No noise, just useful context.
            </Text>
          </Reveal>

          <Reveal delay={120}>
            {submitted ? (
              <div className="border border-brand-700/20 bg-white/70 p-5 sm:p-6" role="status" aria-live="polite">
                <Check className="size-5 text-brand-700" aria-hidden="true" />
                <p className="font-heading mt-3 text-xl font-normal">Preview complete.</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  No newsletter subscription was created, and no information was sent or saved.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-[10px] font-semibold tracking-wide text-brand-700 uppercase underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
                  Preview the form again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`${id}-email`}>Email address</Label>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Input id={`${id}-email`} name="email" type="email" autoComplete="off" placeholder="you@example.com" required className="h-11 rounded-none border-foreground/20 bg-white" />
                    <Button type="submit" size="sm" className="h-11 shrink-0 rounded-none px-5">
                      Preview signup <ArrowRight aria-hidden="true" />
                    </Button>
                  </div>
                </div>
                <label className="flex items-start gap-2.5 text-[10px] leading-4 text-muted-foreground">
                  <input type="checkbox" name="demo-consent" required className="mt-0.5 size-3.5 shrink-0 accent-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600" />
                  <span>I understand this is a non-connected preview. I will use fictional details; nothing will be sent or stored.</span>
                </label>
                <p className="text-[9px] tracking-[0.08em] text-muted-foreground uppercase">Newsletter delivery will be enabled after the subscription service is connected.</p>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
