"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const profile = formData.get("profile") as string;
    const objective = formData.get("objective") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;

    const body = [
      "--- ZENITH ASSET GROUP ADVISORY INQUIRY ---",
      `Client Name: ${name}`,
      `Email Address: ${email}`,
      `Phone / WhatsApp: ${phone || "Not specified"}`,
      `Client Profile: ${profile}`,
      `Primary Objective: ${objective}`,
      `Target Allocation / Budget: ${budget || "To be discussed"}`,
      "",
      "Confidential Message:",
      message || "Requesting a private consultation with Zenith Asset Group.",
    ].join("\n");

    const mailtoUrl = `mailto:hello@zenithassetgroup.com?${new URLSearchParams({
      subject: `Advisory Request: ${name} (${profile})`,
      body,
    }).toString()}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-brand-600/40 bg-brand-50/50 dark:bg-brand-950/20 rounded-lg border p-8 text-center">
        <CheckCircle2 className="text-brand-600 dark:text-brand-400 mx-auto size-12" />
        <h4 className="font-heading text-foreground mt-4 text-xl font-bold">
          Consultation Request Prepared
        </h4>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          Your email application has been opened with your inquiry details addressed directly to our
          senior advisory desk.
        </p>
        <p className="text-muted-foreground mt-2 text-xs">
          If your client did not launch automatically, you can email us directly at{" "}
          <a
            href="mailto:hello@zenithassetgroup.com"
            className="text-brand-600 dark:text-brand-400 font-semibold underline"
          >
            hello@zenithassetgroup.com
          </a>
          .
        </p>
        <Button variant="secondary" size="sm" className="mt-6" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-xs font-semibold tracking-wide uppercase">
            Full Name <span className="text-accent-600">*</span>
          </Label>
          <Input
            id="contact-name"
            name="name"
            required
            placeholder="e.g. Dr. Adesola Adeleke"
            className="h-11 rounded-none text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-xs font-semibold tracking-wide uppercase">
            Email Address <span className="text-accent-600">*</span>
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="e.g. adeleke@company.com"
            className="h-11 rounded-none text-sm"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-phone" className="text-xs font-semibold tracking-wide uppercase">
            Phone / WhatsApp
          </Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            className="h-11 rounded-none text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="contact-profile"
            className="text-xs font-semibold tracking-wide uppercase"
          >
            Client Profile
          </Label>
          <select
            id="contact-profile"
            name="profile"
            className="border-input bg-background text-foreground focus-visible:ring-ring h-11 w-full rounded-none border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
            defaultValue="Private Individual"
          >
            <option value="Private Individual">Private Individual</option>
            <option value="Growing Family">Growing Family</option>
            <option value="Diaspora Investor">International Diaspora</option>
            <option value="Corporate Enterprise">Corporate Enterprise</option>
            <option value="Family Office / Institution">Family Office / Institution</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor="contact-objective"
            className="text-xs font-semibold tracking-wide uppercase"
          >
            Primary Objective
          </Label>
          <select
            id="contact-objective"
            name="objective"
            className="border-input bg-background text-foreground focus-visible:ring-ring h-11 w-full rounded-none border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
            defaultValue="Own Dream Property"
          >
            <option value="Own Dream Property">Own Dream Property (Residential)</option>
            <option value="Expand Real Estate Portfolio">
              Expand Portfolio (Commercial / Land)
            </option>
            <option value="Strategic Property Investment">Strategic Property Investment</option>
            <option value="The Seventh Residence Inquiry">The Seventh Residence Inquiry</option>
            <option value="General Advisory / Title Vetting">
              General Advisory &amp; Due Diligence
            </option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-budget" className="text-xs font-semibold tracking-wide uppercase">
            Target Allocation
          </Label>
          <select
            id="contact-budget"
            name="budget"
            className="border-input bg-background text-foreground focus-visible:ring-ring h-11 w-full rounded-none border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
            defaultValue="₦100M - ₦250M"
          >
            <option value="Below ₦100M">Below ₦100M</option>
            <option value="₦100M - ₦250M">₦100M – ₦250M</option>
            <option value="₦250M - ₦500M">₦250M – ₦500M</option>
            <option value="₦500M - ₦1B">₦500M – ₦1B</option>
            <option value="₦1B+">₦1B+ (Flagship / Institutional)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="text-xs font-semibold tracking-wide uppercase">
          Confidential Message / Specific Requirements
        </Label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Please outline any specific locations, property criteria, or questions for our advisory team..."
          className="border-input bg-background text-foreground focus-visible:ring-ring w-full rounded-none border p-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <span>Request Confidential Consultation</span>
        <Send className="size-4" aria-hidden="true" />
      </Button>
    </form>
  );
}
