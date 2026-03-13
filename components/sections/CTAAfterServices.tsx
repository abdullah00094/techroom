import { Section } from "@/components/ui/Section";
import { CTAButtons } from "@/components/cta/CTAButtons";
import type { Locale } from "@/lib/i18n";
import { ctaAfterServices as contentEn } from "@/content/en/home";
import { ctaAfterServices as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function CTAAfterServices({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section alt id="cta-after-services">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">
          {content.title}
        </h2>
        <p className="mt-3 text-[var(--muted)]">
          {content.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CTAButtons locale={locale} variant="hero" />
        </div>
      </div>
    </Section>
  );
}
