"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { PlusIcon } from "@/components/icons";

export interface SidebarNavItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface SidebarSection {
  /** Optional uppercase section label, e.g. "RECENT". */
  title?: string;
  items: SidebarNavItem[];
}

export interface SidebarProps {
  sections: SidebarSection[];
  newResearchHref?: string;
  className?: string;
}

export function Sidebar({
  sections,
  newResearchHref = "/",
  className,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden w-64 shrink-0 flex-col gap-6 border-r border-border bg-surface/50 px-4 py-5 md:flex",
        className,
      )}
    >
      <Link
        href={newResearchHref}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-violet text-sm font-medium text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <PlusIcon className="size-4" />
        New research
      </Link>

      <nav className="flex flex-col gap-5">
        {sections.map((section, i) => (
          <div key={section.title ?? i} className="flex flex-col gap-1">
            {section.title && (
              <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
                {section.title}
              </p>
            )}
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition",
                    active
                      ? "bg-white/[0.06] font-medium text-foreground"
                      : "text-muted hover:bg-white/[0.04] hover:text-foreground",
                  )}
                >
                  {item.icon && (
                    <span className="shrink-0 text-muted">{item.icon}</span>
                  )}
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
