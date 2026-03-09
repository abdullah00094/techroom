export const cta = {
  requestConsultation: "طلب استشارة مجانية",
  contactWhatsApp: "تواصل عبر واتساب",
  requestSiteVisit: "طلب زيارة موقع",
  learnMore: "اعرف المزيد",
  viewAll: "عرض الكل",
  submitRequest: "إرسال الطلب",
  sending: "جاري الإرسال…",
} as const;

export const form = {
  businessName: "اسم الشركة",
  phone: "رقم الهاتف",
  serviceType: "نوع الخدمة",
  location: "الموقع",
  requirementDetails: "تفاصيل المتطلبات",
  selectService: "اختر الخدمة",
  placeholderBusiness: "اسم شركتك",
  placeholderPhone: "مثال: 01234567890",
  placeholderLocation: "المدينة، المنطقة، أو العنوان الكامل",
  placeholderRequirements:
    "صف احتياجاتك: مساحة المبنى، عدد الكاميرات أو الأجهزة، الجدول الزمني، إلخ.",
  required: "*",
  submitRequest: "إرسال الطلب",
  sending: "جاري الإرسال…",
  successMessage: "شكراً لك. سنتواصل معك قريباً.",
  errorMessage:
    "حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.",
  errors: {
    businessName: "يرجى إدخال اسم شركتك (حرفين على الأقل).",
    phone: "يرجى إدخال رقم هاتف صحيح.",
    serviceType: "يرجى اختيار الخدمة.",
    location: "يرجى إدخال موقعك (3 أحرف على الأقل).",
    requirementDetails:
      "يرجى وصف متطلباتك (10 أحرف على الأقل).",
  },
} as const;
