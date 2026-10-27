"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/typography";
import type { Property } from "@/lib/properties";

export function InspectionRequestPreview({ property }: { property: Property }) {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card id="inspection-request" className="scroll-mt-28 rounded-2xl p-5 sm:p-8">
      <div className="flex items-start gap-3">
        <ClipboardList className="text-brand-600 dark:text-brand-300 mt-1 size-5 shrink-0" aria-hidden="true" />
        <div>
          <p className="text-brand-600 dark:text-brand-300 text-xs font-semibold tracking-[0.14em] uppercase">
            Prototype interaction
          </p>
          <h2 className="font-heading mt-1 text-2xl font-normal tracking-tight">Preview an inspection request</h2>
          <Text size="sm" className="text-muted-foreground mt-2">
            Demo property: {property.title}. Use fictional details only. Nothing is saved or sent.
          </Text>
        </div>
      </div>

      {submitted ? (
        <div className="bg-muted/60 mt-6 rounded-xl p-5" role="status" aria-live="polite">
          <CheckCircle2 className="text-brand-600 dark:text-brand-300 size-6" aria-hidden="true" />
          <p className="mt-3 font-semibold">Prototype flow complete</p>
          <p className="text-muted-foreground mt-1 text-sm">
            Your sample details were not sent to Zenith or stored.
          </p>
          <Button type="button" variant="secondary" className="mt-4" onClick={() => setSubmitted(false)}>
            Preview again
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField id={`${id}-name`} label="Name">
              <Input id={`${id}-name`} name="name" autoComplete="off" required />
            </FormField>
            <FormField id={`${id}-phone`} label="Phone number">
              <Input id={`${id}-phone`} name="phone" type="tel" autoComplete="off" required />
            </FormField>
            <FormField id={`${id}-email`} label="Email address">
              <Input id={`${id}-email`} name="email" type="email" autoComplete="off" required />
            </FormField>
            <FormField id={`${id}-visitors`} label="Number of visitors">
              <Input id={`${id}-visitors`} name="visitors" type="number" min="1" max="20" required />
            </FormField>
            <FormField id={`${id}-date`} label="Preferred date">
              <Input id={`${id}-date`} name="date" type="date" required />
            </FormField>
            <FormField id={`${id}-time`} label="Preferred time">
              <Input id={`${id}-time`} name="time" type="time" required />
            </FormField>
          </div>

          <FormField id={`${id}-request`} label="Special request (optional)">
            <textarea
              id={`${id}-request`}
              name="request"
              rows={3}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-background w-full resize-y rounded-md border px-3.5 py-3 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              placeholder="Add a note for this demo"
            />
          </FormField>

          <label className="border-border flex items-start gap-3 rounded-lg border p-3.5 text-sm">
            <input
              type="checkbox"
              name="fictional-details"
              required
              className="border-border text-brand-600 focus-visible:ring-ring mt-0.5 size-4 shrink-0 rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            />
            <span className="text-muted-foreground">
              I understand this is a prototype and I am using fictional contact details.
            </span>
          </label>

          <Button type="submit">Preview request confirmation</Button>
        </form>
      )}
    </Card>
  );
}

function FormField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
