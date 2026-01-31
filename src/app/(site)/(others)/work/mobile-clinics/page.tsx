"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import MyImage from "@/components/common/images/MyImage";

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

	return (
		<main ref={containerRef} className="min-h-screen py-16">
			<h1
				ref={headingRef}
				className="text-foreground global-px bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-4xl font-bold text-transparent"
			>
				Mobile Clinics
			</h1>
			<section
				ref={contentSectionRef}
				className="bg-foreground text-primary-foreground global-px mt-4 space-y-8 rounded-lg py-6 shadow-xl"
			>
				<div className="space-y-8">
					<p ref={introRef} className="text-lg leading-relaxed">
						Our mobile clinics bring essential healthcare directly to people
						living in remote and underserved communities – bridging the gap
						between medical access and those in need.
					</p>
				</div>

				<div className="grid items-center gap-12 md:grid-cols-2">
					<div ref={imageRef} className="overflow-hidden rounded-xl">
						<MyImage
							src="/images/mobile-clinic.jpg"
							alt="Mobile Clinic"
							className="h-80 w-full cursor-pointer object-cover shadow-2xl transition-all duration-700 hover:scale-110 hover:rotate-1"
							loading="lazy"
						/>
					</div>
					<div ref={contentTextRef} className="space-y-6">
						<h2
							ref={contentHeadingRef}
							className="text-primary-foreground text-3xl font-bold"
						>
							How It Works
						</h2>
						<p
							ref={contentParagraphRef}
							className="text-primary-content text-lg leading-relaxed"
						>
							Our vans are equipped with medical tools, diagnostics, and trained
							health professionals to provide maternal care, vaccinations, and
							emergency consultations.
						</p>
						<ul className="text-primary-content space-y-3 text-lg">
							<li
								ref={(el) => addToListItemsRefs(el, 0)}
								className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-white/10"
							>
								<span className="text-2xl">&#127973;</span>
								On-site check-ups and basic treatments
							</li>
							<li
								ref={(el) => addToListItemsRefs(el, 1)}
								className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-white/10"
							>
								<span className="text-2xl">&#128202;</span>
								Community health data collection
							</li>
							<li
								ref={(el) => addToListItemsRefs(el, 2)}
								className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-white/10"
							>
								<span className="text-2xl">&#128101;</span>
								Health awareness & hygiene sessions
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
};

export default MobileClinicsPage;
