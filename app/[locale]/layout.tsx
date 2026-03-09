import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <>
      <Header locale={locale as Locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale as Locale} />
      <WhatsAppButton locale={locale as Locale} />
    </>
  );
}
