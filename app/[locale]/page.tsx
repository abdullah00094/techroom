import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <>
      <HeroSection locale={l} />
      <TrustStrip locale={l} />
      <ServicesOverview locale={l} />
      <IndustriesServed locale={l} />
      <WhyChooseUs locale={l} />
      <ProjectsPreview locale={l} />
      <ProcessSection locale={l} />
      <FAQSection locale={l} />
      <ContactSection locale={l} />
    </>
  );
}
