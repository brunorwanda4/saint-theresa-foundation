"use client";
import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Carousel from "@/components/carousel";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from "@/components/ui/accordion";

const AhayoMarie = () => {
	const professionalHistory = [
		{
			organization: "Sainte Thérèse Polyclinic",
			role: "Co-Founder and Managing Director",
			startDate: 2013,
			location: "Rwamagana",
			description:
				"Private medical polyclinic expanding into specialized radiology and gastro-endoscopic services.",
			keyStats: ["40,000 - 50,000 patients annually"],
		},
		{
			organization: "TRUST Pharmalab Ltd",
			role: "Founder",
			startDate: 2019,
			location: "Kigali",
			description:
				"Wholesale pharmaceutical company specializing in the distribution of medical equipment and medicines.",
			keyStats: [
				"Operations in Rwanda, Congo, and Burundi",
				"Partnerships in China, India, and Europe",
			],
		},
		{
			organization: "Private Sector Federation (PSF)",
			role: "Provincial Vice-chair",
			startDate: 2021,
			description:
				"Active member of the Chamber of Women in PSF Rwanda, contributing to private sector leadership.",
		},
	];

	const leaders = [
		{
			image: "/images/our/ahayo-1.jpeg",
			title: "AHAYO Marie Anita ",
			description: "",
		},
		{
			image: "/images/our/ahayo-5.jpg",
			title: "AHAYO Marie Anita ",
			description: "",
		},
	];

	return (
		<section className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 py-10 max-w-7xl mx-auto items-start">
			<main className="w-full lg:w-1/2 space-y-8">
				<div className="space-y-4">
					<h2 className="h2">AHAYO Marie Anita</h2>
					<p className=" p">
						Is a distinguished public health expert, business leader, and
						philanthropist with over <strong>20 years of experience</strong> in
						Rwanda's public and private health sectors. She is the{" "}
						<strong>Founder and Managing Director </strong>of the Sainte Thérèse
						Foundation, a faith-driven initiative established to bring quality
						healthcare to the most vulnerable and "hard-to-reach" populations.
					</p>
				</div>

				<div className="space-y-4">
					<h3 className="h3">Professional Leadership & Business Expertise</h3>
					<p className="sm">
						Anita has a strong background in healthcare management and
						pharmaceutical distribution:
					</p>

					<Accordion
						className="w-full"
						collapsible
						defaultValue="3"
						type="single"
					>
						{professionalHistory.map((item) => (
							<AccordionItem
								className="py-2"
								key={item.organization}
								value={item.organization}
							>
								<AccordionPrimitive.Header className="flex">
									<AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left font-semibold text-[15px] leading-6 outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
										<span className="flex items-center gap-3">
											<div className=" bg-foreground text-background grid place-content-center text-xl font-light rounded-full size-16">
												{item.startDate}
											</div>
											<span className="flex flex-col space-y-1">
												<span className=" h4">{item.organization}</span>
												<div className=" flex flex-row gap-4">
													<span className="text-lg opacity-70">
														{item.role}
													</span>
													{item.location && (
														<div className=" flex flex-row gap-2 items-center">
															<IoLocationOutline size="16" />
															<span className=" inline text-lg">
																{item.location}
															</span>
														</div>
													)}
												</div>
											</span>
										</span>
										<PlusIcon
											aria-hidden="true"
											className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
											size={16}
										/>
									</AccordionPrimitive.Trigger>
								</AccordionPrimitive.Header>
								<AccordionContent className="ms-3 ps-10 pb-2 text-base">
									{item.description}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
				<div className="lg:h-[60vh]" />
			</main>

			<aside className="w-full lg:w-1/2 lg:sticky lg:top-30">
				<div className="w-full rounded-3xl overflow-hidden">
					<Carousel
						className="min-h-[500px] lg:min-h-[650px]"
						imageClassName="object-cover h-full"
						projects={leaders}
					/>
				</div>
			</aside>
		</section>
	);
};

export default AhayoMarie;
