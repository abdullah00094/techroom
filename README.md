# TechRoom – B2B IT Infrastructure & Security Website

A modern, professional, bilingual (English/Arabic) B2B company website for **TechRoom**, an IT Infrastructure & Security Solutions company based in Alexandria, Egypt. Built with Next.js 16 (App Router), Tailwind CSS v4, and full RTL support for Arabic.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Routing & URL Structure](#routing--url-structure)
4. [Website Section Map](#website-section-map)
5. [Component Architecture](#component-architecture)
6. [Content & Localization](#content--localization)
7. [Design System](#design-system)
8. [Forms & Validation](#forms--validation)
9. [SEO & Metadata](#seo--metadata)
10. [Development & Deployment](#development--deployment)

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework, App Router |
| React | 19.2.3 | UI library |
| Tailwind CSS | ^4 | Styling |
| TypeScript | ^5 | Type safety |
| Plus Jakarta Sans | — | Primary font (Google Fonts) |

---

## Project Structure

```
techroom/
├── app/
│   ├── layout.tsx                 # Root layout (html, body, fonts, dir/lang script)
│   ├── globals.css                # Global styles, CSS variables
│   └── [locale]/                  # Locale-based routing
│       ├── layout.tsx             # Locale layout (Header, Footer, WhatsApp)
│       ├── page.tsx               # Homepage
│       ├── services/
│       │   ├── page.tsx           # Services list
│       │   └── [slug]/page.tsx    # Service detail (CCTV, Network, IT Support)
│       ├── industries/
│       │   ├── page.tsx           # Industries list
│       │   └── [slug]/page.tsx    # Industry detail (clinics, offices, etc.)
│       ├── projects/page.tsx      # Projects / case studies
│       ├── about/page.tsx         # About page
│       ├── contact/page.tsx       # Contact / consultation request
│       └── blog/page.tsx          # Blog (placeholder)
├── components/
│   ├── layout/                    # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── sections/                  # Page sections (homepage & shared)
│   │   ├── HeroSection.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── IndustriesServed.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                        # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── WhatsAppButton.tsx
│   ├── cta/                       # Call-to-action components
│   │   └── CTAButtons.tsx
│   └── forms/
│       └── ContactForm.tsx
├── content/
│   ├── en/                        # English content
│   │   ├── navigation.ts
│   │   ├── home.ts
│   │   ├── services.ts
│   │   ├── industries.ts
│   │   ├── projects.ts
│   │   ├── faq.ts
│   │   ├── footer.ts
│   │   ├── pages.ts
│   │   └── common.ts
│   └── ar/                        # Arabic content (same structure)
├── lib/
│   ├── i18n.ts                    # Locale utilities
│   ├── seo.ts                     # Metadata builder
│   └── validators.ts              # Form validation helpers
├── middleware.ts                  # Locale redirects
└── public/
```

---

## Routing & URL Structure

### Locale Prefixes

| Locale | Prefix | Direction |
|--------|--------|-----------|
| English | `/en` | LTR |
| Arabic | `/ar` | RTL |

### URL Map

| Route | Page | Description |
|-------|------|-------------|
| `/` | Redirect | → `/en` |
| `/en` | Homepage | English home |
| `/ar` | Homepage | Arabic home (RTL) |
| `/en/services` | Services list | All services |
| `/en/services/cctv-installation` | CCTV detail | Service page |
| `/en/services/network-setup` | Network detail | Service page |
| `/en/services/it-support` | IT Support detail | Service page |
| `/en/industries` | Industries list | All industries |
| `/en/industries/clinics` | Clinics detail | Industry page |
| `/en/industries/offices` | Offices detail | Industry page |
| `/en/industries/warehouses` | Warehouses detail | Industry page |
| `/en/industries/restaurants` | Restaurants detail | Industry page |
| `/en/industries/retail` | Retail detail | Industry page |
| `/en/industries/logistics` | Logistics detail | Industry page |
| `/en/projects` | Projects | Case studies |
| `/en/about` | About | Company info |
| `/en/contact` | Contact | Consultation form |
| `/en/blog` | Blog | Placeholder |

*(Same structure for `/ar/...`)*

### Middleware Behavior

- **`/`** → redirects to `/en`
- **`/services`** (no locale) → redirects to `/en/services`
- **`/en/*`** or **`/ar/*`** → passes through

---

## Website Section Map

### Homepage (`/[locale]`)

| Order | Section | Component | Content Source | Anchor ID |
|-------|---------|-----------|----------------|-----------|
| 1 | Hero | `HeroSection` | `content/{locale}/home.ts` → `hero` | — |
| 2 | Trust strip | `TrustStrip` | `content/{locale}/home.ts` → `trustStrip` | — |
| 3 | Services overview | `ServicesOverview` | `content/{locale}/home.ts`, `services.ts` | `#services` |
| 4 | Industries served | `IndustriesServed` | `content/{locale}/home.ts`, `industries.ts` | `#industries` |
| 5 | Why choose us | `WhyChooseUs` | `content/{locale}/home.ts` → `whyChooseUs` | `#why-us` |
| 6 | Projects preview | `ProjectsPreview` | `content/{locale}/projects.ts` | `#projects` |
| 7 | Process (3 steps) | `ProcessSection` | `content/{locale}/home.ts` → `processSection` | `#process` |
| 8 | FAQ | `FAQSection` | `content/{locale}/faq.ts` | `#faq` |
| 9 | Contact / consultation | `ContactSection` | `content/{locale}/home.ts` → `contactSection` | `#contact` |

### Services Page (`/[locale]/services`)

| Section | Component | Content |
|---------|-----------|---------|
| Header | `Section` + `SectionHeader` | `pages.ts` → `servicesPage` |
| Service cards | `Card` (×3) | `services.ts` |
| CTA block | `Button` | `common.ts` → `cta` |

### Service Detail Page (`/[locale]/services/[slug]`)

| Section | Content Source |
|---------|----------------|
| Breadcrumb | `navigation.ts` (Services label) |
| Hero / intro | `service.title`, `service.shortDescription` |
| CTA buttons | `CTAButtons` |
| Overview | `service.overview` |
| Problems solved | `service.problemsSolved` |
| What's included | `service.whatsIncluded` |
| Suitable for | `service.suitableFor` |
| Process (4 steps) | `service.process` |
| FAQ | `service.faq` |
| Final CTA | `CTAButtons` |

### Industries Page (`/[locale]/industries`)

| Section | Content |
|---------|---------|
| Header | `pages.ts` → `industriesPage` |
| Industry cards | `industries.ts` (×6) |
| Not listed CTA | `industriesPage.notListed` |

### Industry Detail Page (`/[locale]/industries/[slug]`)

| Section | Content |
|---------|---------|
| Breadcrumb | Industries |
| Intro | `industry.title`, `industry.description` |
| Typical challenges | `industry.painPoints` |
| How we help | `industry.solutions` |
| Highlight | `industry.highlight` |
| CTA | `CTAButtons` |

### Projects Page (`/[locale]/projects`)

| Section | Content |
|---------|---------|
| Header | `pages.ts` → `projectsPage` |
| Case study cards | `projects.ts` (×5) — Challenge, Solution, Outcome |
| CTA | `Button` → contact |

### About Page (`/[locale]/about`)

| Section | Content |
|---------|---------|
| Intro (3 paragraphs) | `pages.ts` → `aboutPage.intro1/2/3` |
| Values (3 cards) | `aboutPage.reliability`, `clarity`, `partnership` |
| CTA | `CTAButtons` |

### Contact Page (`/[locale]/contact`)

| Section | Content |
|---------|---------|
| Intro | `pages.ts` → `contactPage` |
| CTA buttons | `CTAButtons` (with `siteVisit`) |
| Form | `ContactForm` |

### Blog Page (`/[locale]/blog`)

| Section | Content |
|---------|---------|
| Header | `pages.ts` → `blogPage` |
| Placeholder | `blogPage.comingSoon` |

---

## Component Architecture

### Layout Components

#### `Header` (`components/layout/Header.tsx`)

| Element | Type | Description |
|---------|------|-------------|
| Logo | `Link` | TechRoom → `/[locale]` |
| Nav links | `Link` × 6 | Home, Services, Industries, Projects, About, Contact |
| Language switcher | `LanguageSwitcher` | EN ↔ العربية |
| CTA button | `Button` (primary) | Request Free Consultation → `/contact` |
| Mobile menu | `MobileNav` | Hamburger, slide-out panel |

**Props:** `locale: Locale`

#### `Footer` (`components/layout/Footer.tsx`)

| Column | Content |
|--------|---------|
| 1 | Logo, tagline |
| 2 | Quick links (nav + Blog) |
| 3 | Contact (WhatsApp, Request Site Visit) |
| Bottom | Copyright |

**Props:** `locale: Locale`

#### `MobileNav` (`components/layout/MobileNav.tsx`)

- Hamburger button (opens/closes)
- Nav links (same as header)
- CTA: Request Free Consultation, Contact on WhatsApp
- RTL-aware panel position

**Props:** `locale: Locale`

---

### Section Components (Homepage)

| Component | Props | RTL Handling |
|-----------|-------|--------------|
| `HeroSection` | `locale` | `text-end`, `flex justify-end` for Arabic |
| `TrustStrip` | `locale` | `flex-row-reverse` for Arabic |
| `ServicesOverview` | `locale` | Icon direction, `flex-row-reverse` for "Learn more" |
| `IndustriesServed` | `locale` | `text-end` on cards |
| `WhyChooseUs` | `locale` | `text-end` on cards |
| `ProjectsPreview` | `locale` | `text-end` on cards |
| `ProcessSection` | `locale` | Centered (no change) |
| `FAQSection` | `locale` | `flex-row-reverse`, `text-right` for accordion |
| `ContactSection` | `locale` | Grid order swap for Arabic |

---

### UI Components

#### `Button` (`components/ui/Button.tsx`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost"` | `"primary"` | Visual style |
| `href` | `string` | — | Renders as `Link` if set |
| `type` | `"button" \| "submit"` | `"button"` | For form submit |
| `external` | `boolean` | — | `target="_blank"` for links |
| `aria-label` | `string` | — | Accessibility |

**Variants:**
- **primary**: Blue background, white text
- **secondary**: Dark background
- **outline**: Border, transparent fill
- **ghost**: No border, hover background

#### `Card` (`components/ui/Card.tsx`)

| Prop | Type | Description |
|------|------|--------------|
| `href` | `string` | If set, card is a `Link` |
| `children` | `ReactNode` | Card content |

**Sub-component:** `CardTitle` — `as?: "h2" \| "h3" \| "h4"`

#### `Section` (`components/ui/Section.tsx`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `alt` | `boolean` | `false` | Light gray background |
| `id` | `string` | — | Anchor ID |
| `wrapperClassName` | `string` | — | Extra classes on inner div |

**Sub-component:** `SectionHeader`

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | — |
| `subtitle` | `string` | — |
| `centered` | `boolean` | `true` |

#### `LanguageSwitcher` (`components/ui/LanguageSwitcher.tsx`)

- Renders link to alternate locale (same path)
- **Props:** `locale`, `variant?: "compact" \| "full"`, `className`

#### `WhatsAppButton` (`components/ui/WhatsAppButton.tsx`)

- Fixed bottom-right (bottom-left in RTL)
- Links to WhatsApp with pre-filled message
- **Props:** `locale`

---

### CTA Components

#### `CTAButtons` (`components/cta/CTAButtons.tsx`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `locale` | `Locale` | — | Required |
| `primary` | `boolean` | `true` | Show "Request Free Consultation" |
| `whatsapp` | `boolean` | `true` | Show "Contact on WhatsApp" |
| `siteVisit` | `boolean` | `false` | Show "Request Site Visit" |
| `layout` | `"row" \| "column"` | `"row"` | Flex direction |

**Button mapping:**
- Primary → `/[locale]/contact`
- WhatsApp → `https://wa.me/{number}?text={message}`
- Site Visit → `/[locale]/contact#site-visit`

---

### Forms

#### `ContactForm` (`components/forms/ContactForm.tsx`)

| Field | Name | Type | Validation |
|-------|------|------|------------|
| Business Name | `businessName` | text | Required, min 2 chars |
| Phone Number | `phone` | tel | Required, min 8 chars |
| Service Type | `serviceType` | select | Required |
| Location | `location` | text | Required, min 3 chars |
| Requirement Details | `requirementDetails` | textarea | Required, min 10 chars |

**Props:** `locale: Locale`

**Content source:** `content/{locale}/common.ts` → `form`

**Note:** Form submission is mocked (800ms delay). Connect to API/form service in production.

---

## Content & Localization

### Content File Map

| File | Purpose |
|------|---------|
| `navigation.ts` | Nav links, WhatsApp number & message |
| `home.ts` | Homepage sections (hero, trust, services overview, etc.) |
| `services.ts` | Service definitions (CCTV, Network, IT Support) |
| `industries.ts` | Industry definitions (6 industries) |
| `projects.ts` | Case study data (5 projects) |
| `faq.ts` | Homepage FAQ (5 items) |
| `footer.ts` | Footer labels (tagline, quick links, contact) |
| `pages.ts` | Page-specific content (services, industries, projects, about, contact, blog) |
| `common.ts` | Shared strings (CTA labels, form labels, errors) |

### Locale Utilities (`lib/i18n.ts`)

| Export | Type | Description |
|--------|------|-------------|
| `locales` | `["en", "ar"]` | Supported locales |
| `defaultLocale` | `"en"` | Default locale |
| `localeConfig` | `object` | `dir`, `lang`, `label`, `shortLabel` per locale |
| `isValidLocale(value)` | `boolean` | Type guard |
| `localePath(path, locale)` | `string` | Builds `/[locale]/path` |
| `pathWithoutLocale(pathname)` | `string` | Strips locale prefix |

---

## Design System

### CSS Variables (`app/globals.css`)

| Variable | Value | Usage |
|----------|-------|-------|
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#0f172a` | Primary text |
| `--muted` | `#475569` | Secondary text |
| `--primary` | `#0f172a` | Dark accent |
| `--primary-foreground` | `#ffffff` | Text on primary |
| `--accent` | `#1e40af` | CTA blue |
| `--accent-hover` | `#1e3a8a` | CTA hover |
| `--card-bg` | `#ffffff` | Card background |
| `--card-border` | `#e2e8f0` | Card border |
| `--section-alt` | `#f8fafc` | Alternate section bg |
| `--radius` | `0.75rem` | Default radius |
| `--radius-lg` | `1rem` | Large radius |
| `--shadow` | — | Light shadow |
| `--shadow-md` | — | Medium shadow |
| `--shadow-lg` | — | Large shadow |

### Typography

- **Font:** Plus Jakarta Sans (Google Fonts)
- **Headings:** Bold, tight tracking
- **Body:** Regular, muted for secondary text

### RTL Support

- Inline script in root layout sets `dir` and `lang` from pathname
- Tailwind `rtl:` used for WhatsApp button position
- Manual `text-end`, `flex-row-reverse` where needed
- `dir="rtl"` on `html` drives layout for Arabic

---

## Forms & Validation

### Validators (`lib/validators.ts`)

| Function | Purpose |
|----------|---------|
| `isValidEmail(value)` | Email format |
| `isValidPhone(value)` | Phone format (8–20 chars) |
| `required(value)` | Non-empty |
| `minLength(value, min)` | Min length |
| `maxLength(value, max)` | Max length |

*Note: ContactForm uses inline validation; validators are available for future use.*

---

## SEO & Metadata

### `buildMetadata()` (`lib/seo.ts`)

| Option | Type | Description |
|--------|------|-------------|
| `locale` | `Locale` | Required |
| `title` | `string` | Page title (suffix: ` \| TechRoom`) |
| `description` | `string` | Meta description |
| `path` | `string` | Canonical path (e.g. `/en/services`) |
| `noIndex` | `boolean` | Disable indexing |
| `image` | `string` | OG image URL |

**Output:** `Metadata` with `title`, `description`, `openGraph`, `twitter`, `alternates` (canonical + `languages` for hreflang).

---

## Development & Deployment

### Scripts

```bash
npm run dev    # Start dev server (http://localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # ESLint
```

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Base URL for canonical/OG (default: `https://techroom-eg.com`) |

### Configuration

- **WhatsApp number:** `content/en/navigation.ts` and `content/ar/navigation.ts` → `whatsappNumber`
- **WhatsApp message:** Same files → `whatsappMessage` / `whatsappMessageAr`

### Deployment (Vercel)

- Compatible with Vercel
- Static generation for all pages via `generateStaticParams`
- Middleware handles locale redirects

---

## Quick Reference: Component → Section Map

| Page | Section | Component |
|------|---------|-----------|
| Home | Hero | `HeroSection` |
| Home | Trust strip | `TrustStrip` |
| Home | Services | `ServicesOverview` |
| Home | Industries | `IndustriesServed` |
| Home | Why us | `WhyChooseUs` |
| Home | Projects | `ProjectsPreview` |
| Home | Process | `ProcessSection` |
| Home | FAQ | `FAQSection` |
| Home | Contact | `ContactSection` |
| All | Header | `Header` |
| All | Footer | `Footer` |
| All | WhatsApp | `WhatsAppButton` |
| Contact | Form | `ContactForm` |
| Various | CTAs | `CTAButtons` |

---

*Last updated for TechRoom v0.1.0*
