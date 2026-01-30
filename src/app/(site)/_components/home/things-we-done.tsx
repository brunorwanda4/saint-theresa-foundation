import Image from "next/image";
import Carousel from "@/components/carousel";

const projects = [
	{
		image: "/images/d/1.jpg",
		title: "Coming Soon",
		description:
			"This project is currently in development. Stay tuned for updates!",
		blogUrl: "#",
		githubUrl: "#",
		isPlaceholder: true,
	},
	{
		image: "/images/d/3.jpg",
		title: "In Progress",
		description: "Working on something exciting. Check back soon!",
		blogUrl: "#",
		githubUrl: "#",
		isPlaceholder: true,
	},
	{
		image: "/images/d/2.jpg",
		title: "Under Construction",
		description: "Building amazing features. More details coming soon!",
		blogUrl: "#",
		githubUrl: "#",
		isPlaceholder: true,
	},
	{
		image: "/images/d/4.jpeg",
		title: "Coming Soon",
		description: "An exciting new project is on the way!",
		blogUrl: "#",
		githubUrl: "#",
		isPlaceholder: true,
	},
	{
		image: "/images/d/7.jpeg",
		title: "Coming Soon",
		description: "An exciting new project is on the way!",
		blogUrl: "#",
		githubUrl: "#",
		isPlaceholder: true,
	},
	{
		image: "/images/d/5.jpg",
		title: "Coming Soon",
		description: "An exciting new project is on the way!",
		blogUrl: "#",
		githubUrl: "#",
		isPlaceholder: true,
	},
	{
		image: "/images/d/6.jpg",
		title: "Coming Soon",
		description: "An exciting new project is on the way!",
		blogUrl: "#",
		githubUrl: "#",
		isPlaceholder: true,
	},
];

const ThingsWeDone = () => {
	return (
		<section className="relative min-h-screen flex flex-col items-center px-4 md:px-8">
			{/* Carousel */}
			<div className="max-w-[1280px] mx-auto w-full">
				<Carousel projects={projects} />
			</div>
		</section>
	);
};

export default ThingsWeDone;
