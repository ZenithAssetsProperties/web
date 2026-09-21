import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("", {
  variants: {
    spacing: {
      sm: "py-12",
      md: "py-16 sm:py-24",
      lg: "py-24 sm:py-32",
    },
    border: {
      none: "",
      top: "border-t border-border",
      bottom: "border-b border-border",
    },
  },
  defaultVariants: { spacing: "md", border: "none" },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  as?: "section" | "div";
}

export function Section({
  className,
  spacing,
  border,
  as: Comp = "section",
  ...props
}: SectionProps) {
  return <Comp className={cn(sectionVariants({ spacing, border }), className)} {...props} />;
}
