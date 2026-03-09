"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { services as servicesEn } from "@/content/en/services";
import { services as servicesAr } from "@/content/ar/services";
import { form as formEn } from "@/content/en/common";
import { form as formAr } from "@/content/ar/common";

const servicesByLocale = { en: servicesEn, ar: servicesAr };
const formByLocale = { en: formEn, ar: formAr };

type Props = { locale: Locale };

export function ContactForm({ locale }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const form = formByLocale[locale];
  const services = servicesByLocale[locale];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    const businessName = (data.get("businessName") as string)?.trim() ?? "";
    const phone = (data.get("phone") as string)?.trim() ?? "";
    const serviceType = (data.get("serviceType") as string)?.trim() ?? "";
    const location = (data.get("location") as string)?.trim() ?? "";
    const requirementDetails = (data.get("requirementDetails") as string)?.trim() ?? "";

    const newErrors: Record<string, string> = {};
    if (!businessName || businessName.length < 2)
      newErrors.businessName = form.errors.businessName;
    if (!phone || phone.length < 8)
      newErrors.phone = form.errors.phone;
    if (!serviceType) newErrors.serviceType = form.errors.serviceType;
    if (!location || location.length < 3)
      newErrors.location = form.errors.location;
    if (!requirementDetails || requirementDetails.length < 10)
      newErrors.requirementDetails = form.errors.requirementDetails;

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
        <label htmlFor="contact-businessName" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {form.businessName} <span className="text-red-500">{form.required}</span>
        </label>
        <input
          id="contact-businessName"
          name="businessName"
          type="text"
          required
          autoComplete="organization"
          className="w-full rounded-xl border border-[var(--card-border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
          placeholder={form.placeholderBusiness}
          aria-invalid={!!errors.businessName}
          aria-describedby={errors.businessName ? "err-businessName" : undefined}
        />
        {errors.businessName && (
          <p id="err-businessName" className="mt-1 text-sm text-red-600">
            {errors.businessName}
          </p>
        )}
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
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
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
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-location" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {form.location} <span className="text-red-500">{form.required}</span>
        </label>
        <input
          id="contact-location"
          name="location"
          type="text"
          required
          className="w-full rounded-xl border border-[var(--card-border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
          placeholder={form.placeholderLocation}
          aria-invalid={!!errors.location}
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-requirementDetails" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
          {form.requirementDetails} <span className="text-red-500">{form.required}</span>
        </label>
        <textarea
          id="contact-requirementDetails"
          name="requirementDetails"
          required
          rows={4}
          className="w-full rounded-xl border border-[var(--card-border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 resize-y min-h-[100px]"
          placeholder={form.placeholderRequirements}
          aria-invalid={!!errors.requirementDetails}
        />
        {errors.requirementDetails && (
          <p className="mt-1 text-sm text-red-600">{errors.requirementDetails}</p>
        )}
      </div>

      {status === "success" && (
        <p className="text-sm font-medium text-green-600">
          {form.successMessage}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          {form.errorMessage}
        </p>
      )}

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {status === "sending" ? form.sending : form.submitRequest}
      </Button>
    </form>
  );
}
