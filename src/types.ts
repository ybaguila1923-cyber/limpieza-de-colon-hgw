export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  isExample: boolean;
  avatarUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ScheduleItem {
  days: string;
  hours: string;
  status: string;
}

export interface BankAccountInfo {
  bankName: string;
  accountType: string;
  accountNumber: string;
  beneficiaryName: string;
  emailContact?: string;
  notes?: string;
}

export interface YappyInfo {
  phone: string;
  formattedPhone: string;
  registeredName: string;
  instructions: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  ownerName: string;
  role: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappMessageDefault: string;
  whatsappMessageProduct: string;
  whatsappMessageOrder: string;
  city: string;
  province: string;
  country: string;
  addressNote: string;
  shippingCoverage: string;
  productName: string;
  productBrand: string;
  productFormat: string;
  programDuration: string;
  preparation: string;
  totalSachets: number;
  commercialProposal: string;
  images: {
    product: string;
    owner: string;
    testimonial: string;
  };
  yappy: YappyInfo;
  bankAccount: BankAccountInfo;
  schedule: ScheduleItem[];
  benefits: BenefitItem[];
  steps: StepItem[];
  faqs: FaqItem[];
  testimonials: TestimonialItem[];
}
