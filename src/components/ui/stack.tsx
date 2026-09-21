import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const stackVariants = cva("flex", {
  variants: {
    direction: { row: "flex-row", col: "flex-col" },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    gap: { none: "gap-0", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" },
    wrap: { true: "flex-wrap", false: "flex-nowrap" },
  },
  defaultVariants: {
    direction: "col",
    align: "stretch",
    justify: "start",
    gap: "md",
    wrap: false,
  },
});

export interface StackProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {}

export function Stack({ className, direction, align, justify, gap, wrap, ...props }: StackProps) {
  return (
    <div
      className={cn(stackVariants({ direction, align, justify, gap, wrap }), className)}
      {...props}
    />
  );
}
