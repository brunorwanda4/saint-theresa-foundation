import { Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const OurCorePrograms = () => {
	const corePrograms = [
		{
			title: "Mobile Medical Clinics",
			description:
				"Deploying specialized vehicles to provide essential healthcare services directly to rural and hard-to-reach populations .",
			className: " bg-muted-foreground",
			href: "/work/mobile-clinics",
		},
		{
			title: "Sustainable Community Pharmacies",
			description:
				"Establishing local pharmacies that offer subsidized or low-cost medication to ensure the most vulnerable can afford treatment .",
			className: " bg-primary",
			href: "/work/community-pharmacies",
		},
		{
			title: "Digital Health Initiatives",
			description:
				"Launching e-consultation and digital prescription platforms to overcome geographical barriers and connect patients with doctors remotely.",
			className: " bg-secondary text-foreground",
			href: "/work/digital-health",
		},
		{
			title: "Preventive Health & Public Education",
			description:
				"Providing community screenings for conditions like HIV and diabetes while conducting workshops on nutrition and hygiene.",
			className: " bg-muted",
			href: "/work/public-health",
		},
	];
	return (
		<section className=" space-y-8 flex flex-col justify-between h-full">
			<h1 className=" h1">Our Core Programs</h1>
			<div className="grid-cols-1 lg:grid-cols-2 grid gap-4">
				{corePrograms.map((program, index) => (
					<div
						key={`${program.title}-${index}`}
						className={cn(
							"rounded-md px-4 lg:px-6 py-4 text-background group",
							program.className,
						)}
					>
						<p className="text-lg">{program.description}</p>
						<Link
							href={`${program.href}`}
							className=" mt-4 flex flex-row items-center justify-between"
						>
							<h2 className="   font-light">{program.title}</h2>
							<Plus size={28} className=" group-hover:rotate-45 duration-150" />
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurCorePrograms;
