import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300",
        success: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
        warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
        destructive: "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300",
        outline: "border border-border text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Shows a pulsing status dot in front of the label — e.g. "In development". */
  dot?: boolean;
}

export function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
