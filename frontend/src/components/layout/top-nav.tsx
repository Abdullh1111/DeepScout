import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Avatar, Badge, Logo } from "@/components/ui";

export interface TopNavProps {
  /** Current user's name for the avatar pill; omit to show a plain "Menu". */
  userName?: string;
  /** Optional status badge, e.g. an in-progress "Researching…" pill. */
  status?: { label: string; variant?: "warning" | "success" | "info" };
  /** Right-aligned custom actions rendered before the avatar. */
  actions?: ReactNode;
  className?: string;
}

export function TopNav({ userName, status, actions, className }: TopNavProps) {
  return (
    <header
      className={cn(
        "flex h-16 items-center justify-between gap-4 border-b border-border bg-surface/60 px-5 backdrop-blur",
        className,
      )}
    >
      <Link href="/" aria-label="DeepScout home">
        <Logo />
      </Link>

      <div className="flex items-center gap-3">
        {status && (
          <Badge variant={status.variant ?? "warning"} dot>
            {status.label}
          </Badge>
        )}
        {actions}
        {userName ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] py-1 pl-1 pr-3">
            <Avatar name={userName} size="sm" />
            <span className="text-xs font-medium text-foreground">
              {userName.split(" ")[0]}
            </span>
          </span>
        ) : (
          <span className="rounded-full border border-border bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted">
            Menu
          </span>
        )}
      </div>
    </header>
  );
}
