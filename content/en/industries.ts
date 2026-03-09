export const industries = [
  {
    id: "clinics",
    slug: "clinics",
    title: "Clinics & Medical Centers",
    shortDescription:
      "IT and security solutions that support patient care, privacy, and smooth daily operations.",
    description:
      "Clinics and medical centers need reliable IT infrastructure, secure networks, and surveillance that supports safety and compliance. TechRoom delivers solutions tailored to healthcare environments.",
    painPoints: [
      "Need to protect patient data and ensure network security",
      "Require 24/7 surveillance in waiting areas, entrances, and critical zones",
      "Downtime affects appointments, records, and billing",
      "Compliance and evidence requirements for incidents",
      "Multiple devices and systems that must work together reliably",
    ],
    solutions: [
      "Secure network design and access control for clinical and admin areas",
      "CCTV coverage for entrances, waiting areas, and corridors",
      "IT support with clear response times to minimize disruption",
      "Structured cabling and Wi‑Fi for clinics and small hospitals",
    ],
    highlight:
      "We understand the sensitivity of healthcare environments and design systems that support both security and daily operations.",
  },
  {
    id: "offices",
    slug: "offices",
    title: "Offices",
    shortDescription:
      "Networks and support that keep your team connected and productive.",
    description:
      "Offices depend on stable internet, Wi‑Fi, and IT support. TechRoom provides network setup, surveillance, and ongoing support so your team can work without technical interruptions.",
    painPoints: [
      "Unreliable Wi‑Fi or cabling slowing down work",
      "No clear IT support when something breaks",
      "Security concerns at entrances, server rooms, or after hours",
      "Growing team or new space without a proper network plan",
      "Guest and staff networks not properly separated",
    ],
    solutions: [
      "Full network design: cabling, switches, Wi‑Fi, and basic security",
      "CCTV for entrances, common areas, and sensitive zones",
      "Dedicated IT support with defined response times",
      "Documentation and handover for your team",
    ],
    highlight:
      "We design office networks and support plans that scale with your team and give you one clear point of contact for IT.",
  },
  {
    id: "warehouses",
    slug: "warehouses",
    title: "Warehouses & Logistics",
    shortDescription:
      "Surveillance and networks that protect assets and support operations.",
    description:
      "Warehouses and logistics sites need wide-area coverage, reliable networks for inventory and operations, and IT support. TechRoom delivers CCTV, network setup, and support suited to large spaces.",
    painPoints: [
      "Theft, damage, or disputes with no clear evidence",
      "Large areas with poor or no camera coverage",
      "Weak Wi‑Fi or no network in parts of the facility",
      "Need to monitor loading bays, gates, and storage zones",
      "Limited in-house IT to maintain systems",
    ],
    solutions: [
      "CCTV systems designed for large spaces, including outdoor and low-light areas",
      "Network and Wi‑Fi for offices and warehouse floor",
      "IT support for PCs, scanners, and basic infrastructure",
      "Remote viewing and recording for management and security",
    ],
    highlight:
      "We specialize in coverage and reliability for large spaces, so you can protect assets and keep operations running.",
  },
  {
    id: "restaurants",
    slug: "restaurants",
    title: "Restaurants",
    shortDescription:
      "Security and IT that support both front-of-house and back-of-house operations.",
    description:
      "Restaurants need surveillance in dining and kitchen areas, stable connectivity for POS and operations, and quick IT support. TechRoom provides tailored solutions for the hospitality sector.",
    painPoints: [
      "Incidents or disputes with no footage to review",
      "POS or kitchen systems going down during service",
      "Weak or unreliable Wi‑Fi for guests and staff",
      "Need to monitor cash handling, storage, and entrances",
      "No dedicated IT when something fails",
    ],
    solutions: [
      "CCTV for dining areas, kitchen, entrances, and storage",
      "Network setup for POS, back office, and guest Wi‑Fi",
      "IT support with fast response to minimize service disruption",
      "Clear cabling and equipment for easy future updates",
    ],
    highlight:
      "We help restaurants run smoothly with reliable systems and support that understand peak hours and operational needs.",
  },
  {
    id: "retail",
    slug: "retail",
    title: "Retail & Branches",
    shortDescription:
      "Surveillance and IT for single stores and multi-branch retail.",
    description:
      "Retail locations need visible security, stable networks for POS and inventory, and support across branches. TechRoom delivers CCTV and IT solutions that scale from one branch to many.",
    painPoints: [
      "Shrinkage, theft, or staff incidents with no reliable evidence",
      "POS or inventory systems failing across branches",
      "Inconsistent or weak networks in some locations",
      "No single provider for security and IT across branches",
      "Compliance or head office reporting requirements",
    ],
    solutions: [
      "CCTV tailored to retail: entrances, till points, stock areas, and perimeter",
      "Network and Wi‑Fi for each branch with consistent standards",
      "IT support that can serve multiple branches remotely and on-site",
      "Remote access for management to view footage and check systems",
    ],
    highlight:
      "We support single branches and multi-site retail with consistent, professional solutions and one point of contact.",
  },
  {
    id: "logistics",
    slug: "logistics",
    title: "Logistics Companies",
    shortDescription:
      "Security and connectivity for yards, offices, and fleet operations.",
    description:
      "Logistics companies need surveillance at yards and warehouses, reliable networks for dispatch and tracking, and IT support. TechRoom provides integrated solutions for the logistics sector.",
    painPoints: [
      "Theft or damage at yards, gates, or loading areas",
      "Network or software issues affecting dispatch and tracking",
      "Multiple sites with no unified approach to security and IT",
      "Need for evidence and reporting for insurance or clients",
      "Limited technical staff to maintain systems",
    ],
    solutions: [
      "CCTV for yards, gates, loading bays, and offices",
      "Network setup and Wi‑Fi for offices and operational areas",
      "IT support for dispatch, tracking, and office systems",
      "Remote monitoring and documented evidence for incidents",
    ],
    highlight:
      "We help logistics companies secure their sites and keep systems running so operations and delivery stay on track.",
  },
] as const;

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
