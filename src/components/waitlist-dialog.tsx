"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/typography";

export interface WaitlistDialogProps {
  open: boolean;
  onClose: () => void;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  consent: boolean;
}

const initialState: FormState = { firstName: "", lastName: "", email: "", consent: false };

/**
 * This project is frontend-only — there is no backend to persist a signup
 * to yet. This stub is the integration point: swap it for a real API/service
 * call (e.g. a serverless function, a waitlist provider) when one exists.
 */
async function submitWaitlistSignup(data: FormState): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.info("Waitlist signup captured (not yet persisted anywhere):", data);
}

export function WaitlistDialog({ open, onClose }: WaitlistDialogProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formId = useId();

  const handleClose = () => {
    onClose();
    window.setTimeout(() => {
      setForm(initialState);
      setStatus("idle");
    }, 200);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await submitWaitlistSignup(form);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      title={status === "success" ? "You're on the list" : "Join our waitlist"}
      description={
        status === "success" ? undefined : "Be the first to know when Zenith Asset Group launches."
      }
    >
      {status === "success" ? (
        <div className="flex flex-col items-center gap-3 py-2 text-center">
          <div className="bg-brand-100 dark:bg-brand-900 flex size-12 items-center justify-center rounded-full">
            <CheckCircle2
              className="text-brand-600 dark:text-brand-400 size-6"
              aria-hidden="true"
            />
          </div>
          <Text size="sm" className="text-muted-foreground">
            Thanks, {form.firstName}. We&apos;ll email {form.email} as soon as we launch.
          </Text>
          <Button className="mt-2" onClick={handleClose}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor={`${formId}-first`}>First name</Label>
              <Input
                id={`${formId}-first`}
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor={`${formId}-last`}>Last name</Label>
              <Input
                id={`${formId}-last`}
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${formId}-email`}>Email address</Label>
            <Input
              id={`${formId}-email`}
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>

          <label className="flex items-start gap-2.5">
            <Checkbox
              required
              checked={form.consent}
              onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
              className="mt-0.5"
            />
            <span className="text-muted-foreground text-sm">
              I agree to be contacted by Zenith Asset Group about the platform launch.
            </span>
          </label>

          {status === "error" && (
            <p className="text-destructive text-sm">Something went wrong. Please try again.</p>
          )}

          <Button type="submit" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" ? "Joining…" : "Join the waitlist"}
          </Button>
        </form>
      )}
    </Dialog>
  );
}
