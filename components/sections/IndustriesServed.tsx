import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { industries as industriesEn } from "@/content/en/industries";
import { industries as industriesAr } from "@/content/ar/industries";
import { industriesServed as contentEn } from "@/content/en/home";
import { industriesServed as contentAr } from "@/content/ar/home";

const industriesByLocale = { en: industriesEn, ar: industriesAr };
const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function IndustriesServed({ locale }: Props) {
  const industries = industriesByLocale[locale];
  const content = contentByLocale[locale];

  return (
    <Section id="industries">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <Link
            key={ind.id}
            href={localePath(`/industries/${ind.slug}`, locale)}
            className="group rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)] hover:border-[var(--accent)]/30"
          >
            <h3 className={`font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition ${locale === "ar" ? "text-end" : ""}`}>
              {ind.title}
            </h3>
            <p className={`mt-1 text-sm text-[var(--muted)] line-clamp-2 ${locale === "ar" ? "text-end" : ""}`}>
              {ind.shortDescription}
            </p>
            <span className={`mt-2 inline-block text-sm font-medium text-[var(--accent)] ${locale === "ar" ? "flex flex-row-reverse" : ""}`}>
              {content.seeHowWeHelp} →
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href={localePath("/industries", locale)}
          className="text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          {content.viewAllIndustries}
        </Link>
      </div>
    </Section>
  );
}
