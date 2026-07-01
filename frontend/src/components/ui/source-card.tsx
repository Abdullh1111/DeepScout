import { cn } from "@/lib/cn";

export interface SourceCardProps {
  domain: string;
  title: string;
  /** Optional index shown as a citation marker, e.g. 1 -> [1]. */
  index?: number;
  href?: string;
  className?: string;
}

function faviconColor(domain: string): string {
  const palette = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#f97316",
    "#10b981",
    "#0ea5e9",
  ];
  let sum = 0;
  for (let i = 0; i < domain.length; i++) sum += domain.charCodeAt(i);
  return palette[sum % palette.length];
}

export function SourceCard({
  domain,
  title,
  index,
  href,
  className,
}: SourceCardProps) {
  const content = (
    <>
      <span
        className="flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
        style={{ backgroundColor: faviconColor(domain) }}
        aria-hidden="true"
      >
        {domain[0]?.toUpperCase()}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          {typeof index === "number" && (
            <span className="text-violet">[{index}]</span>
          )}
          <span className="truncate">{domain}</span>
        </span>
        <span className="truncate text-xs text-muted">{title}</span>
      </span>
    </>
  );

  const shared = cn(
    "flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] p-3 transition",
    href && "hover:border-border-strong hover:bg-white/[0.05]",
    className,
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={shared}>
        {content}
      </a>
    );
  }
  return <div className={shared}>{content}</div>;
}
