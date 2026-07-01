"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  leftIcon?: ReactNode;
}

/**
 * Small pill-shaped toggle/suggestion control (e.g. "Web", "Docs",
 * suggestion prompts). Renders as a button so it works for both
 * selectable filters and clickable suggestions.
 */
export function Chip({
  active = false,
  leftIcon,
  className,
  children,
  type = "button",
  ...props
}: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={active}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-medium whitespace-nowrap transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
        active
          ? "border-violet/40 bg-violet/15 text-foreground"
          : "border-border bg-white/[0.03] text-muted hover:border-border-strong hover:text-foreground",
        className,
      )}
      {...props}
    >
      {leftIcon}
      {children}
    </button>
  );
}
