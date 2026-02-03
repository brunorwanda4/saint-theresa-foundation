export interface WorkItem {
	title: string;
	desc: string;
	href: string;
	img: string;
}

export const works: WorkItem[] = [
	{
		title: "Mobile Clinics",
		desc: "Reaching the unreached — bringing healthcare directly to villages and remote areas.",
		href: "/work/mobile-clinics",
		img: "/images/ambulance.jpg",
	},
	{
		title: "Digital Health",
		desc: "Harnessing technology to connect patients and doctors across Rwanda.",
		href: "/work/digital-health",
		img: "/images/digital-health-2.jpg",
	},
	{
		title: "Public Health Education",
		desc: "Empowering communities with knowledge on hygiene, nutrition, and wellness.",
		href: "/work/public-health",
		img: "/images/image-6.jpeg",
	},
	{
		title: "Training & Empowerment",
		desc: "Developing the next generation of healthcare leaders and volunteers.",
		href: "/work/training",
		img: "/images/training.jpg",
	},
	{
		title: "Partnerships",
		desc: "Joining hands with local and international partners to strengthen impact.",
		href: "/work/partnerships",
		img: "/images/image-1-a.jpg",
	},
];
