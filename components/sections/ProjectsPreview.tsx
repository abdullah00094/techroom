import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { projects as projectsEn } from "@/content/en/projects";
import { projects as projectsAr } from "@/content/ar/projects";
import { projectsPreview as contentEn } from "@/content/en/home";
import { projectsPreview as contentAr } from "@/content/ar/home";

const projectsByLocale = { en: projectsEn, ar: projectsAr };
const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function ProjectsPreview({ locale }: Props) {
  const projects = projectsByLocale[locale];
  const content = contentByLocale[locale];
  const featured = projects.slice(0, 3);

  return (
    <Section id="projects">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <article
            key={project.id}
            className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] ${locale === "ar" ? "text-end" : ""}`}
          >
            <span className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
              {project.businessType}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
              {project.challenge}
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
              {locale === "ar" ? "النتيجة: " : "Outcome: "}{project.outcome}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href={localePath("/projects", locale)} variant="outline">
          {content.viewAllProjects}
        </Button>
      </div>
    </Section>
  );
}
