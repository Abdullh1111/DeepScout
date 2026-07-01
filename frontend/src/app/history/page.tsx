import { Input, ResearchCard } from "@/components/ui";
import { AppShell } from "@/components/layout";
import { BookIcon, SearchIcon, SettingsIcon } from "@/components/icons";
import {
  CURRENT_USER,
  librarySidebar,
  researchHistory,
} from "@/lib/mock-data";

export default function HistoryPage() {
  const sidebar = librarySidebar({
    library: <BookIcon className="size-4" />,
    settings: <SettingsIcon className="size-4" />,
  });

  return (
    <AppShell sidebar={sidebar} topNav={{ userName: CURRENT_USER.name }}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Research history
          </h1>
          <div className="w-full sm:w-72">
            <Input
              type="search"
              placeholder="Search history…"
              leftAddon={<SearchIcon className="size-4" />}
              aria-label="Search history"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {researchHistory.map((item) => (
            <ResearchCard
              key={item.id}
              title={item.title}
              meta={item.meta}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
