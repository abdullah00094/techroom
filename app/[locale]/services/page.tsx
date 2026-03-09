import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { services as servicesEn } from "@/content/en/services";
import { services as servicesAr } from "@/content/ar/services";
import { servicesPage as contentEn } from "@/content/en/pages";
import { servicesPage as contentAr } from "@/content/ar/pages";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";

const servicesByLocale = { en: servicesEn, ar: servicesAr };
const contentByLocale = { en: contentEn, ar: contentAr };
const ctaByLocale = { en: ctaEn, ar: ctaAr };

const icons: Record<string, React.ReactNode> = {
  cctv: (
    <svg className="h-10 w-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  network: (
    <svg className="h-10 w-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  support: (
    <svg className="h-10 w-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "ar" ? contentAr : contentEn;
  return buildMetadata({
    locale: locale as Locale,
    title: content.title,
    description: content.subtitle,
    path: `/${locale}/services`,
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const services = servicesByLocale[l];
  const content = contentByLocale[l];
  const cta = ctaByLocale[l];

  return (
    <>
      <Section className="pt-8">
        <SectionHeader
          title={content.title}
          subtitle={content.subtitle}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} href={localePath(`/services/${service.slug}`, l)}>
              <div className="mb-4">{icons[service.id.split("-")[0]] ?? icons.support}</div>
              <CardTitle as="h2">{service.title}</CardTitle>
              <p className="mt-2 text-[var(--muted)]">{service.shortDescription}</p>
              <span className={`mt-4 inline-flex items-center text-sm font-medium text-[var(--accent)] ${l === "ar" ? "flex-row-reverse" : ""}`}>
                {cta.learnMore}
                <svg className={`h-4 w-4 ${l === "ar" ? "ml-0 mr-1 rotate-180" : "ml-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Card>
          ))}
        </div>
      </Section>
      <Section alt>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {content.notSure}
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            {content.notSureSubtitle}
          </p>
          <Button href={localePath("/contact", l)} variant="primary" className="mt-6">
            {cta.requestConsultation}
          </Button>
        </div>
      </Section>
    </>
  );
}
