import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { howItWorks as contentEn } from "@/content/en/home";
import { howItWorks as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function HowItWorksSection({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section alt id="how-it-works">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-white shadow-[var(--shadow-md)]">
                  {step.number}
                </div>
                <h3 className="mt-4 font-semibold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
              {i < content.steps.length - 1 && (
                <div
                  className="absolute top-7 left-[60%] hidden h-0.5 w-[80%] max-w-[120px] bg-[var(--card-border)] lg:block rtl:left-auto rtl:right-[60%]"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
