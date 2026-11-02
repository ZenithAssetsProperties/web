"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/typography";

type InterestIntent = "information" | "inspection" | "purchase" | "documents";

const intentLabels: Record<InterestIntent, string> = {
  information: "Request approved property information",
  inspection: "Arrange a viewing or inspection",
  purchase: "Discuss the purchase process",
  documents: "Ask about property documentation",
};

export function PropertyInterestForm({
  propertyTitle,
  propertyHref,
}: {
  propertyTitle: string;
  propertyHref: string;
}) {
  const id = useId();
  const propertySlug = propertyHref.split("/").filter(Boolean).pop() ?? "";
  const [intent, setIntent] = useState<InterestIntent>("information");
  const [contactMethod, setContactMethod] = useState("email");
  const [emailOpened, setEmailOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const selectedIntent = values.get("intent") as InterestIntent;
    const body = [
      `Property: ${propertyTitle}`,
      `Property reference: ${propertySlug}`,
      `Interest: ${intentLabels[selectedIntent]}`,
      `Name: ${values.get("name") ?? ""}`,
      `Email: ${values.get("email") || "Not provided"}`,
      `Phone: ${values.get("phone") || "Not provided"}`,
      `Preferred contact method: ${values.get("contactMethod") ?? "Email"}`,
    ].join("\n");
    const mail = new URLSearchParams({ subject: `Property enquiry: ${propertyTitle}`, body });
    window.location.href = `mailto:hello@zenithassetgroup.com?${mail.toString()}`;
    setEmailOpened(true);
  }

  return (
    <Card
      id="property-interest"
      className="border-border/80 bg-background scroll-mt-28 rounded-none border-x-0 border-y p-5 shadow-none sm:p-8 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <div>
          <p className="text-brand-600 text-[10px] font-semibold tracking-[0.18em] uppercase">
            Property enquiry <span className="text-foreground/35 px-1">/</span> {propertyTitle}
          </p>
          <h2 className="font-heading mt-3 text-3xl leading-tight font-normal tracking-tight sm:text-4xl">
            Tell us what you need next.
          </h2>
          <Text size="sm" className="text-muted-foreground mt-3 leading-6">
            Choose the next step you have in mind for{" "}
            <span className="text-foreground">{propertyTitle}</span>.
          </Text>
          <div className="border-brand-600/35 mt-6 border-l pl-4">
            <p className="text-foreground text-[10px] font-semibold tracking-[0.14em] uppercase">
              A clear next step
            </p>
            <p className="text-muted-foreground mt-2 text-xs leading-5">
              Your email app will open with the property and enquiry details ready for you to
              review.
            </p>
          </div>
        </div>

        <div>
          <div className="border-border/80 mb-5 flex items-start gap-3 border-b pb-4">
            <ClipboardList className="text-brand-600 mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-foreground text-xs font-medium">Enquiry for {propertyTitle}</p>
              <p className="text-muted-foreground mt-1 text-[11px]">
                Your property context stays with your message.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="propertySlug" value={propertySlug} />
            <Field id={`${id}-intent`} label="What would you like help with?">
              <select
                id={`${id}-intent`}
                name="intent"
                value={intent}
                onChange={(event) => setIntent(event.target.value as InterestIntent)}
                className="border-border bg-background text-foreground focus-visible:ring-ring h-11 w-full rounded-md border px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {Object.entries(intentLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id={`${id}-name`} label="Name">
                <Input id={`${id}-name`} name="name" autoComplete="name" required />
              </Field>
              <Field
                id={`${id}-email`}
                label={contactMethod === "phone" ? "Email address (optional)" : "Email address"}
              >
                <Input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required={contactMethod === "email"}
                />
              </Field>
              <Field
                id={`${id}-phone`}
                label={contactMethod === "phone" ? "Phone number" : "Phone number (optional)"}
              >
                <Input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required={contactMethod === "phone"}
                />
              </Field>
              <Field id={`${id}-contact-method`} label="Preferred contact method">
                <select
                  id={`${id}-contact-method`}
                  name="contactMethod"
                  value={contactMethod}
                  onChange={(event) => setContactMethod(event.target.value)}
                  className="border-border bg-background text-foreground focus-visible:ring-ring h-10 w-full rounded-md border px-3.5 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </Field>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-muted-foreground max-w-sm text-[10px] leading-4">
                Review the prepared message in your email app and send it to complete your enquiry.
              </p>
              <Button type="submit" size="sm" className="h-10 shrink-0 px-4">
                Continue by email <ArrowRight aria-hidden="true" />
              </Button>
            </div>
            {emailOpened && (
              <p className="text-brand-700 text-xs leading-5" role="status" aria-live="polite">
                Your email app should open. Send the prepared message to reach Zenith. If it does
                not, email{" "}
                <a
                  className="font-medium underline underline-offset-2"
                  href={`mailto:hello@zenithassetgroup.com?subject=${encodeURIComponent(`Property enquiry: ${propertyTitle}`)}`}
                >
                  hello@zenithassetgroup.com
                </a>{" "}
                and include {propertyTitle}.
              </p>
            )}
          </form>
        </div>
      </div>
    </Card>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
