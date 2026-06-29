import { cn } from "@/lib/utils";
import { brandingConfig } from "@/config/branding";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { mark: "h-7 w-7", text: "text-sm tracking-tight" },
  md: { mark: "h-8 w-8", text: "text-xs tracking-tight leading-tight" },
  lg: { mark: "h-14 w-14", text: "text-base tracking-tight" },
};

export function Logo({ className, showWordmark = true, size = "md" }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <img
        src={brandingConfig.brand.logoSrc}
        alt={brandingConfig.brand.appName}
        className={cn("rounded-lg object-cover shadow-card", s.mark)}
      />
      {showWordmark && (
        <span className={cn("min-w-0 truncate font-display font-bold uppercase text-foreground", s.text)}>
          {brandingConfig.brand.wordmarkFirst}
          <span className="text-brand-text">{brandingConfig.brand.wordmarkSecond}</span>
        </span>
      )}
    </div>
  );
}