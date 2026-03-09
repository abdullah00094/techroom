"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeConfig, type Locale } from "@/lib/i18n";

function getLocalizedPath(pathname: string, newLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0];
  const isLocale = ["en", "ar"].includes(currentLocale);
  const pathWithoutLocale = isLocale ? segments.slice(1).join("/") : pathname.slice(1);
  const basePath = pathWithoutLocale ? `/${pathWithoutLocale}` : "";
  return `/${newLocale}${basePath}`;
}

type Props = {
  locale: Locale;
  variant?: "compact" | "full";
  className?: string;
};

export function LanguageSwitcher({
  locale,
  variant = "compact",
  className = "",
}: Props) {
  const pathname = usePathname();
  const otherLocale = locales.find((l) => l !== locale) as Locale;
  const href = getLocalizedPath(pathname, otherLocale);
  const config = localeConfig[otherLocale];

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--section-alt)] hover:text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${className}`}
      aria-label={`Switch to ${config.label}`}
      prefetch
    >
      <span aria-hidden>{variant === "full" ? config.label : config.shortLabel}</span>
    </Link>
  );
}
