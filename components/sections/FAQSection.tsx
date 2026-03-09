"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { homeFaq as faqEn } from "@/content/en/faq";
import { homeFaq as faqAr } from "@/content/ar/faq";
import { faqSection as contentEn } from "@/content/en/home";
import { faqSection as contentAr } from "@/content/ar/home";

const faqByLocale = { en: faqEn, ar: faqAr };
const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function FAQSection({ locale }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const faq = faqByLocale[locale];
  const content = contentByLocale[locale];

  return (
    <Section id="faq">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="mx-auto max-w-3xl space-y-2">
        {faq.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow)]"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={`flex w-full items-center justify-between px-5 py-4 text-left font-medium text-[var(--foreground)] hover:bg-[var(--section-alt)]/50 transition rounded-[var(--radius)] ${locale === "ar" ? "flex-row-reverse text-right" : ""}`}
                aria-expanded={isOpen}
              >
                {item.question}
                <span className={`shrink-0 text-[var(--muted)] ${locale === "ar" ? "ml-0 mr-2" : "ml-2"}`}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className={`border-t border-[var(--card-border)] px-5 py-4 text-[var(--muted)] ${locale === "ar" ? "text-right" : ""}`}>
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
