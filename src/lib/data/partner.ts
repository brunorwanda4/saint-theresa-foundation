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

export const partners = [
	{
		name: "Ministry of Health",
		logo: "/logos/uor.png",
		link: "https://www.moh.gov.rw",
	},
	{
		name: "Caritas Rwanda",
		logo: "/logos/caritas.gif",
		link: "https://caritasrwanda.org",
	},
	{
		name: "UNICEF",
		logo: "/logos/unicef.webp",
		link: "https://www.unicef.org",
	},
	{
		name: "University of Rwanda",
		logo: "/logos/ur.webp",
		link: "https://ur.ac.rw/",
	},
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
		title: "Community-Based Collaborations",
		desc: "Join community and mission-based initiatives improving rural health access.",
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
