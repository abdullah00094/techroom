import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTAButtons } from "@/components/cta/CTAButtons";
import type { Locale } from "@/lib/i18n";
import { contactSection as contentEn } from "@/content/en/home";
import { contactSection as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function ContactSection({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section id="contact" alt>
      <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${locale === "ar" ? "lg:grid-flow-dense" : ""}`}>
        <div className={locale === "ar" ? "lg:col-start-2" : ""}>
          <SectionHeader
            title={content.title}
            subtitle={content.subtitle}
            centered={false}
          />
          <div className="mt-6">
            <CTAButtons locale={locale} layout="column" />
          </div>
        </div>
        <div className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] sm:p-8 ${locale === "ar" ? "lg:col-start-1 lg:row-start-1" : ""}`}>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            {content.formTitle}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {content.formSubtitle}
          </p>
          <div className="mt-6">
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </Section>
  );
}
