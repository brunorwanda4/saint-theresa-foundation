"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SiteLink from "@/components/common/site/site-link";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

export default function DonatePage() {
	const containerRef = useRef<HTMLElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const supportSectionRef = useRef<HTMLDivElement>(null);
	const supportHeadingRef = useRef<HTMLHeadingElement>(null);
	const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
	const bankDetailsRef = useRef<HTMLDivElement>(null);
	const bankItemsRef = useRef<(HTMLParagraphElement | null)[]>([]);
	const buttonRef = useRef<HTMLAnchorElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Main heading with scroll trigger
			if (headingRef.current) {
				gsap.fromTo(
					headingRef.current,
					{ opacity: 0, y: 50, scale: 0.9 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 1,
						ease: "back.out(1.7)",
						scrollTrigger: {
							trigger: headingRef.current,
							start: "top 80%",
							toggleActions: "play none none none",
						},
					},
				);
			}

			// Description
			if (descriptionRef.current) {
				gsap.fromTo(
					descriptionRef.current,
					{ opacity: 0, y: 30 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: "power2.out",
						scrollTrigger: {
							trigger: descriptionRef.current,
							start: "top 85%",
							toggleActions: "play none none none",
						},
					},
				);
			}

			// Support section container
			if (supportSectionRef.current) {
				gsap.fromTo(
					supportSectionRef.current,
					{ opacity: 0, y: 40 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: "power2.out",
						scrollTrigger: {
							trigger: supportSectionRef.current,
							start: "top 80%",
							toggleActions: "play none none none",
						},
					},
				);
			}

			// Support heading
			if (supportHeadingRef.current) {
				gsap.fromTo(
					supportHeadingRef.current,
					{ x: -30, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.7,
						ease: "power2.out",
						scrollTrigger: {
							trigger: supportHeadingRef.current,
							start: "top 85%",
							toggleActions: "play none none none",
						},
					},
				);
			}

			// Support list items
			const validListItems = listItemsRef.current.filter(
				Boolean,
			) as HTMLLIElement[];
			if (validListItems.length > 0) {
				gsap.fromTo(
					validListItems,
					{ x: -40, opacity: 0, scale: 0.95 },
					{
						x: 0,
						opacity: 1,
						scale: 1,
						duration: 0.6,
						stagger: 0.15,
						ease: "power2.out",
						scrollTrigger: {
							trigger: validListItems[0],
							start: "top 85%",
							toggleActions: "play none none none",
						},
					},
				);
			}

			// Bank details
			if (bankDetailsRef.current) {
				gsap.fromTo(
					bankDetailsRef.current,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						duration: 0.6,
						ease: "power2.out",
						scrollTrigger: {
							trigger: bankDetailsRef.current,
							start: "top 85%",
							toggleActions: "play none none none",
						},
					},
				);
			}

			// Bank items
			const validBankItems = bankItemsRef.current.filter(
				Boolean,
			) as HTMLParagraphElement[];
			if (validBankItems.length > 0) {
				gsap.fromTo(
					validBankItems,
					{ x: -20, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.5,
						stagger: 0.1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: validBankItems[0],
							start: "top 90%",
							toggleActions: "play none none none",
						},
					},
				);
			}

			// Button
			if (buttonRef.current) {
				gsap.fromTo(
					buttonRef.current,
					{ scale: 0, opacity: 0, rotation: -10 },
					{
						scale: 1,
						opacity: 1,
						rotation: 0,
						duration: 0.6,
						ease: "back.out(1.8)",
						scrollTrigger: {
							trigger: buttonRef.current,
							start: "top 90%",
							toggleActions: "play none none none",
						},
					},
				);
			}
		}, containerRef);

		return () => ctx.revert();
	}, []);

	// Helper functions remain the same
	const addToListItemsRefs = (el: HTMLLIElement | null, index: number) => {
		listItemsRef.current[index] = el;
	};

	const addToBankItemsRefs = (
		el: HTMLParagraphElement | null,
		index: number,
	) => {
		bankItemsRef.current[index] = el;
	};

	return (
		<section ref={containerRef} className="min-h-screen py-8">
			<div className="global-px">
				<h1
					ref={headingRef}
					className="text-foreground mb-2 text-4xl font-bold"
				>
					Make a Difference Today
				</h1>

				<p ref={descriptionRef} className="mb-8">
					Your contribution helps us provide healthcare, training, and hope to
					underserved communities across Rwanda.
				</p>
			</div>

			<div
				ref={supportSectionRef}
				className="bg-foreground global-px text-primary-foreground py-8"
			>
				<div className="mx-auto rounded-3xl">
					<h2
						ref={supportHeadingRef}
						className="text-primary-foreground mb-4 text-2xl font-semibold"
					>
						Ways to Support
					</h2>

					<ul className="mb-8 space-y-3">
						<li ref={(el) => addToListItemsRefs(el, 0)}>
							&#128179; One-time or recurring online donations
						</li>
						<li ref={(el) => addToListItemsRefs(el, 1)}>
							&#127974; Bank transfer or mobile money (details below)
						</li>
						<li ref={(el) => addToListItemsRefs(el, 2)}>
							&#127873; In-kind donations (medical supplies, food, or equipment)
						</li>
					</ul>

					<div ref={bankDetailsRef} className="space-y-1">
						<p ref={(el) => addToBankItemsRefs(el, 0)}>
							<strong>Account Name:</strong> Sainte Thérèse Foundation
						</p>
						<p ref={(el) => addToBankItemsRefs(el, 1)}>
							<strong>Bank:</strong> Bank of Kigali
						</p>
						<p ref={(el) => addToBankItemsRefs(el, 2)}>
							<strong>Account No:</strong> 0123-456-789
						</p>
						<p ref={(el) => addToBankItemsRefs(el, 3)}>
							<strong>Mobile Money:</strong> +250 78 000 0000
						</p>
					</div>

					<SiteLink
						ref={buttonRef}
						className="text-primary-foreground mt-3 inline-block rounded-full px-8 py-3 font-semibold transition hover:scale-105 hover:shadow-lg"
						link="/contact"
					>
						Contact Us for Support
					</SiteLink>
				</div>
			</div>
		</section>
	);
}
