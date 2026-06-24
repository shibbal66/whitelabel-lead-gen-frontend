import { Link } from "react-router-dom";
import { Logo } from "@/components/logo";
import { LegalLinks } from "@/components/legal/legal-links";
import { brandingConfig } from "@/config/branding";
import type { ReactNode } from "react";

export function AuthLayout({
  children,
  headline,
  subheadline,
}: {
  children: ReactNode;
  headline: string;
  subheadline: string;
}) {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-visible lg:flex lg:flex-col lg:justify-between"
           style={{ background: "hsl(var(--background))" }}>
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative z-10 p-10">
          <Link
            to="/"
            className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${brandingConfig.brand.appName} home`}
          >
            <Logo size="lg" />
          </Link>
        </div>
        <div className="relative z-10 max-w-lg p-10">
          <p className="font-display text-4xl font-bold leading-tight break-words text-foreground">
            {headline}
          </p>
          <p className="mt-4 break-words text-base leading-relaxed text-muted-foreground">{subheadline}</p>
          <div className="mt-10 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {brandingConfig.homePage.stats.map((s) => (
              <div key={s.label} className="flex min-h-full flex-col rounded-xl border border-border/60 bg-surface/40 p-4 backdrop-blur-sm">
                <div className="font-display text-2xl font-bold text-brand-text">{s.value}</div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 space-y-3 p-10 text-xs text-muted-foreground">
          <LegalLinks />
          <p>© {new Date().getFullYear()} {brandingConfig.brand.companyName} · {brandingConfig.brand.address}</p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex min-h-screen items-center justify-center bg-background p-6 lg:p-10">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center lg:hidden">
            <Link
              to="/"
              className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`${brandingConfig.brand.appName} home`}
            >
              <Logo size="md" />
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

