"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * No backend yet — this stub is the integration point for a real email
 * service (e.g. a newsletter provider's API) when one exists.
 */
async function subscribeToNewsletter(email: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.info("Newsletter subscription captured (not yet persisted anywhere):", email);
}

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await subscribeToNewsletter(email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={className}>
        <div className="flex items-center gap-2.5 text-sm text-white">
          <CheckCircle2 className="text-brand-400 size-5 shrink-0" aria-hidden="true" />
          You&apos;re subscribed — thanks for joining.
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm items-center rounded-full border border-white/15 bg-white/[0.06] p-1.5 pl-5 transition-colors focus-within:border-white/30 focus-within:bg-white/[0.08]"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-9 min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="text-brand-950 flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-medium transition-colors hover:bg-white/90 disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "submitting" ? "Joining…" : "Subscribe"}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </button>
      </form>

      {status === "error" ? (
        <p className="text-accent-400 mt-2.5 text-xs">Something went wrong. Please try again.</p>
      ) : (
        <p className="mt-2.5 text-xs text-white/40">No spam. Unsubscribe anytime.</p>
      )}
    </div>
  );
}
