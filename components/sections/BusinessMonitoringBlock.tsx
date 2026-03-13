import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { businessMonitoringSection as contentEn } from "@/content/en/home";
import { businessMonitoringSection as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function BusinessMonitoringBlock({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section id="business-monitoring">
      <SectionHeader title={content.title} subtitle={content.subtitle} />
      <p
        className={
          "mx-auto max-w-3xl text-lg text-[var(--muted)] leading-relaxed text-center " +
          (locale === "ar" ? "text-end" : "")
        }
      >
        {content.subtitle}
      </p>
    </Section>
  );
}
