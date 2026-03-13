import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { whatsappNumber, whatsappMessage, contactEmail, contactPhone } from "@/content/en/navigation";
import { whatsappMessage as whatsappMessageAr } from "@/content/ar/navigation";
import { contactPage as contentEn } from "@/content/en/pages";
import { contactPage as contentAr } from "@/content/ar/pages";
import { contactSection as sectionEn } from "@/content/en/home";
import { contactSection as sectionAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };
const sectionByLocale = { en: sectionEn, ar: sectionAr };

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "ar" ? contentAr : contentEn;
  return buildMetadata({
    locale: locale as Locale,
    title: content.title,
    description: content.subtitle,
    path: `/${locale}/contact`,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const content = contentByLocale[l];
  const section = sectionByLocale[l];
  const waMsg = l === "ar" ? whatsappMessageAr : whatsappMessage;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

  return (
    <Section className="pt-8 pb-16" id="contact">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
        centered={true}
      />
      <div className="mb-10 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)]">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {section.contactMethods}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-4 sm:gap-6">
          <li>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition font-medium">
              <span className="text-[#25D366]">{section.whatsApp}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition font-medium">
              {section.email}
            </a>
          </li>
          <li>
            <a href={`tel:${contactPhone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition font-medium">
              {section.phone}
            </a>
          </li>
          <li>
            <Link href={localePath("/contact", l) + "#site-visit"} className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition font-medium">
              {section.bookSiteVisit}
            </Link>
          </li>
        </ul>
      </div>
      <div id="site-visit" className="rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] sm:p-8 max-w-2xl">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          {content.formTitle}
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          {content.formSubtitle}
        </p>
        <div className="mt-6">
          <ContactForm locale={l} />
        </div>
      </div>
    </Section>
  );
}
