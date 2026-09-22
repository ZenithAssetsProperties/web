import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHero } from "@/components/page-hero";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not found" />
      <Container>
        <EmptyState
          icon={FileQuestion}
          title="This page doesn't exist"
          description="It may have been moved or removed. Check the URL, or head back home."
          action={
            <Button asChild>
              <Link href="/">Back home</Link>
            </Button>
          }
        />
      </Container>
    </>
  );
}
