"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { services as servicesEn } from "@/content/en/services";
import { services as servicesAr } from "@/content/ar/services";
import { form as formEn, cta as ctaEn } from "@/content/en/common";
import { form as formAr, cta as ctaAr } from "@/content/ar/common";

const servicesByLocale = { en: servicesEn, ar: servicesAr };
const formByLocale = { en: formEn, ar: formAr };
const ctaByLocale = { en: ctaEn, ar: ctaAr };

type Props = { locale: Locale };

export function ContactForm({ locale }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const form = formByLocale[locale];
  const cta = ctaByLocale[locale];
  const services = servicesByLocale[locale];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const name = (data.get("name") as string)?.trim() ?? "";
    const company = (data.get("company") as string)?.trim() ?? "";
    const phone = (data.get("phone") as string)?.trim() ?? "";
    const serviceType = (data.get("serviceType") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";

    const newErrors: Record<string, string> = {};
    if (!name || name.length < 2) newErrors.name = form.errors.name;
    if (!company || company.length < 2) newErrors.company = form.errors.company;
    if (!phone || phone.length < 8) newErrors.phone = form.errors.phone;
    if (!serviceType) newErrors.serviceType = form.errors.serviceType;
    if (!message || message.length < 10) newErrors.message = form.errors.message;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");

    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {form.name} <span className="text-red-500">{form.required}</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-[var(--card-border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
          placeholder={form.placeholderName}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-company" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {form.company} <span className="text-red-500">{form.required}</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="w-full rounded-xl border border-[var(--card-border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
          placeholder={form.placeholderCompany}
          aria-invalid={!!errors.company}
        />
        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {form.phone} <span className="text-red-500">{form.required}</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full rounded-xl border border-[var(--card-border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
          placeholder={form.placeholderPhone}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="contact-serviceType" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {form.serviceType} <span className="text-red-500">{form.required}</span>
        </label>
        <select
          id="contact-serviceType"
          name="serviceType"
          required
          className="w-full rounded-xl border border-[var(--card-border)] bg-white px-4 py-3 text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
          aria-invalid={!!errors.serviceType}
        >
          <option value="">{form.selectService}</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {form.message} <span className="text-red-500">{form.required}</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full rounded-xl border border-[var(--card-border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 resize-y min-h-[100px]"
          placeholder={form.placeholderMessage}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {status === "success" && (
        <p className="text-sm font-medium text-green-600">{form.successMessage}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{form.errorMessage}</p>
      )}

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {status === "sending" ? form.sending : cta.requestConsultation}
      </Button>
    </form>
  );
}
