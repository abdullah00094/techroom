import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale };

const placeholderLabel = (locale: Locale) =>
  locale === "ar" ? "لوحة المراقبة — قيد التطوير" : "Monitoring dashboard — coming soon";

export function DashboardMockupsSection({ locale }: Props) {
  return (
    <Section alt id="dashboard-mockups">
      <SectionHeader
        title={locale === "ar" ? "تصور لوحة المراقبة" : "Dashboard Preview"}
        subtitle={locale === "ar" ? "لمساعدتك على تصور النظام وزيادة المصداقية." : "To help you visualize the system and build credibility."}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          locale === "ar" ? "لوحة المراقبة" : "Monitoring dashboard",
          locale === "ar" ? "لوحة الكاميرات" : "Camera viewing panel",
          locale === "ar" ? "حالة الأجهزة" : "Device status indicators",
          locale === "ar" ? "التنبيهات" : "Alert notifications",
        ].map((label, i) => (
          <div
            key={i}
            className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-[var(--card-border)] bg-[var(--section-alt)] text-[var(--muted)] text-sm font-medium"
          >
            {label}
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-[var(--muted)]">
        {placeholderLabel(locale)}
      </p>
    </Section>
  );
}
