"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon, Loader2Icon } from "lucide-react";
import { FormEvent, useState } from "react";

type WaitlistFormProps = {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  /** Compact layout for denser sections like the bottom CTA. */
  variant?: "default" | "compact";
  showHint?: boolean;
};

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  className,
  inputClassName,
  buttonClassName,
  variant = "default",
  showHint = true,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = email.trim().toLowerCase();
    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
        message?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setMessage(
          data?.error ?? "Something went wrong. Please try again in a moment."
        );
        return;
      }

      setStatus("success");
      setMessage(
        data?.message ??
          "You're on the list — we'll email you when the APK is ready."
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-2 text-center",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <CheckCircle2Icon className="size-4 shrink-0" />
          You&apos;re on the list
        </div>
        <p className="max-w-md text-sm text-muted-foreground">{message}</p>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      {showHint ? (
        <p className="mb-3 text-sm font-medium text-muted-foreground text-center">
          <span className="text-foreground">{siteConfig.ctaSecondary}</span>
          {" — "}
          {siteConfig.waitlistHint.replace(/^APK coming soon — /, "")}
        </p>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex w-full gap-2",
          variant === "default" ? "flex-col sm:flex-row" : "flex-col sm:flex-row"
        )}
      >
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <Input
          id="waitlist-email"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setStatus("idle");
              setMessage("");
            }
          }}
          disabled={status === "loading"}
          required
          className={cn(
            "h-11 rounded-full px-4 bg-background/80",
            inputClassName
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className={cn(
            "h-11 shrink-0 rounded-full px-6 text-white",
            buttonClassName
          )}
        >
          {status === "loading" ? (
            <>
              <Loader2Icon className="mr-2 size-4 animate-spin" />
              Joining…
            </>
          ) : (
            siteConfig.cta
          )}
        </Button>
      </form>
      {status === "error" && message ? (
        <p
          className="mt-2 text-center text-sm text-destructive"
          role="alert"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
