import { createContext, useContext, useEffect, useState } from "react";
import { brandingConfig } from "@/config/branding";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyBrandingColors(theme: Theme) {
  const root = document.documentElement;
  const colors = brandingConfig.theme[theme];

  root.style.setProperty("--primary", colors.primary);
  root.style.setProperty("--primary-foreground", colors.primaryForeground);
  root.style.setProperty("--primary-hover", colors.primaryHover);
  root.style.setProperty("--primary-glow", colors.primaryGlow);
  root.style.setProperty("--brand-deep", colors.brandDeep);
  root.style.setProperty("--brand-text", colors.brandText);
  root.style.setProperty("--secondary", colors.secondary);
  root.style.setProperty("--secondary-foreground", colors.secondaryForeground);
  root.style.setProperty("--muted", colors.muted);
  root.style.setProperty("--muted-foreground", colors.mutedForeground);
  root.style.setProperty("--border", colors.border);
  root.style.setProperty("--input", colors.input);
  root.style.setProperty("--ring", colors.ring);

  root.style.setProperty("--sidebar-background", colors.sidebarBackground);
  root.style.setProperty("--sidebar-foreground", colors.sidebarForeground);
  root.style.setProperty("--sidebar-primary", colors.sidebarPrimary);
  root.style.setProperty("--sidebar-primary-foreground", colors.sidebarPrimaryForeground);
  root.style.setProperty("--sidebar-accent", colors.sidebarAccent);
  root.style.setProperty("--sidebar-accent-foreground", colors.sidebarAccentForeground);
  root.style.setProperty("--sidebar-border", colors.sidebarBorder);
  root.style.setProperty("--sidebar-ring", colors.sidebarRing);
  root.style.setProperty("--dot-color", colors.dotColor);

  // Set brand/mesh gradients
  root.style.setProperty(
    "--gradient-brand",
    `linear-gradient(180deg, hsl(${colors.primary}), hsl(${colors.brandDeep}))`
  );
  root.style.setProperty(
    "--gradient-mesh",
    `radial-gradient(at 20% 20%, hsl(${colors.primary} / 0.35), transparent 50%), radial-gradient(at 80% 30%, hsl(${colors.brandDeep} / 0.45), transparent 55%), radial-gradient(at 50% 80%, hsl(${colors.brandText} / 0.30), transparent 60%)`
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("rapidai-theme") as Theme | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    applyBrandingColors(theme);
    localStorage.setItem("rapidai-theme", theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggle = () => setThemeState((t) => (t === "dark" ? "light" : "dark"));

  return <ThemeContext.Provider value={{ theme, toggle, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

