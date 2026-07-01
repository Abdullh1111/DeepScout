import {
  Badge,
  Card,
  ProgressBar,
  SkeletonText,
  SourceCard,
  Stepper,
} from "@/components/ui";
import { AppShell } from "@/components/layout";
import {
  CURRENT_USER,
  agentSteps,
  recentSidebar,
  reportSources,
  reportTitle,
} from "@/lib/mock-data";

export default function ResearchRunPage() {
  return (
    <AppShell
      sidebar={recentSidebar}
      topNav={{
        userName: CURRENT_USER.name,
        status: { label: "Researching…", variant: "warning" },
      }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Australia vs Canada — 2026 student visa
        </h1>

        <div className="mt-6 grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Agent steps */}
          <Card className="h-fit p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">
                Agent steps
              </h2>
              <Badge size="sm" variant="info">
                step 3/5
              </Badge>
            </div>
            <Stepper steps={agentSteps} />
            <div className="mt-4 border-t border-border pt-4">
              <ProgressBar value={63} label="Coverage" showValue />
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-muted">
                <span className="rounded-md bg-white/[0.04] px-2 py-1">
                  Tavily
                </span>
                <span className="rounded-md bg-white/[0.04] px-2 py-1">
                  Tools
                </span>
                <span className="rounded-md bg-white/[0.04] px-2 py-1">
                  Citations
                </span>
              </div>
            </div>
          </Card>

          {/* Streaming report */}
          <Card className="p-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-foreground">
                {reportTitle}
              </h2>
              <p className="text-xs text-muted">
                Draft · generated from 18 sources · 4 sec ago
              </p>
            </div>

            <section className="mt-6">
              <h3 className="text-sm font-semibold text-foreground">
                1 · Financial requirements
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                Australia requires evidence of AUD $29,710 per year in living
                costs <cite className="not-italic text-violet">[1]</cite>,
                assessed at the visa application stage. Canada&rsquo;s
                proof-of-funds requirement is CAD $20,635 outside Quebec{" "}
                <cite className="not-italic text-violet">[2]</cite>.
              </p>
              <SkeletonText lines={2} className="mt-3" />
            </section>

            <section className="mt-6">
              <h3 className="text-sm font-semibold text-foreground">
                2 · English proficiency
              </h3>
              <SkeletonText lines={2} className="mt-3" />
              <ProgressBar value={40} className="mt-4 max-w-xs" />
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
                  />
                ))}
              </div>
            </div>

            <p className="mt-6 rounded-xl border border-border bg-white/[0.02] px-4 py-3 text-xs text-muted">
              Writing report… you can add guidance while it runs.
            </p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
