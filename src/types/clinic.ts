import type { SiteImage } from "./media";
export type FAQ = { question: string; answer: string; category: string };
export type Procedure = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: SiteImage;
  imagePosition?: string;
  intro: string;
  considerations: string;
  faq: FAQ[];
};
export type Professional = {
  slug: string;
  name: string;
  role: string;
  biography: string;
  image?: string;
  crm?: string;
  rqe?: string;
  placeholder: boolean;
};
export type Clinic = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  demo: boolean;
  showDemoBadge: boolean;
  contact: {
    phone: string | null;
    whatsapp: string | null;
    email: string | null;
    address: string | null;
    mapUrl: string | null;
    instagram: string | null;
  };
  openingHours: string[];
  team: Professional[];
};
