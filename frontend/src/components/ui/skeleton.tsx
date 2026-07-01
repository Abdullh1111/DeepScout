import { cn } from "@/lib/cn";

export interface SkeletonProps {
  className?: string;
}

/** A single shimmering placeholder block. */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-white/[0.06]",
        className,
      )}
      aria-hidden="true"
    />
  );
}

export interface SkeletonTextProps {
  /** Number of lines to render. */
  lines?: number;
  className?: string;
}

/** A stack of skeleton lines with a shorter final line, for loading copy. */
export function SkeletonText({ lines = 3, className }: SkeletonTextProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-3", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}
