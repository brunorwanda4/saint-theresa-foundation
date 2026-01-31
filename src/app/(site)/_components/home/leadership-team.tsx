"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leaders = [
	{
		id: 1,
		name: "AHAYO Marie Anita",
		role: "Founder & Managing Director | Public Health Expert",
		bio: "A Master of Science in Public Health with 20 years of experience in the medical field, she leads a polyclinic serving 50,000 patients annually and serves as a leader in the Private Sector Federation [5-7].",
		imageUrl: "/images/our/ahayo-1.jpeg",
	},
	{
		id: 2,
		name: "Jean Paul Mugiraneza",
		role: "Co-Founder | Strategic Development & Governance Expert",
		bio: "With 20 years in public service and global leadership, he is a Senior Director at Interpeace in Geneva, specializing in peacebuilding and citizen-centered governance [8-10].",
		imageUrl: "/images/founder-1.jpg",
	},
];

const LeadershipTeam = () => {
	const [hoveredImage, setHoveredImage] = useState<string | null>(null);

	return (
		<section className="font-sans  ">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
				<div className="flex flex-col space-y-12">
					<h2 className=" h1">Leadership team</h2>

					<div className="relative w-full max-w-md h-90 flex items-center justify-center">
						<div
							className={`relative overflow-hidden rounded-3xl transform -rotate-3 transition-all duration-500 ease-in-out shadow-2xl aspect-[4/3] w-full
                ${hoveredImage ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}  `}
						>
							{hoveredImage && (
								<div className=" relative w-full h-full">
									<Image
										fill
										loading="lazy"
										src={hoveredImage}
										alt="Leader preview"
										className="w-full h-full object-cover"
									/>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="flex flex-col space-y-2">
					<p className="h5">
						Our foundation is led by seasoned humanitarian professionals who
						blend global strategic vision with decades of first-hand experience
						in healthcare and community development. We are supported by a
						dedicated team committed to serving "the least of these" with
						dignity and professional excellence.
					</p>

					<div className="space-y-2">
						{leaders.map((leader) => (
							<div
								key={leader.id}
								onMouseEnter={() => setHoveredImage(leader.imageUrl)}
								onMouseLeave={() => setHoveredImage(null)}
								className="group border-b border-gray-200 py-4 cursor-pointer"
							>
								<h3 className="h2 group-hover:text-primary transition-colors duration-300">
									{leader.name}
								</h3>
								<p className="p text-gray-500  group-hover:text-gray-600 transition-colors duration-300">
									{leader.role}
								</p>
							</div>
						))}
					</div>

					<Link
						className={cn(
							buttonVariants({ size: "lg", variant: "outline" }),
							"group w-fit mt-4",
						)}
						href="/about/team"
					>
						Learn More{" "}
						<IoMdArrowForward className="group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LeadershipTeam;
