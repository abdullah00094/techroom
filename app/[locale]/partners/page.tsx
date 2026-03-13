import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TechnologyPartnersSection } from "@/components/sections/TechnologyPartnersSection";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "ar" ? "الشركاء التقنيون" : "Technology Partners";
  const description =
    locale === "ar"
      ? "نعمل مع علامات موثوقة في البنية التحتية والأمن: Hikvision، Cisco، MikroTik، TP-Link، D-Link."
      : "We work with trusted brands for infrastructure and security: Hikvision, Cisco, MikroTik, TP-Link, D-Link.";
  return buildMetadata({
    locale: locale as Locale,
    title,
    description,
    path: `/${locale}/partners`,
  });
}

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <Section className="pt-8">
      <SectionHeader
        title={locale === "ar" ? "الشركاء التقنيون" : "Technology Partners"}
        subtitle={
          locale === "ar"
            ? "نعمل مع علامات موثوقة في البنية التحتية والأمن."
            : "We work with trusted brands for infrastructure and security."
        }
      />
      <TechnologyPartnersSection locale={l} />
    </Section>
  );
}
