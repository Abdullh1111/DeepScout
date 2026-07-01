import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { TopNav } from "./top-nav";
import type { TopNavProps } from "./top-nav";
import { Sidebar } from "./sidebar";
import type { SidebarSection } from "./sidebar";

export interface AppShellProps {
  sidebar: SidebarSection[];
  newResearchHref?: string;
  /** Forwarded to the TopNav (user pill, status badge, extra actions). */
  topNav?: TopNavProps;
  /** Constrain + pad the main content. Set false for full-bleed pages. */
  padded?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * The primary in-app layout: fixed TopNav, left Sidebar, scrollable main.
 * Reused across Landing, Research, Report, History and Settings screens.
 */
export function AppShell({
  sidebar,
  newResearchHref,
  topNav,
  padded = true,
  children,
  className,
}: AppShellProps) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <TopNav {...topNav} />
      <div className="flex min-h-0 flex-1">
        <Sidebar sections={sidebar} newResearchHref={newResearchHref} />
        <main
          className={cn(
            "min-w-0 flex-1 overflow-y-auto",
            padded && "px-6 py-8 md:px-10",
            className,
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
