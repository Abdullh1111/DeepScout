"use client";

import { useId } from "react";
import type { SelectHTMLAttributes, Ref } from "react";
import { cn } from "@/lib/cn";
import { ChevronDownIcon } from "@/components/icons";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  hint?: string;
  options: SelectOption[];
  ref?: Ref<HTMLSelectElement>;
}

export function Select({
  label,
  hint,
  options,
  id,
  className,
  ref,
  ...props
}: SelectProps) {
  const autoId = useId();
  const selectId = id ?? autoId;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-medium uppercase tracking-wide text-muted"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <select
          id={selectId}
          ref={ref}
          className={cn(
            "h-11 w-full appearance-none rounded-xl border border-border-strong bg-input pl-3.5 pr-10 text-sm text-foreground outline-none transition",
            "focus:border-accent focus:ring-2 focus:ring-accent/30",
            className,
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-surface">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 size-4 text-muted" />
      </div>
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
