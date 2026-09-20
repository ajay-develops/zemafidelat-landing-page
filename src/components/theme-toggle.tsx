"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Light/dark switch for visitors.
 *
 * The page follows the visitor's system setting until they press this; from
 * then on next-themes remembers their choice (localStorage) across visits.
 *
 * Which icon shows is decided by CSS from the `dark` class on <html>, not by
 * component state, so the button renders the same on the server and the client
 * and never flashes the wrong icon before hydration.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Switch between light and dark theme"
      title="Switch between light and dark theme"
      className={cn(
        "size-9 rounded-full text-muted-foreground hover:text-foreground",
        className
      )}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-5 dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
    </Button>
  );
}
