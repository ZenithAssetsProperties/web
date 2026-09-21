"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <EmptyState
        icon={AlertTriangle}
        title="Something went wrong"
        description="An unexpected error occurred. Try again, or head back home if the problem persists."
        action={<Button onClick={() => reset()}>Try again</Button>}
      />
    </Container>
  );
}
