import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/page-hero";
import { WaitlistTrigger } from "@/components/waitlist-trigger";

export const metadata: Metadata = {
  title: "Listings",
  description: "Verified property listings on Zenith Asset Group — coming soon.",
};

export default function ListingsPage() {
  return (
    <>
      <PageHero eyebrow="Properties" title="Listings" />
      <Section spacing="lg">
        <Container>
          <EmptyState
            icon={Building2}
            title="Listings aren't live yet"
            description="Verified properties will appear here once the platform launches. Join the waitlist to be notified the moment they do."
            action={<WaitlistTrigger>Join our waitlist</WaitlistTrigger>}
          />
        </Container>
      </Section>
    </>
  );
}
