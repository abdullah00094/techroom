import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { localePath } from "@/lib/i18n";
import { whatsappNumber, whatsappMessage, contactEmail, contactPhone } from "@/content/en/navigation";
import { whatsappMessage as whatsappMessageAr } from "@/content/ar/navigation";
import type { Locale } from "@/lib/i18n";
import { contactSection as contentEn } from "@/content/en/home";
import { contactSection as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function ContactSection({ locale }: Props) {
  const content = contentByLocale[locale];
  const waMsg = locale === "ar" ? whatsappMessageAr : whatsappMessage;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

  return (
    <Section id="contact" alt>
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
        centered={true}
      />
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            {content.contactMethods}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-4 sm:gap-6">
            <li>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition font-medium"
              >
                <span className="text-[#25D366]">WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition font-medium"
              >
                {content.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition font-medium"
              >
                {content.phone}
              </a>
            </li>
            <li>
              <Link
                href={localePath("/contact", locale) + "#site-visit"}
                className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition font-medium"
              >
                {content.bookSiteVisit}
              </Link>
            </li>
          </ul>
        </div>

        <div
          id="site-visit"
          className="rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] sm:p-8"
        >
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            {content.formTitle}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {content.formSubtitle}
          </p>
          <div className="mt-6">
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </Section>
  );
}
