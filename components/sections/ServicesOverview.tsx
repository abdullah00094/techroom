import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { services as servicesEn } from "@/content/en/services";
import { services as servicesAr } from "@/content/ar/services";
import { servicesOverview as contentEn } from "@/content/en/home";
import { servicesOverview as contentAr } from "@/content/ar/home";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";

const servicesByLocale = { en: servicesEn, ar: servicesAr };
const contentByLocale = { en: contentEn, ar: contentAr };
const ctaByLocale = { en: ctaEn, ar: ctaAr };

const icons: Record<string, React.ReactNode> = {
  cctv: (
    <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  business: (
    <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  network: (
    <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  support: (
    <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

type Props = { locale: Locale };

export function ServicesOverview({ locale }: Props) {
  const services = servicesByLocale[locale];
  const content = contentByLocale[locale];
  const cta = ctaByLocale[locale];

  return (
    <Section id="services" alt>
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card key={service.id} href={localePath(`/services/${service.slug}`, locale)}>
            <div className="flex flex-col h-full">
              <div className="mb-4">{icons[service.id.split("-")[0]] ?? icons.support}</div>
              <CardTitle as="h2">{service.title}</CardTitle>
              <p className="mt-2 flex-1 text-[var(--muted)]">
                {service.shortDescription}
              </p>
              <span className={`mt-4 inline-flex items-center text-sm font-medium text-[var(--accent)] ${locale === "ar" ? "flex-row-reverse" : ""}`}>
                {cta.learnMore}
                <svg className={`h-4 w-4 ${locale === "ar" ? "ml-0 mr-1 rotate-180" : "ml-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href={localePath("/services", locale)} variant="outline">
          {content.viewAllServices}
        </Button>
      </div>
    </Section>
  );
}
