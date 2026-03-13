import { CTAButtons } from "@/components/cta/CTAButtons";
import type { Locale } from "@/lib/i18n";
import { hero as heroEn } from "@/content/en/home";
import { hero as heroAr } from "@/content/ar/home";

const heroByLocale = { en: heroEn, ar: heroAr };

type Props = { locale: Locale };

export function HeroSection({ locale }: Props) {
  const hero = heroByLocale[locale];

  return (
    <section className="relative overflow-hidden bg-[var(--section-alt)] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl ${locale === "ar" ? "text-end" : ""}`}>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className={`mt-5 text-lg text-[var(--muted)] sm:text-xl leading-relaxed ${locale === "ar" ? "text-end" : ""}`}>
            {hero.subtitle}
          </p>
          <div className={`mt-8 ${locale === "ar" ? "flex justify-end" : ""}`}>
            <CTAButtons locale={locale} variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
