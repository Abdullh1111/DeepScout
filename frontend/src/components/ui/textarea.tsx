"use client";

import { useId } from "react";
import type { TextareaHTMLAttributes, Ref } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

export function Textarea({
  label,
  hint,
  error,
  id,
  className,
  ref,
  rows = 4,
  ...props
}: TextareaProps) {
  const autoId = useId();
  const areaId = id ?? autoId;
  const describedBy = error
    ? `${areaId}-error`
    : hint
      ? `${areaId}-hint`
      : undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={areaId}
          className="text-xs font-medium uppercase tracking-wide text-muted"
        >
          {label}
        </label>
      )}
      <textarea
        id={areaId}
        ref={ref}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "w-full resize-none rounded-xl border bg-input px-3.5 py-3 text-sm text-foreground outline-none transition placeholder:text-muted",
          "focus:ring-2 focus:ring-accent/30",
          error
            ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/20"
            : "border-border-strong focus:border-accent",
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={`${areaId}-error`} className="text-xs text-red-400">
          {error}
        </p>
      ) : hint ? (
        <p id={`${areaId}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
