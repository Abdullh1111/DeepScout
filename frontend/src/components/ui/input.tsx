"use client";

import { useId } from "react";
import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftAddon?: ReactNode;
  ref?: Ref<HTMLInputElement>;
}

export function Input({
  label,
  hint,
  error,
  leftAddon,
  id,
  className,
  ref,
  ...props
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const describedBy = error
    ? `${inputId}-error`
    : hint
      ? `${inputId}-hint`
      : undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftAddon && (
          <span className="pointer-events-none absolute left-3 text-zinc-400">
            {leftAddon}
          </span>
        )}
        <input
          id={inputId}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "h-11 w-full rounded-xl border bg-white px-3.5 text-sm text-zinc-900 shadow-sm outline-none transition-colors placeholder:text-zinc-400",
            "focus:ring-2 focus:ring-zinc-200 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-800",
            leftAddon ? "pl-9" : null,
            error
              ? "border-red-400 focus:ring-red-100 dark:border-red-500/70 dark:focus:ring-red-950"
              : "border-zinc-300 focus:border-zinc-400 dark:border-zinc-700",
            className,
          )}
          {...props}
        />
      </div>

      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="text-xs text-zinc-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
