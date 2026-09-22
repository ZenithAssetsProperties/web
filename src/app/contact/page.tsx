import type { Metadata } from "next";
import { Globe, Mail } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/page-hero";
import { WaitlistTrigger } from "@/components/waitlist-trigger";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Zenith Asset Group.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question, or want early access when we launch? Reach out directly, or join the waitlist to hear from us first."
      />
      <Section spacing="lg">
        <Container size="md">
          <Grid cols={2} gap="md">
            <Card>
              <CardHeader>
                <Mail className="text-brand-600 dark:text-brand-400 size-5" aria-hidden="true" />
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  <a
                    href="mailto:hello@zenithassetgroup.com"
                    className="hover:text-foreground transition-colors"
                  >
                    hello@zenithassetgroup.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="text-brand-600 dark:text-brand-400 size-5" aria-hidden="true" />
                <CardTitle>Website</CardTitle>
                <CardDescription>
                  <a
                    href="https://www.zenithassetgroup.com"
                    className="hover:text-foreground transition-colors"
                  >
                    www.zenithassetgroup.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </Grid>

          <WaitlistTrigger size="lg" className="mt-10 w-fit">
            Join our waitlist
          </WaitlistTrigger>
        </Container>
      </Section>
    </>
  );
}
