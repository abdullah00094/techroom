import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-[var(--shadow-md)] hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-lg)] active:scale-[0.98] px-6 py-3 text-base",
  secondary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--shadow-md)] hover:opacity-90 active:scale-[0.98] px-6 py-3 text-base",
  outline:
    "border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] px-6 py-3 text-base",
  ghost:
    "text-[var(--primary)] hover:bg-[var(--section-alt)] px-4 py-2 text-base",
};

type Props = {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
  "aria-label"?: string;
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  external,
  "aria-label": ariaLabel,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
