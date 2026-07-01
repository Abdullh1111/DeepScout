import Link from "next/link";
import { cn } from "@/lib/cn";
import { Badge } from "./badge";
import { SkeletonText } from "./skeleton";

export type ResearchStatus = "done" | "researching" | "draft";

const statusMap: Record<
  ResearchStatus,
  { label: string; variant: "success" | "warning" | "neutral" }
> = {
  done: { label: "Done", variant: "success" },
  researching: { label: "Researching", variant: "warning" },
  draft: { label: "Draft", variant: "neutral" },
};

export interface ResearchCardProps {
  title: string;
  meta: string;
  status: ResearchStatus;
  href?: string;
  className?: string;
}

export function ResearchCard({
  title,
  meta,
  status,
  href = "/report",
  className,
}: ResearchCardProps) {
  const s = statusMap[status];
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition hover:border-border-strong hover:bg-white/[0.03]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground">
          {title}
        </h3>
        <Badge variant={s.variant} size="sm" dot={status === "researching"}>
          {s.label}
        </Badge>
      </div>
      <p className="text-xs text-muted">{meta}</p>
      <SkeletonText lines={3} className="mt-1" />
    </Link>
  );
}
