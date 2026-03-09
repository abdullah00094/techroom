export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig = {
  en: {
    dir: "ltr" as const,
    lang: "en",
    label: "English",
    shortLabel: "EN",
  },
  ar: {
    dir: "rtl" as const,
    lang: "ar",
    label: "العربية",
    shortLabel: "ع",
  },
} as const;

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleDir(locale: Locale): "ltr" | "rtl" {
  return localeConfig[locale].dir;
}

export function getLocaleLang(locale: Locale): string {
  return localeConfig[locale].lang;
}

/** Build a locale-prefixed path. Use for Link href and navigation. */
export function localePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return cleanPath === "/" ? "/en" : `/en${cleanPath}`;
  }
  return cleanPath === "/" ? "/ar" : `/ar${cleanPath}`;
}

/** Get path without locale prefix for internal routing. */
export function pathWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname;
}
