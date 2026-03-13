import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { technologyPartners as contentEn } from "@/content/en/home";
import { technologyPartners as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function TechnologyPartnersSection({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section id="partners">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {content.partners.map((name) => (
          <div
            key={name}
            className="flex h-14 min-w-[120px] items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 font-semibold text-[var(--muted)] shadow-[var(--shadow)]"
          >
            {name}
          </div>
        ))}
      </div>
    </Section>
  );
}
