import type { Metadata } from "next";
import { ArrowRight, Globe, Mail } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/page-hero";

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
        description="Have a question about Zenith Asset Group or the property marketplace preview? Reach out directly."
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

          <Button asChild size="lg" className="mt-10 w-fit">
            <a href="mailto:hello@zenithassetgroup.com">
              Email Zenith Asset Group
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Container>
      </Section>
    </>
  );
}
