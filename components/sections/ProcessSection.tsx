import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { processSection as contentEn } from "@/content/en/home";
import { processSection as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function ProcessSection({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section alt id="process">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="grid gap-8 sm:grid-cols-3">
        {content.steps.map((step) => (
          <div key={step.number} className={`relative text-center ${locale === "ar" ? "" : ""}`}>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-white">
              {step.number}
            </div>
            <h3 className="mt-4 font-semibold text-[var(--foreground)]">{step.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
