import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { projects as projectsEn } from "@/content/en/projects";
import { projects as projectsAr } from "@/content/ar/projects";
import { projectsPage as contentEn } from "@/content/en/pages";
import { projectsPage as contentAr } from "@/content/ar/pages";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";

const projectsByLocale = { en: projectsEn, ar: projectsAr };
const contentByLocale = { en: contentEn, ar: contentAr };
const ctaByLocale = { en: ctaEn, ar: ctaAr };

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "ar" ? contentAr : contentEn;
  return buildMetadata({
    locale: locale as Locale,
    title: content.title,
    description: content.subtitle,
    path: `/${locale}/projects`,
  });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;
  const projects = projectsByLocale[l];
  const content = contentByLocale[l];
  const cta = ctaByLocale[l];

  return (
    <>
      <Section className="pt-8">
        <SectionHeader
          title={content.title}
          subtitle={content.subtitle}
        />
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] sm:p-8 ${l === "ar" ? "text-end" : ""}`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                {project.businessType}
              </span>
              <h2 className="mt-2 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                {project.title}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {content.challenge}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {content.solution}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {content.outcome}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section alt>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {content.similarChallenge}
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            {content.similarChallengeSubtitle}
          </p>
          <Button href={localePath("/contact", l)} variant="primary" className="mt-6">
            {cta.requestConsultation}
          </Button>
        </div>
      </Section>
    </>
  );
}
