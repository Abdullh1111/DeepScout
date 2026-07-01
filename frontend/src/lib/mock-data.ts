import type { ReactNode } from "react";
import type { SidebarSection } from "@/components/layout";
import type { ResearchStatus, Step } from "@/components/ui";

/** Static placeholder content used to render the UI without a backend. */

export const CURRENT_USER = {
  name: "Maxx Rahman",
  email: "dev@careerbridgesolutions.com.au",
};

export const suggestionPrompts = [
  "Market sizing",
  "Literature review",
  "Competitor scan",
];

export const recentSidebar: SidebarSection[] = [
  {
    title: "Recent",
    items: [
      { label: "Visa requirements AU vs CA", href: "/report" },
      { label: "RPL market size 2026", href: "/report" },
      { label: "Competitor scan — agents", href: "/research" },
    ],
  },
];

/** Build the library sidebar; icons are passed in from a client component. */
export function librarySidebar(icons: {
  library: ReactNode;
  settings: ReactNode;
}): SidebarSection[] {
  return [
    {
      items: [
        { label: "Library", href: "/history", icon: icons.library },
        { label: "Settings", href: "/settings", icon: icons.settings },
      ],
    },
  ];
}

export interface HistoryItem {
  id: string;
  title: string;
  meta: string;
  status: ResearchStatus;
}

export const researchHistory: HistoryItem[] = [
  {
    id: "au-ca-visa",
    title: "Australia vs Canada — visa",
    meta: "18 sources · Jun 2026",
    status: "done",
  },
  {
    id: "rpl-market",
    title: "RPL market size 2026",
    meta: "11 sources · Jun 2026",
    status: "done",
  },
  {
    id: "competitor-scan",
    title: "Competitor scan — agents",
    meta: "7 sources · in progress",
    status: "researching",
  },
  {
    id: "oshc",
    title: "OSHC providers compared",
    meta: "9 sources · May 2026",
    status: "done",
  },
  {
    id: "pte-ielts",
    title: "PTE vs IELTS acceptance",
    meta: "14 sources · May 2026",
    status: "done",
  },
  {
    id: "onshore",
    title: "Onshore visa pathways",
    meta: "draft · not started",
    status: "draft",
  },
];

export const agentSteps: Step[] = [
  {
    title: "Plan",
    description: "Work out key sub-questions",
    state: "done",
  },
  {
    title: "Search web",
    description: "12 sources found, via Tavily",
    state: "done",
  },
  {
    title: "Read & summarize",
    description: "Summarizing 18 sources — vector store…",
    state: "active",
  },
  {
    title: "Reflect & grade",
    description: "Check coverage, find gaps",
    state: "pending",
  },
  {
    title: "Write report",
    description: "Synthesize draft with citations",
    state: "pending",
  },
];

export interface Source {
  domain: string;
  title: string;
}

export const reportSources: Source[] = [
  { domain: "homeaffairs.gov.au", title: "Student visa (subclass 500) — funds" },
  { domain: "canada.ca", title: "Study permit — proof of funds" },
];

export const reportTitle = "Australia vs Canada — 2026 Student Visa";

export const reportSections = [
  { id: "financial", label: "Financial requirements" },
  { id: "english", label: "English proficiency" },
  { id: "health", label: "Health & OSHC" },
  { id: "work", label: "Work rights" },
];

export const modelOptions = [
  { label: "claude-sonnet-4-6", value: "claude-sonnet-4-6" },
  { label: "claude-opus-4-8", value: "claude-opus-4-8" },
  { label: "claude-haiku-4-5", value: "claude-haiku-4-5" },
];
