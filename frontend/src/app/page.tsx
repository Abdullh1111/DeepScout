"use client";

import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout";
import { Chip, SearchComposer } from "@/components/ui";
import { CURRENT_USER, recentSidebar, suggestionPrompts } from "@/lib/mock-data";

export default function LandingPage() {
  const router = useRouter();

  return (
    <AppShell
      sidebar={recentSidebar}
      topNav={{ userName: CURRENT_USER.name }}
      className="flex items-center justify-center"
      padded={false}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-16 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          What should I research today?
        </h1>
        <p className="mt-2 max-w-md text-sm text-muted">
          DeepScout plans the question, searches the web, and writes a fully
          cited report.
        </p>

        <SearchComposer
          className="mt-8 w-full text-left"
          onSubmit={() => router.push("/research")}
        />

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {suggestionPrompts.map((prompt) => (
            <Chip key={prompt} onClick={() => router.push("/research")}>
              {prompt}
            </Chip>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted">
          Powered by a planner–searcher–writer agent · DeepScout keeps full
          context.
        </p>
      </div>
    </AppShell>
  );
}
