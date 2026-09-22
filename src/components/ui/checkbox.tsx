import { forwardRef, type InputHTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Checkbox = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, "type">
>(({ className, ...props }, ref) => {
  return (
    <span className="relative inline-flex size-5 shrink-0 items-center justify-center">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "peer border-border bg-background checked:border-brand-600 checked:bg-brand-600 focus-visible:ring-ring focus-visible:ring-offset-background size-5 shrink-0 appearance-none rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
      <Check
        className="pointer-events-none absolute size-3.5 text-white opacity-0 peer-checked:opacity-100"
        aria-hidden="true"
      />
    </span>
  );
});
Checkbox.displayName = "Checkbox";
