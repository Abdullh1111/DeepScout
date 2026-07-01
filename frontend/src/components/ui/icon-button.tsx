"use client";

import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import { cn } from "@/lib/cn";

type IconButtonVariant = "ghost" | "surface" | "outline";
type IconButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<IconButtonVariant, string> = {
  ghost: "text-muted hover:bg-white/[0.06] hover:text-foreground",
  surface:
    "border border-border bg-white/[0.04] text-foreground hover:bg-white/[0.08]",
  outline: "border border-border text-muted hover:text-foreground",
};

const sizeStyles: Record<IconButtonSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-11",
};

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required accessible label — icon buttons have no visible text. */
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

export function IconButton({
  label,
  variant = "ghost",
  size = "md",
  icon,
  className,
  type = "button",
  ref,
  ...props
}: IconButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
