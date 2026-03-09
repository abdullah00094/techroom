import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Alternate background (light gray) */
  alt?: boolean;
  /** Optional id for anchor links */
  id?: string;
  /** Optional wrapper class (e.g. for max-width) */
  wrapperClassName?: string;
}

export function Section({
  children,
  className = "",
  alt = false,
  id,
  wrapperClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${alt ? "bg-[var(--section-alt)]" : "bg-[var(--background)]"} ${className}`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${wrapperClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 sm:mb-12 lg:mb-14 ${centered ? "text-center max-w-3xl mx-auto" : ""} ${className}`}
    >
      <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-[var(--muted)] sm:mt-4">{subtitle}</p>
      )}
    </div>
  );
}
