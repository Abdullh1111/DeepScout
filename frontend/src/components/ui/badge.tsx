import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant =
  | "neutral"
  | "success"
  | "warning"
  | "info"
  | "violet"
  | "danger";
type BadgeSize = "sm" | "md";

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "border-border bg-white/[0.04] text-muted",
  success: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
  warning: "border-amber-500/25 bg-amber-500/10 text-amber-300",
  info: "border-sky-500/25 bg-sky-500/10 text-sky-300",
  violet: "border-violet/30 bg-violet/12 text-violet",
  danger: "border-red-500/25 bg-red-500/10 text-red-300",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "h-5 px-2 text-[11px]",
  md: "h-6 px-2.5 text-xs",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  leftIcon?: ReactNode;
}

export function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  leftIcon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium whitespace-nowrap",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {dot && <span className="size-1.5 rounded-full bg-current" />}
      {leftIcon}
      {children}
    </span>
  );
}
