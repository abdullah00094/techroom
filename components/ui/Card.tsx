import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** If set, the card becomes a link */
  href?: string;
}

export function Card({ children, className = "", href }: CardProps) {
  const base =
    "rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-md)]";

  if (href) {
    return (
      <Link href={href} className={`block ${base} ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}

export function CardTitle({
  children,
  as: Tag = "h3",
  className = "",
}: CardTitleProps) {
  return (
    <Tag
      className={`text-lg font-semibold text-[var(--foreground)] ${className}`}
    >
      {children}
    </Tag>
  );
}
