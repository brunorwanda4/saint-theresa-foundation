"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import MyImage from "@/components/common/images/MyImage";
import { Separator } from "@/components/ui/separator";
import ContactWithUs from "../../about/_component/contact-with-us";

const MobileClinicsPage = () => {
	const containerRef = useRef<HTMLElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const introRef = useRef<HTMLParagraphElement>(null);
	const contentSectionRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const contentTextRef = useRef<HTMLDivElement>(null);
	const contentHeadingRef = useRef<HTMLHeadingElement>(null);
	const contentParagraphRef = useRef<HTMLParagraphElement>(null);
	const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Master timeline
			const tl = gsap.timeline();

			// Main heading with dramatic entrance
			if (headingRef.current) {
				tl.fromTo(
					headingRef.current,
					{
						opacity: 0,
						y: -60,
						scale: 0.7,
						rotationX: 45,
					},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						rotationX: 0,
						duration: 1.2,
						ease: "back.out(2)",
					},
				);
			}

			// Introduction paragraph with typewriter effect simulation
			if (introRef.current) {
				tl.fromTo(
					introRef.current,
					{
						opacity: 0,
						y: 40,
						rotationY: 10,
					},
					{
						opacity: 1,
						y: 0,
						rotationY: 0,
						duration: 1,
						ease: "power2.out",
					},
					"-=0.6",
				);
			}

			// Content section with fade up
			if (contentSectionRef.current) {
				tl.fromTo(
					contentSectionRef.current,
					{
						opacity: 0,
						y: 60,
					},
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power2.out",
					},
					"-=0.4",
				);
			}

			// Image with slide and scale animation
			if (imageRef.current) {
				tl.fromTo(
					imageRef.current,
					{
						x: -150,
						opacity: 0,
						scale: 0.8,
						rotationY: 20,
					},
					{
						x: 0,
						opacity: 1,
						scale: 1,
						rotationY: 0,
						duration: 1.2,
						ease: "power2.out",
					},
					"-=0.5",
				);

				// Add continuous subtle floating animation to image
				gsap.to(imageRef.current, {
					y: -10,
					duration: 3,
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
				});
			}

			// Content text with slide from right
			if (contentTextRef.current) {
				tl.fromTo(
					contentTextRef.current,
					{
						opacity: 0,
						x: 80,
					},
					{
						opacity: 1,
						x: 0,
						duration: 1,
						ease: "power2.out",
					},
					"-=0.8",
				);
			}

			// Content heading with bounce
			if (contentHeadingRef.current) {
				tl.fromTo(
					contentHeadingRef.current,
					{
						y: -30,
						opacity: 0,
						scale: 0.9,
					},
					{
						y: 0,
						opacity: 1,
						scale: 1,
						duration: 0.8,
						ease: "back.out(1.7)",
					},
					"-=0.6",
				);
			}

			// Content paragraph
			if (contentParagraphRef.current) {
				tl.fromTo(
					contentParagraphRef.current,
					{
						y: 25,
						opacity: 0,
					},
					{
						y: 0,
						opacity: 1,
						duration: 0.7,
						ease: "power2.out",
					},
					"-=0.5",
				);
			}

			// List items with staggered animation and bounce
			const validListItems = listItemsRef.current.filter(
				Boolean,
			) as HTMLLIElement[];
			if (validListItems.length > 0) {
				tl.fromTo(
					validListItems,
					{
						x: 40,
						opacity: 0,
						scale: 0.7,
					},
					{
						x: 0,
						opacity: 1,
						scale: 1,
						duration: 0.6,
						stagger: 0.2,
						ease: "back.out(1.8)",
					},
					"-=0.4",
				);

				// Add hover effects to list items
				validListItems.forEach((item) => {
					item.addEventListener("mouseenter", () => {
						gsap.to(item, {
							x: 10,
							color: "#3b82f6",
							scale: 1.05,
							duration: 0.3,
							ease: "power2.out",
						});
					});

					item.addEventListener("mouseleave", () => {
						gsap.to(item, {
							x: 0,
							color: "",
							scale: 1,
							duration: 0.3,
							ease: "power2.out",
						});
					});
				});
			}
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const addToListItemsRefs = (el: HTMLLIElement | null, index: number) => {
		listItemsRef.current[index] = el;
	};

	const rwandaHealthStats = [
		{
			category: "Geographical Barriers",
			description:
				"43% of Rwandans live in rural areas with very limited access to traditional medical clinics.",
		},
		{
			category: "Accessibility Crisis",
			description:
				"1 in 3 people lack proper healthcare specifically because of their distance from facilities or financial constraints.",
		},
		{
			category: "Affordability",
			description:
				"82% of the rural poor cannot afford essential medicine, making direct-to-community service a necessity for saving lives.",
		},
	];

	return (
		<main ref={containerRef} className="min-h-screen py-16">
			<div className="space-y-4 flex flex-col lg:flex-row lg:space-x-8 global-px">
				<h1 ref={headingRef} className="h1  lg:w-1/2">
					Mobile Clinics
				</h1>
				<p ref={introRef} className="p lg:w-1/2">
					The Sainte Thérèsa Foundation uses mobile clinics as a primary
					strategic tool to bring quality healthcare directly to vulnerable and
					"hard-to-reach" populations in rural Rwanda. These units serve as an
					extension of the Sainte Thérèse Polyclinic, moving beyond the
					hospital's walls to provide community-based care.
				</p>
			</div>
			<Separator className="mt-8" />
			<section
				ref={contentSectionRef}
				className="global-px mt-4 space-y-8  py-6 "
			>
				<div className="items-center gap-12 flex flex-col lg:flex-row-reverse">
					<div
						ref={imageRef}
						className="overflow-hidden rounded-xl lg:w-1/2 w-full"
					>
						<MyImage
							src="/images/ambulance.jpg"
							alt="Mobile Clinic"
							className="h-80 w-full cursor-pointer object-cover shadow-2xl transition-all duration-700 hover:scale-110 hover:rotate-1"
							loading="lazy"
						/>
					</div>
					<div ref={contentTextRef} className="space-y-6 lg:w-1/2">
						<h2 ref={contentHeadingRef} className="h2">
							The Urgent Need for Mobile Units
						</h2>
						<p ref={contentParagraphRef} className="p">
							The foundation's commitment to mobile healthcare is driven by
							significant gaps in the current health system:
						</p>
						<ul className=" space-y-3 text-lg">
							{rwandaHealthStats.map((item, index) => (
								<li
									key={`${index}-${item.description}`}
									ref={(el) => addToListItemsRefs(el, index)}
									className="flex flex-col items-start space-y-1"
								>
									<h3 className="h3">{item.category}</h3>
									<p className="sm">{item.description}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<div className=" global-px mt-8">
				<ContactWithUs />
			</div>
		</main>
	);
};

export default MobileClinicsPage;
