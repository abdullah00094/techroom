import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTAButtons } from "@/components/cta/CTAButtons";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getIndustryBySlug, industries as industriesEn } from "@/content/en/industries";
import { getIndustryBySlug as getIndustryBySlugAr, industries as industriesAr } from "@/content/ar/industries";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const enParams = industriesEn.map((i) => ({ locale: "en", slug: i.slug }));
  const arParams = industriesAr.map((i) => ({ locale: "ar", slug: i.slug }));
  return [...enParams, ...arParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const industry = locale === "ar" ? getIndustryBySlugAr(slug) : getIndustryBySlug(slug);
  if (!industry) return {};
  return buildMetadata({
    locale: locale as Locale,
    title: industry.title,
    description: industry.shortDescription,
    path: `/${locale}/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const industry = locale === "ar" ? getIndustryBySlugAr(slug) : getIndustryBySlug(slug);
  if (!industry) notFound();

  const navLabel = l === "ar" ? "القطاعات" : "Industries";

  return (
    <>
      <Section className="pt-8">
        <div className={`max-w-3xl ${l === "ar" ? "text-end" : ""}`}>
          <nav className="text-sm text-[var(--muted)]">
            <Link href={localePath("/industries", l)} className="hover:text-[var(--foreground)]">
              {navLabel}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">{industry.title}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {industry.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            {industry.description}
          </p>
          <div className={`mt-6 ${l === "ar" ? "flex justify-end" : ""}`}>
            <CTAButtons locale={l} layout="row" />
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionHeader
          title={l === "ar" ? "التحديات الشائعة" : "Typical challenges"}
          subtitle={l === "ar" ? "نقاط ألم شائعة نساعد الشركات في هذا القطاع على معالجتها." : "Common pain points we help businesses in this sector address."}
          centered={false}
        />
        <ul className={`max-w-3xl space-y-2 ${l === "ar" ? "text-end" : ""}`}>
          {industry.painPoints.map((item, i) => (
            <li key={i} className={`flex gap-3 ${l === "ar" ? "flex-row-reverse" : ""}`}>
              <span className="text-[var(--accent)] mt-0.5 shrink-0">•</span>
              <span className="text-[var(--muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          title={l === "ar" ? "كيف نساعد" : "How we help"}
          subtitle={l === "ar" ? "حلول نقدمها للشركات في هذا القطاع." : "Solutions we provide for businesses in this industry."}
          centered={false}
        />
        <ul className={`max-w-3xl space-y-2 ${l === "ar" ? "text-end" : ""}`}>
          {industry.solutions.map((item, i) => (
            <li key={i} className={`flex gap-3 ${l === "ar" ? "flex-row-reverse" : ""}`}>
              <span className="text-[var(--accent)] mt-0.5 shrink-0">✓</span>
              <span className="text-[var(--muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <div className={`max-w-3xl rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 ${l === "ar" ? "text-end" : ""}`}>
          <p className="text-[var(--foreground)] font-medium">
            {industry.highlight}
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {l === "ar" ? "مستعد لمناقشة احتياجاتك؟" : "Ready to discuss your needs?"}
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            {l === "ar" ? "اطلب استشارة مجانية أو زيارة موقع. سنعد عرضاً مخصصاً لشركتك." : "Request a free consultation or site visit. We'll tailor a proposal for your business."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CTAButtons locale={l} layout="row" />
          </div>
        </div>
      </Section>
    </>
  );
}
