export const cta = {
  requestConsultation: "Request Free Consultation",
  contactWhatsApp: "Contact on WhatsApp",
  requestSiteVisit: "Request Site Visit",
  learnMore: "Learn more",
  viewAll: "View all",
  submitRequest: "Submit Request",
  sending: "Sending…",
} as const;

export const form = {
  businessName: "Business Name",
  phone: "Phone Number",
  serviceType: "Service Type",
  location: "Location",
  requirementDetails: "Requirement Details",
  selectService: "Select a service",
  placeholderBusiness: "Your company name",
  placeholderPhone: "e.g. 01234567890",
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
    businessName: "Please enter your business name (at least 2 characters).",
    phone: "Please enter a valid phone number.",
    serviceType: "Please select a service.",
    location: "Please enter your location (at least 3 characters).",
    requirementDetails:
      "Please describe your requirements (at least 10 characters).",
  },
} as const;
