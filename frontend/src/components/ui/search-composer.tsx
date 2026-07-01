"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./button";
import { Chip } from "./chip";
import { GlobeIcon, DocIcon, SparkleIcon } from "@/components/icons";

export interface SearchComposerProps {
  placeholder?: string;
  submitLabel?: string;
  defaultValue?: string;
  onSubmit?: (value: string, filters: string[]) => void;
  className?: string;
  /** Extra controls rendered in the footer's left cluster. */
  footerExtra?: ReactNode;
}

const defaultFilters = [
  { id: "web", label: "Web", icon: <GlobeIcon className="size-3.5" /> },
  { id: "docs", label: "Docs", icon: <DocIcon className="size-3.5" /> },
];

/**
 * The main "Ask anything" research input: a rounded surface with a textarea,
 * source-filter chips, and a submit button. Self-contained (holds its own
 * value + filter state) but reports out via onSubmit.
 */
export function SearchComposer({
  placeholder = "Ask anything — e.g. “Compare AU vs CA student visa requirements in 2026”",
  submitLabel = "Start research",
  defaultValue = "",
  onSubmit,
  className,
  footerExtra,
}: SearchComposerProps) {
  const [value, setValue] = useState(defaultValue);
  const [active, setActive] = useState<string[]>(["web"]);

  function toggle(id: string) {
    setActive((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit?.(value.trim(), active);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl border border-border-strong bg-input p-3 shadow-lg focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20",
        className,
      )}
    >
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={2}
        placeholder={placeholder}
        aria-label="Research question"
        className="w-full resize-none bg-transparent px-2 pt-1 text-sm text-foreground outline-none placeholder:text-muted"
      />
      <div className="mt-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {defaultFilters.map((f) => (
            <Chip
              key={f.id}
              active={active.includes(f.id)}
              onClick={() => toggle(f.id)}
              leftIcon={f.icon}
            >
              {f.label}
            </Chip>
          ))}
          {footerExtra}
        </div>
        <Button
          type="submit"
          size="sm"
          leftIcon={<SparkleIcon className="size-3.5" />}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
