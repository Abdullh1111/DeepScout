import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui";
import { LogoMark } from "@/components/icons";

export interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Rendered under the card, e.g. "No account? Sign up". */
  footer?: ReactNode;
}

/** Centered card layout shared by Sign in / Sign up. */
export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: AuthLayoutProps) {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md">
        <Card>
          <CardContent className="px-8 py-10">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="mb-4">
                <LogoMark className="size-9" />
              </span>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                {title}
              </h1>
              {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
            </div>
            {children}
          </CardContent>
        </Card>
        {footer && (
          <p className="mt-6 text-center text-sm text-muted">{footer}</p>
        )}
      </div>
    </main>
  );
}
