import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="animate-pulse space-y-6">
        <div className="bg-muted h-10 w-2/3 rounded-md" />
        <div className="bg-muted h-4 w-full rounded-md" />
        <div className="bg-muted h-4 w-5/6 rounded-md" />
      </div>
    </Container>
  );
}
