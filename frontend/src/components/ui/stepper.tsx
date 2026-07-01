import { cn } from "@/lib/cn";
import { CheckIcon } from "@/components/icons";

export type StepState = "done" | "active" | "pending";

export interface Step {
  title: string;
  description?: string;
  state: StepState;
}

export interface StepperProps {
  steps: Step[];
  className?: string;
}

/** Vertical stepper for the research agent run (Plan → Search → … → Write). */
export function Stepper({ steps, className }: StepperProps) {
  return (
    <ol className={cn("flex flex-col", className)}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li key={step.title} className="flex gap-3">
            <div className="flex flex-col items-center">
              <StepMarker state={step.state} />
              {!isLast && (
                <span
                  className={cn(
                    "w-px flex-1",
                    step.state === "done" ? "bg-violet/50" : "bg-border",
                  )}
                />
              )}
            </div>
            <div className={cn("pb-6", isLast && "pb-0")}>
              <p
                className={cn(
                  "text-sm font-medium",
                  step.state === "pending"
                    ? "text-muted"
                    : "text-foreground",
                )}
              >
                {step.title}
              </p>
              {step.description && (
                <p className="mt-0.5 text-xs text-muted">{step.description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function StepMarker({ state }: { state: StepState }) {
  if (state === "done") {
    return (
      <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
        <CheckIcon className="size-3.5" />
      </span>
    );
  }
  if (state === "active") {
    return (
      <span className="flex size-6 items-center justify-center rounded-full bg-violet/20 ring-4 ring-violet/10">
        <span className="size-2.5 animate-pulse rounded-full bg-violet" />
      </span>
    );
  }
  return (
    <span className="flex size-6 items-center justify-center rounded-full border border-border">
      <span className="size-2 rounded-full bg-border-strong" />
    </span>
  );
}
