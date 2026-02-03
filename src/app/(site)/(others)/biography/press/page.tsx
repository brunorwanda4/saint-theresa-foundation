"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function PressBioPage() {
	const containerRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);
	const pressReleasesRef = useRef<(HTMLDivElement | null)[]>([]);

	const releases = [
		{
			title:
				"Community Preventive Health Screening – Rwamagana Outreach Report",
			date: "December 21, 2025",
			description:
				"Impact report highlighting operational readiness, screening of over 800 beneficiaries, and identification of undiagnosed hypertension, diabetes, and HIV risks.",
		},
		{
			title: "2025–2027 Strategic Action Plan & Advocacy Framework",
			date: "January 2025",
			description:
				"Public communication of the foundation’s long-term vision, national and international advocacy goals, and alignment with Rwanda’s health priorities.",
		},
		{
			title: "Call for Partnership: Extending the Healing Hand of Service",
			date: "Ongoing",
			description:
				"An open invitation to Christian philanthropies and development partners to collaborate in improving rural access to essential healthcare and medicines.",
		},
	];

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();

			if (headerRef.current) {
				tl.fromTo(
					headerRef.current,
					{ opacity: 0, y: -40 },
					{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
				);
			}

			if (headingRef.current) {
				tl.fromTo(
					headingRef.current,
					{ scale: 0.85, opacity: 0 },
					{
						scale: 1,
						opacity: 1,
						duration: 0.8,
						ease: "back.out(1.6)",
					},
					"-=0.5",
				);
			}

			if (paragraphRef.current) {
				tl.fromTo(
					paragraphRef.current,
					{ y: 20, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
					"-=0.3",
				);
			}

			const validPressReleases = pressReleasesRef.current.filter(
				Boolean,
			) as HTMLDivElement[];

			if (validPressReleases.length > 0) {
				tl.fromTo(
					validPressReleases,
					{ x: -60, opacity: 0, scale: 0.95 },
					{
						x: 0,
						opacity: 1,
						scale: 1,
						duration: 0.8,
						stagger: 0.2,
						ease: "power2.out",
					},
				);

				validPressReleases.forEach((card) => {
					card.addEventListener("mouseenter", () => {
						gsap.to(card, {
							x: 10,
							borderLeftWidth: "6px",
							borderLeftColor: "#2563eb",
							duration: 0.3,
							ease: "power2.out",
						});
					});

					card.addEventListener("mouseleave", () => {
						gsap.to(card, {
							x: 0,
							borderLeftWidth: "4px",
							borderLeftColor: "#9ca3af",
							duration: 0.3,
							ease: "power2.out",
						});
					});
				});
			}
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const addToPressReleasesRefs = (el: HTMLDivElement | null, index: number) => {
		pressReleasesRef.current[index] = el;
	};

	return (
		<section ref={containerRef} className="global-px min-h-screen py-10">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-8 global-px mb-8 max-w-5xl">
				<motion.h1 className="h1 lg:w-1/2">
					{" "}
					Public Reports & Outreach Communications
				</motion.h1>
				<p className="lg:w-1/2 max-w-2xl leading-relaxed">
					Transparency-driven updates from the Sainte Thérèse Foundation,
					sharing milestones, community impact, and strategic calls to action
					with the public and partners.
				</p>
			</div>

			<div className="max-w-3xl space-y-6">
				{releases.map((r, i) => (
					<div
						key={r.title}
						ref={(el) => addToPressReleasesRefs(el, i)}
						className="cursor-pointer rounded-lg border-l-4 border-gray-400 bg-white py-5 pl-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
					>
						<h3 className="mb-2 h3">{r.title}</h3>
						<p className="mb-2  text-gray-500">{r.date}</p>
						<p className="p">{r.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
