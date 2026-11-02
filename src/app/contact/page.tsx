import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Heading, Text } from "@/components/ui/typography";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact & Advisory | Zenith Asset Group",
  description:
    "Speak with our senior real estate advisors. Schedule a private consultation for residential acquisition, portfolio expansion, or strategic property investments.",
};

const advisoryChannels = [
  {
    title: "Direct Advisory Email",
    value: "hello@zenithassetgroup.com",
    href: "mailto:hello@zenithassetgroup.com",
    icon: Mail,
    note: "Official communications & advisory requests",
  },
  {
    title: "Direct Client Desk",
    value: "+234 800 ZENITH AG",
    href: "tel:+2348000000000",
    icon: Phone,
    note: "Monday to Friday, 8:00 AM – 6:00 PM (WAT)",
  },
  {
    title: "Regional Representation",
    value: "Lagos, Nigeria",
    href: "https://www.zenithassetgroup.com",
    icon: MapPin,
    note: "West Africa & International Diaspora Advisory",
  },
  {
    title: "Web Portal",
    value: "www.zenithassetgroup.com",
    href: "https://www.zenithassetgroup.com",
    icon: Globe,
    note: "24/7 Digital catalogue & virtual tours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Private Client Advisory"
        title={
          <>
            Connect with our <span className="font-normal italic">property specialists.</span>
          </>
        }
        description="Whether you are acquiring a private residence, expanding a commercial portfolio, or exploring strategic real estate investments, our advisory team provides dedicated, confidential guidance."
      />

      <Section spacing="lg">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Institutional Credibility & Channels */}
            <div className="space-y-8 lg:col-span-5">
              <Reveal>
                <div className="space-y-3">
                  <p className="text-brand-600 text-[10px] font-semibold tracking-[0.2em] uppercase">
                    Client Relations
                  </p>
                  <Heading as="h2" level="h2">
                    A personalized, confidential approach.
                  </Heading>
                  <Text size="muted" className="leading-relaxed">
                    We treat every inquiry with fiduciary care and absolute discretion. Our senior
                    advisors are ready to walk you through verified property opportunities, legal
                    title due diligence, and capital growth modeling.
                  </Text>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {advisoryChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <a
                        key={channel.title}
                        href={channel.href}
                        className="border-border/70 hover:border-brand-600 dark:hover:border-brand-400 group bg-background/50 relative block border p-5 transition-all duration-300 hover:shadow-sm"
                      >
                        <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -top-px -left-px size-2.5 border-t-2 border-l-2 transition-colors" />
                        <span className="border-border group-hover:border-brand-600 dark:group-hover:border-brand-400 absolute -right-px -bottom-px size-2.5 border-r-2 border-b-2 transition-colors" />
                        <div className="flex items-start gap-4">
                          <div className="bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 border-brand-200 dark:border-brand-800 flex size-10 shrink-0 items-center justify-center rounded-lg border">
                            <Icon className="size-5" />
                          </div>
                          <div>
                            <p className="text-muted-foreground font-mono text-[10px] font-semibold tracking-wider uppercase">
                              {channel.title}
                            </p>
                            <p className="text-foreground group-hover:text-brand-600 dark:group-hover:text-brand-400 mt-1 text-sm font-semibold transition-colors">
                              {channel.value}
                            </p>
                            <p className="text-muted-foreground mt-0.5 text-xs">{channel.note}</p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="border-brand-600/30 bg-brand-950/5 relative rounded-lg border p-6 dark:bg-white/[0.02]">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-brand-600 dark:text-brand-400 mt-0.5 size-5 shrink-0" />
                    <div className="space-y-1">
                      <p className="text-foreground text-xs font-semibold">
                        Fiduciary Assurance &amp; Privacy
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Your contact details and investment criteria are held in strict confidence.
                        We do not sell or share investor information with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Interactive Advisory Consultation Form */}
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="border-border/80 bg-background relative border p-7 shadow-sm sm:p-10">
                  <span className="border-brand-600 dark:border-brand-400 absolute -top-px -left-px size-3 border-t-2 border-l-2" />
                  <span className="border-brand-600 dark:border-brand-400 absolute -right-px -bottom-px size-3 border-r-2 border-b-2" />

                  <div className="border-border/60 mb-8 border-b pb-6">
                    <p className="text-brand-600 text-[10px] font-semibold tracking-[0.2em] uppercase">
                      Advisory Request
                    </p>
                    <Heading as="h3" level="h3" className="mt-2 text-2xl">
                      Schedule a Private Consultation
                    </Heading>
                    <Text size="muted" className="mt-2 text-xs">
                      Complete this brief form to be connected directly with an executive property
                      advisor.
                    </Text>
                  </div>

                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
