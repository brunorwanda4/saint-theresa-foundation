import {
  CalendarIcon,
  ContactIcon,
  Newsletter,
  PeaceTalk,
} from "@/components/site/landing/icons/lading-links-icon";

export const LandingLinks = [
  {
    title: "Biography & Stories",
    description:
      "Read inspiring stories and updates from Sainte Thérèse Foundation’s outreach missions, training workshops, and conferences across Rwanda.",
    icon: Newsletter,
    href: "/biography/outreach",
  },
  {
    title: "Community & Service Talks",
    description:
      "Join our community dialogues and reflections inspired by St. Thérèse’s mission of compassion, service, and hope in healthcare.",
    icon: PeaceTalk,
    href: "/biography/conferences",
  },
  {
    title: "Connect With Us",
    description:
      "Follow Sainte Thérèse Foundation on social media to stay informed, volunteer, or collaborate with our growing community of change-makers.",
    icon: ContactIcon,
    href: "/get-involved/partner",
  },
  {
    title: "Upcoming Events",
    description:
      "Explore our upcoming workshops, health campaigns, and outreach missions happening across different regions of Rwanda.",
    icon: CalendarIcon,
    href: "/biography/press",
  },
];
