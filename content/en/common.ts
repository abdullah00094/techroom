export const cta = {
  requestService: "Request Service",
  bookSiteVisit: "Book Site Visit",
  requestConsultation: "Request a Free Consultation",
  contactWhatsApp: "Contact on WhatsApp",
  requestSiteVisit: "Request Site Visit",
  learnMore: "Learn More",
  viewAll: "View all",
  submitRequest: "Submit Request",
  sending: "Sending…",
} as const;

export const form = {
  name: "Name",
  company: "Company",
  phone: "Phone Number",
  serviceType: "Service Type",
  message: "Message",
  businessName: "Business Name",
  location: "Location",
  requirementDetails: "Requirement Details",
  selectService: "Select a service",
  placeholderName: "Your name",
  placeholderCompany: "Your company name",
  placeholderPhone: "e.g. 01234567890",
  placeholderMessage: "Tell us about your needs…",
  placeholderBusiness: "Your company name",
  placeholderLocation: "City, area, or full address",
  placeholderRequirements:
    "Describe your needs: size of premises, number of cameras or devices, timeline, etc.",
  required: "*",
  submitRequest: "Submit Request",
  sending: "Sending…",
  successMessage: "Thank you. We will contact you shortly.",
  errorMessage:
    "Something went wrong. Please try again or contact us on WhatsApp.",
  errors: {
    name: "Please enter your name (at least 2 characters).",
    company: "Please enter your company name (at least 2 characters).",
    phone: "Please enter a valid phone number.",
    serviceType: "Please select a service.",
    message: "Please enter your message (at least 10 characters).",
    businessName: "Please enter your business name (at least 2 characters).",
    location: "Please enter your location (at least 3 characters).",
    requirementDetails:
      "Please describe your requirements (at least 10 characters).",
  },
} as const;
