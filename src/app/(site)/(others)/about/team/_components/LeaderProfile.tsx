"use client";
import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import React, { useId } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Carousel from "@/components/carousel";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from "@/components/ui/accordion";
import type { Leader } from "../_types/leaderType";

const LeaderProfile = ({ leader }: { leader: Leader }) => {
	const id = useId();
	return (
		<section
			id={leader.name}
			className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4  items-start"
		>
			<main className="w-full lg:w-1/2 space-y-8">
				<div className="space-y-4">
					<h2 className="h2">{leader.name}</h2>
					<p className="p">{leader.intro}</p>
				</div>

				<div className="space-y-4">
					<h3 className="h3">{leader.sectionTitle}</h3>
					<p className="sm">{leader.sectionSubtitle}</p>

					<Accordion className="w-full" collapsible type="single">
						{leader.history.map((item, index) => (
							<AccordionItem className="py-2" key={id} value={`item-${index}`}>
								<AccordionPrimitive.Header className="flex">
									<AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left font-semibold text-[15px] leading-6 outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&[data-state=open]>svg]:rotate-180">
										<span className="flex items-center gap-3">
											<div className=" bg-foreground text-background grid place-content-center text-xl font-light rounded-full size-16">
												{item.startDate}
											</div>
											<span className="flex flex-col space-y-1">
												<span className="h4">{item.organization}</span>
												<div className="flex flex-row gap-4">
													<span className="text-lg opacity-70">
														{item.role}
													</span>
													{item.location && (
														<div className="flex flex-row gap-2 items-center">
															<IoLocationOutline size="16" />
															<span className="inline text-lg">
																{item.location}
															</span>
														</div>
													)}
												</div>
											</span>
										</span>
										<PlusIcon
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
			</main>

			<aside className="w-full lg:w-1/2 lg:sticky lg:top-30">
				<div className="w-full rounded-3xl overflow-hidden">
					<Carousel
						containerClassName="min-h-[400px] lg:min-h-[450px]"
						imageClassName="object-cover h-full"
						projects={leader.images}
					/>
				</div>
			</aside>
		</section>
	);
};

export default LeaderProfile;
