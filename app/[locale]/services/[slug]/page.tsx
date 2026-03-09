import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTAButtons } from "@/components/cta/CTAButtons";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { getServiceBySlug, services as servicesEn } from "@/content/en/services";
import { getServiceBySlug as getServiceBySlugAr, services as servicesAr } from "@/content/ar/services";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const enParams = servicesEn.map((s) => ({ locale: "en", slug: s.slug }));
  const arParams = servicesAr.map((s) => ({ locale: "ar", slug: s.slug }));
  return [...enParams, ...arParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = locale === "ar" ? getServiceBySlugAr(slug) : getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    locale: locale as Locale,
    title: service.title,
    description: service.shortDescription,
    path: `/${locale}/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const service = locale === "ar" ? getServiceBySlugAr(slug) : getServiceBySlug(slug);
  if (!service) notFound();

  const navLabel = locale === "ar" ? "الخدمات" : "Services";

  return (
    <>
      <Section className="pt-8">
        <div className={`max-w-3xl ${l === "ar" ? "text-end" : ""}`}>
          <nav className="text-sm text-[var(--muted)]">
            <Link href={localePath("/services", l)} className="hover:text-[var(--foreground)]">
              {navLabel}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">{service.title}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            {service.shortDescription}
          </p>
          <div className={`mt-6 ${l === "ar" ? "flex justify-end" : ""}`}>
            <CTAButtons locale={l} layout="row" />
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionHeader title={l === "ar" ? "نظرة عامة" : "Overview"} centered={false} />
        <p className={`max-w-3xl text-[var(--muted)] leading-relaxed ${l === "ar" ? "text-end" : ""}`}>
          {service.overview}
        </p>
      </Section>

      <Section>
        <SectionHeader
          title={l === "ar" ? "المشاكل التي نحلها" : "Problems we solve"}
          subtitle={l === "ar" ? "تحديات شائعة نساعد الشركات في معالجتها." : "Common challenges we help businesses address."}
          centered={false}
        />
        <ul className={`max-w-3xl space-y-2 ${l === "ar" ? "text-end" : ""}`}>
          {service.problemsSolved.map((item, i) => (
            <li key={i} className={`flex gap-3 ${l === "ar" ? "flex-row-reverse" : ""}`}>
              <span className="text-[var(--accent)] mt-0.5 shrink-0">✓</span>
              <span className="text-[var(--muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <SectionHeader title={l === "ar" ? "ما يتضمنه" : "What's included"} centered={false} />
        <ul className={`max-w-3xl grid sm:grid-cols-2 gap-2 ${l === "ar" ? "text-end" : ""}`}>
          {service.whatsIncluded.map((item, i) => (
            <li key={i} className={`flex gap-3 ${l === "ar" ? "flex-row-reverse" : ""}`}>
              <span className="text-[var(--accent)] shrink-0">•</span>
              <span className="text-[var(--muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          title={l === "ar" ? "مناسب لـ" : "Suitable for"}
          subtitle={l === "ar" ? "أنواع الشركات التي نعمل معها عادةً لهذه الخدمة." : "Business types we typically work with for this service."}
          centered={false}
        />
        <p className={`max-w-3xl text-[var(--muted)] ${l === "ar" ? "text-end" : ""}`}>
          {service.suitableFor.join(", ")}.
        </p>
      </Section>

      <Section alt>
        <SectionHeader title={l === "ar" ? "عملنا" : "Our process"} centered={false} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step) => (
            <div
              key={step.step}
              className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 ${l === "ar" ? "text-end" : ""}`}
            >
              <span className="text-sm font-semibold text-[var(--accent)]">
                {l === "ar" ? `الخطوة ${step.step}` : `Step ${step.step}`}
              </span>
              <h3 className="mt-2 font-semibold text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="FAQ" centered={false} />
        <dl className={`max-w-3xl space-y-4 ${l === "ar" ? "text-end" : ""}`}>
          {service.faq.map((item, i) => (
            <div key={i} className="rounded-[var(--radius)] border border-[var(--card-border)] p-4">
              <dt className="font-medium text-[var(--foreground)]">
                {item.q}
              </dt>
              <dd className="mt-2 text-[var(--muted)]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section alt>
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {l === "ar" ? "مستعد للبدء؟" : "Ready to get started?"}
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            {l === "ar" ? "اطلب استشارة مجانية أو زيارة موقع. سنستجيب بسرعة." : "Request a free consultation or site visit. We'll respond quickly."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CTAButtons locale={l} layout="row" />
          </div>
        </div>
      </Section>
    </>
  );
}
