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
  primary?: boolean;
  whatsapp?: boolean;
  siteVisit?: boolean;
  layout?: "row" | "column";
  className?: string;
}

export function CTAButtons({
  locale,
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
