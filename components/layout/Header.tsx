"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { navLinks } from "@/content/en/navigation";
import { navLinks as navLinksAr } from "@/content/ar/navigation";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const navByLocale = { en: navLinks, ar: navLinksAr };

type Props = { locale: Locale };

export function Header({ locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const links = navByLocale[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-[var(--card-border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80 transition-shadow duration-200 ${scrolled ? "shadow-[var(--shadow)]" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link
          href={localePath("/", locale)}
          className="text-xl font-bold tracking-tight text-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
        >
          TechRoom
        </Link>

        <nav
          className="hidden lg:flex lg:items-center lg:gap-8"
          aria-label="Main navigation"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={localePath(href, locale)}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded px-1"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} className="hidden sm:inline-flex" />
          <Button
            href={localePath("/contact", locale)}
            variant="primary"
            className="hidden sm:inline-flex text-sm py-2.5 px-4"
          >
            {locale === "ar" ? "طلب استشارة مجانية" : "Request Free Consultation"}
          </Button>
          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
}
