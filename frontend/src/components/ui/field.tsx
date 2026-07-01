import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface FieldProps {
  label?: string;
  /** Optional action rendered on the right of the label row, e.g. "Forgot?". */
  action?: ReactNode;
  hint?: string;
  error?: string;
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Layout wrapper that pairs a label (+ optional right-side action) with any
 * control. Use when you need a label row that Input/Select can't express on
 * their own (e.g. a "Forgot?" link beside "Password").
 */
export function Field({
  label,
  action,
  hint,
  error,
  htmlFor,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      {(label || action) && (
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={htmlFor}
              className="text-xs font-medium uppercase tracking-wide text-muted"
            >
              {label}
            </label>
          )}
          {action}
        </div>
      )}
      {children}
      {error ? (
        <p className="text-xs text-red-400">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted">{hint}</p>
      ) : null}
    </div>
  );
}
