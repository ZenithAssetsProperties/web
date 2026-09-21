import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="space-y-6">
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </Container>
  );
}
