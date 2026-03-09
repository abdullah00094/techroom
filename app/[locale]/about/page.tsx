import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTAButtons } from "@/components/cta/CTAButtons";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { aboutPage as contentEn } from "@/content/en/pages";
import { aboutPage as contentAr } from "@/content/ar/pages";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";

const contentByLocale = { en: contentEn, ar: contentAr };
const ctaByLocale = { en: ctaEn, ar: ctaAr };

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "ar" ? contentAr : contentEn;
  return buildMetadata({
    locale: locale as Locale,
    title: content.title,
    description: content.intro1,
    path: `/${locale}/about`,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const content = contentByLocale[l];
  const cta = ctaByLocale[l];

  return (
    <>
      <Section className="pt-8">
        <div className={`max-w-3xl ${l === "ar" ? "text-end" : ""}`}>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
            {content.intro1}
          </p>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            {content.intro2}
          </p>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            {content.intro3}
          </p>
          <div className={`mt-8 ${l === "ar" ? "flex justify-end" : ""}`}>
            <CTAButtons locale={l} layout="row" />
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionHeader
          title={content.valuesTitle}
          subtitle={content.valuesSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 ${l === "ar" ? "text-end" : ""}`}>
            <h3 className="font-semibold text-[var(--foreground)]">{content.reliability}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {content.reliabilityDesc}
            </p>
          </div>
          <div className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 ${l === "ar" ? "text-end" : ""}`}>
            <h3 className="font-semibold text-[var(--foreground)]">{content.clarity}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {content.clarityDesc}
            </p>
          </div>
          <div className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 sm:col-span-2 lg:col-span-1 ${l === "ar" ? "text-end" : ""}`}>
            <h3 className="font-semibold text-[var(--foreground)]">{content.partnership}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {content.partnershipDesc}
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {content.letsTalk}
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            {content.letsTalkSubtitle}
          </p>
          <Button href={localePath("/contact", l)} variant="primary" className="mt-6">
            {cta.requestConsultation}
          </Button>
        </div>
      </Section>
    </>
  );
}
