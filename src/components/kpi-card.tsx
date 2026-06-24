import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  hint?: string;
  delta?: { value: string; up?: boolean };
  icon?: LucideIcon;
  accent?: React.ReactNode;
  className?: string;
}

export function KPICard({ label, value, hint, delta, icon: Icon, accent, className }: KPICardProps) {
  return (
    <Card className={cn("relative overflow-hidden p-5 shadow-card flex flex-col", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
          {hint ? (
            <p className="text-[10px] font-normal normal-case tracking-normal text-muted-foreground/90">
              {hint}
            </p>
          ) : null}
          <p
            className={cn(
              "font-display font-bold leading-none break-words",
              value.length > 8 ? "text-xl" : value.length > 5 ? "text-2xl" : "text-3xl",
            )}
          >
            {value}
          </p>
          {delta && (
            <p
              className={cn(
                "mt-2 inline-flex items-center gap-1 text-xs font-semibold",
                delta.up ? "text-success" : "text-destructive",
              )}
            >
              {delta.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {delta.value}
            </p>
          )}
        </div>
        {Icon && (
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
            <Icon className="h-4 w-4" />
          </div>
        )}
        {accent}
      </div>
    </Card>
  );
}
