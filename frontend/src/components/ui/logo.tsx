import { cn } from "@/lib/cn";
import { LogoMark } from "@/components/icons";

export interface LogoProps {
  /** Hide the wordmark and render the mark only. */
  markOnly?: boolean;
  className?: string;
}

export function Logo({ markOnly = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark className="size-6" />
      {!markOnly && (
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          DeepScout
        </span>
      )}
    </span>
  );
}
