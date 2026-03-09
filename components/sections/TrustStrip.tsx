import type { Locale } from "@/lib/i18n";
import { trustStrip as trustEn } from "@/content/en/home";
import { trustStrip as trustAr } from "@/content/ar/home";

const trustByLocale = { en: trustEn, ar: trustAr };

type Props = { locale: Locale };

export function TrustStrip({ locale }: Props) {
  const { items } = trustByLocale[locale];

  return (
    <section className="border-y border-[var(--card-border)] bg-[var(--background)] py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[var(--muted)] sm:text-base ${locale === "ar" ? "sm:flex-row-reverse sm:justify-between" : "justify-center sm:justify-between"}`}>
          {items.map((text, i) => (
            <span key={i} className="font-medium">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
