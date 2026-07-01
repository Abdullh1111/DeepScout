import { cn } from "@/lib/cn";
import {
  Button,
  Card,
  SkeletonText,
  SourceCard,
} from "@/components/ui";
import { AppShell } from "@/components/layout";
import { ExportIcon, ShareIcon } from "@/components/icons";
import {
  CURRENT_USER,
  recentSidebar,
  reportSections,
  reportSources,
  reportTitle,
} from "@/lib/mock-data";

export default function ReportPage() {
  return (
    <AppShell sidebar={recentSidebar} topNav={{ userName: CURRENT_USER.name }}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {reportTitle}
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<ExportIcon className="size-4" />}
            >
              Export
            </Button>
            <Button size="sm" leftIcon={<ShareIcon className="size-4" />}>
              Share
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[240px_1fr]">
          {/* Table of contents */}
          <Card className="h-fit p-4">
            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
              Contents
            </p>
            <nav className="flex flex-col gap-0.5">
              {reportSections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={cn(
                    "rounded-lg px-2.5 py-2 text-sm transition",
                    i === 0
                      ? "bg-white/[0.06] font-medium text-foreground"
                      : "text-muted hover:bg-white/[0.04] hover:text-foreground",
                  )}
                >
                  {i + 1} · {section.label}
                </a>
              ))}
            </nav>
            <p className="mt-3 border-t border-border px-2 pt-3 text-xs text-muted">
              Reading time ~6 min · 18 sources
            </p>
          </Card>

          {/* Report body */}
          <Card className="p-6 md:p-8">
            <section id="financial">
              <h2 className="text-lg font-semibold text-foreground">
                Financial requirements
              </h2>
              <p className="mt-1 text-xs text-muted">
                Section 1 of 4 · drafted from 18 sources
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                Australia requires evidence of AUD $29,710 per year in living
                costs <cite className="not-italic text-violet">[1]</cite>,
                assessed at the visa application stage. Canada&rsquo;s
                proof-of-funds requirement is CAD $20,635 outside Quebec{" "}
                <cite className="not-italic text-violet">[2]</cite>.
              </p>
              <SkeletonText lines={2} className="mt-4" />

              <h3 className="mt-6 text-sm font-semibold text-foreground">
                Key thresholds
              </h3>
              <SkeletonText lines={2} className="mt-3" />
            </section>

            <div className="mt-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                Sources
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {reportSources.map((s, i) => (
                  <SourceCard
                    key={s.domain}
                    domain={s.domain}
                    title={s.title}
                    index={i + 1}
                    href="#"
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
