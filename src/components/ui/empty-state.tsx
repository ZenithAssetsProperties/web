import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
  /** Semantic heading level — defaults to h2 since this usually sits below
   * a page's own h1 (e.g. PageHero). Pass "h1" when it's the only heading
   * on the page. */
  titleAs?: "h1" | "h2" | "h3";
}

/**
 * Shared shape for "nothing to show" and "something broke" screens alike —
 * used by not-found, error.tsx, and empty list/search results.
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  titleAs = "h2",
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3 py-24 text-center", className)} {...props}>
      {Icon && (
        <div className="bg-muted flex size-12 items-center justify-center rounded-full">
          <Icon className="text-muted-foreground size-6" aria-hidden="true" />
        </div>
      )}
      <Heading as={titleAs} level="h3">
        {title}
      </Heading>
      {description && (
        <Text size="muted" className="max-w-sm">
          {description}
        </Text>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
