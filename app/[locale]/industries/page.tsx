import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { industries as industriesEn } from "@/content/en/industries";
import { industries as industriesAr } from "@/content/ar/industries";
import { industriesPage as contentEn } from "@/content/en/pages";
import { industriesPage as contentAr } from "@/content/ar/pages";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";

const industriesByLocale = { en: industriesEn, ar: industriesAr };
const contentByLocale = { en: contentEn, ar: contentAr };
const ctaByLocale = { en: ctaEn, ar: ctaAr };

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "ar" ? contentAr : contentEn;
  return buildMetadata({
    locale: locale as Locale,
    title: content.title,
    description: content.subtitle,
    path: `/${locale}/industries`,
  });
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const industries = industriesByLocale[l];
  const content = contentByLocale[l];
  const cta = ctaByLocale[l];

  return (
    <>
      <Section className="pt-8">
        <SectionHeader
          title={content.title}
          subtitle={content.subtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              href={localePath(`/industries/${ind.slug}`, l)}
              className="group rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)] hover:border-[var(--accent)]/30"
            >
              <h2 className={`text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition ${l === "ar" ? "text-end" : ""}`}>
                {ind.title}
              </h2>
              <p className={`mt-2 text-[var(--muted)] ${l === "ar" ? "text-end" : ""}`}>
                {ind.shortDescription}
              </p>
              <span className={`mt-4 inline-block text-sm font-medium text-[var(--accent)] ${l === "ar" ? "flex flex-row-reverse" : ""}`}>
                {content.seeHowWeHelp} →
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <Section alt>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {content.notListed}
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            {content.notListedSubtitle}
          </p>
          <Button href={localePath("/contact", l)} variant="primary" className="mt-6">
            {cta.requestConsultation}
          </Button>
        </div>
      </Section>
    </>
  );
}
