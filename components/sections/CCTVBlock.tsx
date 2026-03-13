import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { cctvSection as contentEn } from "@/content/en/home";
import { cctvSection as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function CCTVBlock({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section id="cctv" alt>
      <SectionHeader title={content.title} subtitle={content.subtitle} />
      <ul
        className={
          "mx-auto max-w-2xl grid sm:grid-cols-2 gap-3 " +
          (locale === "ar" ? "text-end" : "")
        }
      >
        {content.items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 items-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 shadow-[var(--shadow)]"
          >
            <span className="text-[var(--accent)] shrink-0" aria-hidden>
              ✓
            </span>
            <span className="text-[var(--foreground)] font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
