import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { smartMonitoringDashboard as contentEn } from "@/content/en/home";
import { smartMonitoringDashboard as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function SmartMonitoringSection({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section id="smart-monitoring" alt>
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className={`mx-auto max-w-3xl rounded-2xl border-2 border-dashed border-[var(--card-border)] bg-[var(--card-bg)] p-8 text-center ${locale === "ar" ? "text-end" : ""}`}>
        <p className="text-[var(--muted)] leading-relaxed">
          {content.comingSoon}
        </p>
        <p className="mt-3 text-sm font-medium text-[var(--accent)]">
          {locale === "ar" ? "قيد التطوير — قريباً" : "Under development — coming soon"}
        </p>
      </div>
    </Section>
  );
}
