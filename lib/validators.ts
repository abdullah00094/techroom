const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s+\-()]{8,20}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  return PHONE_REGEX.test(value.replace(/\s/g, ""));
}

export function required(value: string): boolean {
  return value.trim().length > 0;
}

export function minLength(value: string, min: number): boolean {
  return value.trim().length >= min;
}

export function maxLength(value: string, max: number): boolean {
  return value.trim().length <= max;
}

export const contactFormSchema = {
  businessName: (v: string) => required(v) && minLength(v, 2) && maxLength(v, 200),
  phone: (v: string) => required(v) && isValidPhone(v),
  serviceType: (v: string) => required(v),
  location: (v: string) => required(v) && minLength(v, 3) && maxLength(v, 300),
  requirementDetails: (v: string) => required(v) && minLength(v, 10) && maxLength(v, 2000),
} as const;
