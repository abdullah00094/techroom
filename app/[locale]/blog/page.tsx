import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { blogPage as contentEn } from "@/content/en/pages";
import { blogPage as contentAr } from "@/content/ar/pages";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "ar" ? contentAr : contentEn;
  return buildMetadata({
    locale: locale as Locale,
    title: content.title,
    description: content.subtitle,
    path: `/${locale}/blog`,
  });
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const content = contentByLocale[l];

  return (
    <Section className="pt-8">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className={`mx-auto max-w-2xl rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--section-alt)] p-8 text-center ${l === "ar" ? "text-end" : ""}`}>
        <p className="text-[var(--muted)]">
          {content.comingSoon}
        </p>
      </div>
    </Section>
  );
}
