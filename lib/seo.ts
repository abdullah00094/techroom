import type { Metadata } from "next";
import type { Locale } from "./i18n";

const siteName = "TechRoom";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techroom-eg.com";

const defaultDescriptions: Record<Locale, string> = {
  en:
    "TechRoom – IT Infrastructure & Security Solutions in Alexandria, Egypt. CCTV, network setup, and IT support for businesses. Request a free consultation.",
  ar:
    "تيك روم – حلول بنية تحتية تقنية وأمنية في الإسكندرية، مصر. كاميرات مراقبة، إعداد شبكات، ودعم فني للشركات. اطلب استشارة مجانية.",
};

export interface SeoOptions {
  locale: Locale;
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
  noIndex = false,
  image,
}: SeoOptions): Metadata {
  const desc = description ?? defaultDescriptions[locale];
  const fullTitle = title
    ? `${title} | ${siteName}`
    : locale === "ar"
      ? `${siteName} – حلول بنية تحتية تقنية وأمنية`
      : `${siteName} – IT Infrastructure & Security Solutions`;
  const url = path
    ? `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`
    : baseUrl;
  const ogImage = image ?? `${baseUrl}/og-default.png`;
  const ogLocale = locale === "ar" ? "ar_EG" : "en_EG";

  const pathWithoutLocale = path ? path.replace(/^\/(en|ar)\/?/, "") : "";
  const alternates: Metadata["alternates"] = path
    ? {
        canonical: url,
        languages: {
          en: pathWithoutLocale ? `${baseUrl}/en/${pathWithoutLocale}` : `${baseUrl}/en`,
          ar: pathWithoutLocale ? `${baseUrl}/ar/${pathWithoutLocale}` : `${baseUrl}/ar`,
        },
      }
    : undefined;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    alternates,
  };
}
