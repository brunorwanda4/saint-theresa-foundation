export interface Partner {
  name: string;
  logo: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface Opportunity {
  title: string;
  desc: string;
}

export const partners: Partner[] = [
  {
    name: "Ministry of Health",
    logo: "/partners/Ministry-of-Health-of-rwanda.jpg",
  },
  {
    name: "Caritas Rwanda",
    logo: "/partners/logo-Caritas-Rwanda-1.gif",
  },
  {
    name: "UNICEF",
    logo: "/partners/unicef-logo-transparent-free-png.webp",
  },
  { name: "University of Rwanda", logo: "/partners/urlogo1.png" },
];

export const stats: Stat[] = [
  { number: "40+", label: "Partner Organizations" },
  { number: "10K+", label: "Beneficiaries Reached" },
  { number: "5", label: "Rwandan Districts Covered" },
  { number: "15+", label: "Community Projects Active" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sr. Claire Uwimana",
    role: "Caritas Rwanda",
    quote:
      "Partnering with Sainte Thérèse Foundation has amplified our mission in health outreach. Their commitment to compassion and excellence is inspiring.",
  },
  {
    name: "Dr. Jean Bosco Mugenzi",
    role: "Ministry of Health",
    quote:
      "Together we've improved rural access to healthcare and established sustainable digital health solutions. Their collaboration is invaluable.",
  },
];

export const opportunities: Opportunity[] = [
  {
    title: "Faith-Based Collaborations",
    desc: "Join church and mission-based initiatives improving rural health access.",
  },
  {
    title: "Community Health Projects",
    desc: "Support health campaigns, nutrition programs, and mobile clinics.",
  },
  {
    title: "Digital Health Innovation",
    desc: "Partner on telemedicine, AI-assisted diagnosis, and training tools.",
  },
  {
    title: "Research & Data",
    desc: "Collaborate on evidence-based policy research and community data studies.",
  },
  {
    title: "Educational Partnerships",
    desc: "Train youth and professionals in leadership and healthcare skills.",
  },
  {
    title: "Sponsorship & Funding",
    desc: "Fund initiatives for sustainable, long-term social impact.",
  },
];
