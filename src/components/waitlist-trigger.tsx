"use client";

import { useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/waitlist-dialog";

/** Keeps the button + its dialog's open state together, so callers (like
 * the server-rendered Hero) can drop this in without becoming a Client
 * Component themselves. */
export function WaitlistTrigger(props: ButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <WaitlistDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
