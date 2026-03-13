import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CTAAfterServices } from "@/components/sections/CTAAfterServices";
import { NetworkInfrastructureBlock } from "@/components/sections/NetworkInfrastructureBlock";
import { CCTVBlock } from "@/components/sections/CCTVBlock";
import { BusinessMonitoringBlock } from "@/components/sections/BusinessMonitoringBlock";
import { SmartMonitoringSection } from "@/components/sections/SmartMonitoringSection";
import { DashboardFeaturesSection } from "@/components/sections/DashboardFeaturesSection";
import { DashboardMockupsSection } from "@/components/sections/DashboardMockupsSection";
import { TechnologyPartnersSection } from "@/components/sections/TechnologyPartnersSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
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
      <CTAAfterServices locale={l} />
      <NetworkInfrastructureBlock locale={l} />
      <CCTVBlock locale={l} />
      <BusinessMonitoringBlock locale={l} />
      <SmartMonitoringSection locale={l} />
      <DashboardFeaturesSection locale={l} />
      <DashboardMockupsSection locale={l} />
      <TechnologyPartnersSection locale={l} />
      <HowItWorksSection locale={l} />
      <IndustriesServed locale={l} />
      <WhyChooseUs locale={l} />
      <ProjectsPreview locale={l} />
      <FAQSection locale={l} />
      <ContactSection locale={l} />
    </>
  );
}
