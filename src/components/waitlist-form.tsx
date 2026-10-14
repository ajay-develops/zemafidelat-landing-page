"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon, Loader2Icon } from "lucide-react";
import { FormEvent, useEffect, useId, useRef, useState } from "react";

type WaitlistFormProps = {
  /**
   * The surface the form sits on. `mint` is the hero: an outlined field and the
   * green button. `leaf` is the bright green card at the bottom: a borderless
   * white field and the forest button, since a green button would vanish there.
   */
  surface?: "mint" | "leaf";
  /** A line under the form, e.g. the hero's "no spam" promise. */
  note?: string;
  className?: string;
};

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  surface = "mint",
  note,
  className,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  // Two forms on one page; each needs its own ids for label and error.
  const id = useId();
  const emailId = `${id}-email`;
  const errorId = `${id}-error`;
  const onLeaf = surface === "leaf";
  const successRef = useRef<HTMLDivElement>(null);

  // The form (and the focused field) disappears on success. Move focus to the
  // message, so keyboard users are not dropped to the top of the page and
  // screen readers read the confirmation.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function clearError() {
    if (status === "error") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
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
        body: JSON.stringify({ email: trimmedEmail }),
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
      setMessage(data?.message ?? siteConfig.waitlist.success);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className={cn(
          "flex flex-col gap-2 outline-none",
          onLeaf ? "items-center text-center" : "items-start",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
            onLeaf ? "bg-forest text-white" : "bg-primary text-white"
          )}
        >
          <CheckCircle2Icon className="size-4 shrink-0" aria-hidden />
          You&apos;re on the list
        </div>
        <p className="text-sm text-pretty text-foreground">{message}</p>
      </div>
    );
  }

  const hasError = status === "error" && message !== "";

  return (
    <div className={cn("w-full max-w-md", className)}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col gap-3 sm:flex-row"
      >
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <Input
          id={emailId}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            clearError();
          }}
          disabled={status === "loading"}
          required
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? errorId : undefined}
          className={cn(
            "h-12 min-w-0 flex-1 rounded-full bg-white px-5 text-base text-foreground",
            onLeaf
              ? "border-transparent focus-visible:ring-forest focus-visible:ring-offset-leaf"
              : "border-2 border-input focus-visible:ring-offset-mint",
            hasError && "border-destructive"
          )}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "h-12 shrink-0 rounded-full px-6 text-base font-bold",
            onLeaf
              ? "bg-forest hover:bg-forest/90 focus-visible:ring-forest focus-visible:ring-offset-leaf"
              : "shadow-[0_4px_0_0_var(--forest)] active:translate-y-0.5 active:shadow-[0_2px_0_0_var(--forest)] focus-visible:ring-offset-mint"
          )}
        >
          {status === "loading" ? (
            <>
              <Loader2Icon className="mr-2 size-4 animate-spin" aria-hidden />
              Joining…
            </>
          ) : (
            siteConfig.cta
          )}
        </Button>
      </form>
      {hasError ? (
        <p
          id={errorId}
          className={cn(
            "mt-3 text-sm font-medium",
            // Red on the bright green card is unreadable (under 3:1), so the
            // error there is forest, in bold.
            onLeaf ? "font-bold text-forest" : "text-destructive"
          )}
          role="alert"
        >
          {message}
        </p>
      ) : note ? (
        <p className="mt-3 text-sm text-muted-foreground">{note}</p>
      ) : null}
    </div>
  );
}
