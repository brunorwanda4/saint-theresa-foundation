import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BeTheLightOfHope = () => {
	const engagementLinks = [
		{
			title: "Partner With Us",
			icon: "/icons/collaborate.png",
			url: "/get-involved/partner",
		},
		{
			title: "See Our Impact",
			icon: "/icons/target.png",
			url: "/impact/statistics",
		},
		{
			title: "Explore Our Future",
			icon: "/icons/development.png",
			url: "/programs/timeline",
		},
	];

	return (
		<div className=" flex gap-4">
			<div className="h-1/2">
				<h1 className="h1">
					Advancing Human Dignity Through Compassionate Care
				</h1>
			</div>

			<main className="w-full  divide-y divide-gray-200">
				{engagementLinks.map((link) => (
					<Link
						key={link.title}
						href={link.url}
						className="group flex items-center justify-between py-6 transition-colors hover:bg-muted-foreground/20 rounded-xs px-4 pr-8"
					>
						<div className="flex items-center gap-6">
							<div className="size-14 flex shrink-0 items-center justify-center bg-blue-50 rounded-full group-hover:border-foreground group-hover:border du">
								<Image
									src={link.icon}
									alt={link.title}
									width={28}
									height={28}
									className="object-contain"
								/>
							</div>
							<h2 className="text-2xl font-medium text-gray-900">
								{link.title}
							</h2>
						</div>

						<MoveRight className="w-6 h-6 text-gray-400 transition-transform group-hover:translate-x-2 group-hover:text-foreground" />
					</Link>
				))}
			</main>
		</div>
	);
};

export default BeTheLightOfHope;
