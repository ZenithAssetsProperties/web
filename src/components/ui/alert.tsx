import type { HTMLAttributes } from "react";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("relative flex gap-3 rounded-lg border p-4 text-sm", {
  variants: {
    variant: {
      info: "border-brand-200 bg-brand-50 text-brand-900 dark:border-brand-900 dark:bg-brand-950 dark:text-brand-200",
      success:
        "border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-200",
      warning:
        "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200",
      destructive:
        "border-accent-200 bg-accent-50 text-accent-900 dark:border-accent-900 dark:bg-accent-950 dark:text-accent-200",
    },
  },
  defaultVariants: { variant: "info" },
});

const alertIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: XCircle,
} as const;

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string;
}

export function Alert({ className, variant = "info", title, children, ...props }: AlertProps) {
  const Icon = alertIcons[variant ?? "info"];
  return (
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <div className="space-y-1">
        {title && <p className="leading-none font-medium">{title}</p>}
        {children && <div className="text-sm opacity-90">{children}</div>}
      </div>
    </div>
  );
}
