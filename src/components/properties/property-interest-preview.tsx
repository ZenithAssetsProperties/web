"use client";

import Link from "next/link";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
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

export function PropertyInterestPreview({
  propertyTitle,
  propertyHref,
}: {
  propertyTitle: string;
  propertyHref: string;
}) {
  const id = useId();
  const propertySlug = propertyHref.split("/").filter(Boolean).pop() ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [intent, setIntent] = useState<InterestIntent>("information");
  const [contactMethod, setContactMethod] = useState("email");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card id="property-interest" className="scroll-mt-28 rounded-none border-x-0 border-y border-border/80 bg-background p-5 shadow-none sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <div>
          <p className="text-brand-600 text-[10px] font-semibold tracking-[0.18em] uppercase">
            Property interest <span className="px-1 text-foreground/35">/</span> Prototype
          </p>
          <h2 className="font-heading mt-3 text-3xl leading-tight font-normal tracking-tight sm:text-4xl">
            Start with what you need.
          </h2>
          <Text size="sm" className="mt-3 leading-6 text-muted-foreground">
            Tell Zenith what you would like to do next about <span className="text-foreground">{propertyTitle}</span>.
            Your selection stays attached to this property in the preview flow.
          </Text>
          <div className="mt-6 border-l border-brand-600/35 pl-4">
            <p className="text-[10px] font-semibold tracking-[0.14em] text-foreground uppercase">A clear next step</p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Choose an enquiry type, share fictional contact details, and review the request summary. A live team workflow will be connected with the backend later.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-start gap-3 border-b border-border/80 pb-4">
            <ClipboardList className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-foreground">Enquiry for {propertyTitle}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">Prototype only · Nothing is sent or saved</p>
            </div>
          </div>

          {submitted ? (
            <div className="border border-brand-600/20 bg-brand-50/60 p-5 sm:p-6" role="status" aria-live="polite">
              <CheckCircle2 className="size-6 text-brand-700" aria-hidden="true" />
              <h3 className="mt-3 font-heading text-2xl font-normal">Your next step is clear.</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                You selected: <span className="font-medium text-foreground">{intentLabels[intent]}</span> for {propertyTitle}.
                This preview has not sent or stored an enquiry.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button type="button" variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                  Edit request
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href={propertyHref}>Return to property <ArrowRight aria-hidden="true" /></Link>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="propertySlug" value={propertySlug} />
              <input type="hidden" name="source" value="public-property-detail" />
              <Field id={`${id}-intent`} label="What would you like help with?">
                <select
                  id={`${id}-intent`}
                  name="intent"
                  value={intent}
                  onChange={(event) => setIntent(event.target.value as InterestIntent)}
                  className="h-11 w-full rounded-md border border-border bg-background px-3.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {Object.entries(intentLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id={`${id}-name`} label="Name">
                  <Input id={`${id}-name`} name="name" autoComplete="off" required />
                </Field>
                <Field id={`${id}-email`} label={contactMethod === "phone" ? "Email address (optional)" : "Email address"}>
                  <Input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    autoComplete="off"
                    required={contactMethod === "email"}
                  />
                </Field>
                <Field id={`${id}-phone`} label={contactMethod === "phone" ? "Phone number" : "Phone number (optional)"}>
                  <Input
                    id={`${id}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="off"
                    required={contactMethod === "phone"}
                  />
                </Field>
                <Field id={`${id}-contact-method`} label="Preferred contact method">
                  <select
                    id={`${id}-contact-method`}
                    name="contactMethod"
                    value={contactMethod}
                    onChange={(event) => setContactMethod(event.target.value)}
                    className="h-10 w-full rounded-md border border-border bg-background px-3.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </Field>
              </div>

              <label className="flex items-start gap-3 border border-border/80 p-3.5 text-xs leading-5 text-muted-foreground">
                <input
                  type="checkbox"
                  name="prototype-understanding"
                  required
                  className="mt-0.5 size-4 shrink-0 accent-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                />
                <span>I understand this is a preview and I am using fictional contact details. My enquiry will not reach Zenith.</span>
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-[10px] leading-4 text-muted-foreground">
                  No reservation, payment, or property availability is confirmed by this action.
                </p>
                <Button type="submit" size="sm" className="h-10 shrink-0 px-4">
                  Preview my interest <ArrowRight aria-hidden="true" />
                </Button>
              </div>
            </form>
          )}
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
