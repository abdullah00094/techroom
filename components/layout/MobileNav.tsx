"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { navLinks } from "@/content/en/navigation";
import { navLinks as navLinksAr } from "@/content/ar/navigation";
import { whatsappNumber, whatsappMessage } from "@/content/en/navigation";
import { whatsappMessage as whatsappMessageAr } from "@/content/ar/navigation";
import { Button } from "@/components/ui/Button";

const navByLocale = { en: navLinks, ar: navLinksAr };

type Props = { locale: Locale };

export function MobileNav({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const links = navByLocale[locale];
  const waMsg = locale === "ar" ? whatsappMessageAr : whatsappMessage;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--foreground)] hover:bg-[var(--section-alt)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        aria-expanded={open}
        aria-label={locale === "ar" ? "فتح القائمة" : "Toggle menu"}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <nav
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col gap-1 border-l border-[var(--card-border)] bg-[var(--background)] p-6 pt-20 shadow-xl lg:hidden rtl:right-auto rtl:left-0 rtl:border-l-0 rtl:border-r"
            aria-label={locale === "ar" ? "القائمة الرئيسية" : "Mobile navigation"}
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={localePath(href, locale)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-[var(--foreground)] hover:bg-[var(--section-alt)] text-start"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-[var(--card-border)] pt-4">
              <Button href={localePath("/contact", locale)} variant="primary" className="w-full justify-center">
                {locale === "ar" ? "طلب استشارة مجانية" : "Request Free Consultation"}
              </Button>
              <Button href={waUrl} external variant="outline" className="w-full justify-center">
                {locale === "ar" ? "تواصل عبر واتساب" : "Contact on WhatsApp"}
              </Button>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
