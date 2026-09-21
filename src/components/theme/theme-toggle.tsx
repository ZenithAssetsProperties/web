"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, type ButtonProps } from "@/components/ui/button";

export function ThemeToggle({ className, variant = "ghost", ...props }: ButtonProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid rendering theme-dependent UI until after hydration, since the
  // server has no way to know the client's stored preference.
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant={variant}
        size="icon"
        aria-label="Toggle theme"
        className={className}
        disabled
        {...props}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant={variant}
      size="icon"
      aria-label="Toggle theme"
      className={className}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
