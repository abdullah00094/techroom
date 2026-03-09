import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTAButtons } from "@/components/cta/CTAButtons";
import type { Locale } from "@/lib/i18n";
import { contactPage as contentEn } from "@/content/en/pages";
import { contactPage as contentAr } from "@/content/ar/pages";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "ar" ? contentAr : contentEn;
  return buildMetadata({
    locale: locale as Locale,
    title: content.title,
    description: content.subtitle,
    path: `/${locale}/contact`,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const content = contentByLocale[l];

  return (
    <Section className="pt-8 pb-16" id="contact">
      <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${l === "ar" ? "lg:grid-flow-dense" : ""}`}>
        <div className={l === "ar" ? "lg:col-start-2" : ""}>
          <SectionHeader
            title={content.title}
            subtitle={content.subtitle}
            centered={false}
          />
          <p className="mt-4 text-[var(--muted)]">
            {content.alsoReach}
          </p>
          <div className="mt-8">
            <CTAButtons locale={l} layout="column" siteVisit />
          </div>
        </div>
        <div
          id="site-visit"
          className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] sm:p-8 ${l === "ar" ? "lg:col-start-1 lg:row-start-1" : ""}`}
        >
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            {content.formTitle}
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {content.formSubtitle}
          </p>
          <div className="mt-6">
            <ContactForm locale={l} />
          </div>
        </div>
      </div>
    </Section>
  );
}
