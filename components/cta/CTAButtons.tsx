import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { whatsappNumber, whatsappMessage } from "@/content/en/navigation";
import { whatsappMessage as whatsappMessageAr } from "@/content/ar/navigation";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";

const ctaByLocale = { en: ctaEn, ar: ctaAr };

const waUrl = (locale: Locale) => {
  const msg = locale === "ar" ? whatsappMessageAr : whatsappMessage;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

interface CTAButtonsProps {
  locale: Locale;
  /** Hero style: Request Service + Book Site Visit (primary), WhatsApp (secondary) */
  variant?: "default" | "hero";
  primary?: boolean;
  whatsapp?: boolean;
  siteVisit?: boolean;
  layout?: "row" | "column";
  className?: string;
}

export function CTAButtons({
  locale,
  variant = "default",
  primary = true,
  whatsapp = true,
  siteVisit = false,
  layout = "row",
  className = "",
}: CTAButtonsProps) {
  const cta = ctaByLocale[locale];
  const flex =
    layout === "column"
      ? "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      : "flex flex-wrap gap-3";

  if (variant === "hero") {
    return (
      <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 ${className}`.trim()}>
        <div className="flex flex-wrap gap-3">
          <Button href={localePath("/contact", locale)} variant="primary">
            {cta.requestService}
          </Button>
          <Button href={localePath("/contact", locale) + "#site-visit"} variant="primary">
            {cta.bookSiteVisit}
          </Button>
        </div>
        <Button href={waUrl(locale)} external variant="outline">
          {cta.contactWhatsApp}
        </Button>
      </div>
    );
  }

  return (
    <div className={`${flex} ${className}`.trim()}>
      {primary && (
        <Button href={localePath("/contact", locale)} variant="primary">
          {cta.requestConsultation}
        </Button>
      )}
      {whatsapp && (
        <Button href={waUrl(locale)} external variant="outline">
          {cta.contactWhatsApp}
        </Button>
      )}
      {siteVisit && (
        <Button href={localePath("/contact", locale) + "#site-visit"} variant="outline">
          {cta.requestSiteVisit}
        </Button>
      )}
    </div>
  );
}
