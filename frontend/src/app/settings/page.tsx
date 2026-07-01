"use client";

import { useState } from "react";
import { Button, Card, Input, Segmented, Select } from "@/components/ui";
import { AppShell } from "@/components/layout";
import {
  BookIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "@/components/icons";
import { CURRENT_USER, librarySidebar, modelOptions } from "@/lib/mock-data";

type Theme = "dark" | "light";

export default function SettingsPage() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [model, setModel] = useState(modelOptions[0].value);

  const sidebar = librarySidebar({
    library: <BookIcon className="size-4" />,
    settings: <SettingsIcon className="size-4" />,
  });

  return (
    <AppShell sidebar={sidebar} topNav={{ userName: CURRENT_USER.name }}>
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Settings
        </h1>

        <div className="mt-6 flex flex-col gap-5">
          {/* Account */}
          <Card className="p-6">
            <h2 className="text-sm font-semibold text-foreground">Account</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input label="Name" defaultValue={CURRENT_USER.name} />
              <Input
                label="Email"
                type="email"
                defaultValue={CURRENT_USER.email}
              />
            </div>
          </Card>

          {/* Model */}
          <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-foreground">Model</h2>
              <p className="mt-0.5 text-xs text-muted">
                LLM used for planning &amp; writing
              </p>
            </div>
            <div className="w-full sm:w-64">
              <Select
                options={modelOptions}
                value={model}
                onChange={(e) => setModel(e.target.value)}
                aria-label="Model"
              />
            </div>
          </Card>

          {/* Web search */}
          <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Web search
              </h2>
              <p className="mt-0.5 text-xs text-muted">Tavily API key</p>
            </div>
            <div className="w-full sm:w-72">
              <Input
                type="password"
                defaultValue="tvly-xxxxxxxxxxxx3f9a"
                aria-label="Tavily API key"
              />
            </div>
          </Card>

          {/* Appearance */}
          <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Appearance
              </h2>
              <p className="mt-0.5 text-xs text-muted">Theme</p>
            </div>
            <Segmented<Theme>
              aria-label="Theme"
              value={theme}
              onChange={setTheme}
              options={[
                {
                  label: "Dark",
                  value: "dark",
                  icon: <MoonIcon className="size-3.5" />,
                },
                {
                  label: "Light",
                  value: "light",
                  icon: <SunIcon className="size-3.5" />,
                },
              ]}
            />
          </Card>

          <div className="flex justify-end">
            <Button>Save changes</Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
