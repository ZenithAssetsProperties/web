import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

export default function NotFound() {
  return (
    <Container>
      <EmptyState
        icon={FileQuestion}
        title="Page not found"
        description="The page you're looking for doesn't exist or has moved."
        action={
          <Button asChild>
            <Link href="/">Back home</Link>
          </Button>
        }
      />
    </Container>
  );
}
