import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface DividerProps {
  /** Optional centered label, e.g. "or". */
  children?: ReactNode;
  className?: string;
}

export function Divider({ children, className }: DividerProps) {
  if (!children) {
    return <span className={cn("block h-px w-full bg-border", className)} />;
  }
  return (
    <div
      className={cn("flex items-center gap-3 text-xs text-muted", className)}
    >
      <span className="h-px flex-1 bg-border" />
      {children}
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
