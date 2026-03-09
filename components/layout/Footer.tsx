import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { navLinks } from "@/content/en/navigation";
import { navLinks as navLinksAr } from "@/content/ar/navigation";
import { whatsappNumber, whatsappMessage } from "@/content/en/navigation";
import { whatsappMessage as whatsappMessageAr } from "@/content/ar/navigation";
import { footer as footerEn } from "@/content/en/footer";
import { footer as footerAr } from "@/content/ar/footer";

const currentYear = new Date().getFullYear();
const navByLocale = { en: navLinks, ar: navLinksAr };
const footerByLocale = { en: footerEn, ar: footerAr };

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  const links = navByLocale[locale];
  const footer = footerByLocale[locale];
  const waMsg = locale === "ar" ? whatsappMessageAr : whatsappMessage;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--section-alt)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href={localePath("/", locale)}
              className="text-xl font-bold tracking-tight text-[var(--primary)]"
            >
              TechRoom
            </Link>
            <p className="mt-3 text-sm text-[var(--muted)] max-w-xs">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              {footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={localePath(href, locale)}
                    className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={localePath("/blog", locale)}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition"
                >
                  {footer.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              {footer.contact}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition inline-flex items-center gap-1.5"
                >
                  <span className="text-[#25D366]">WhatsApp</span>
                  — {footer.whatsAppRequest}
                </a>
              </li>
              <li>
                <Link
                  href={localePath("/contact", locale)}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition"
                >
                  {footer.requestSiteVisit}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--card-border)] pt-8 text-center text-sm text-[var(--muted)]">
          <p>© {currentYear} TechRoom. {footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
