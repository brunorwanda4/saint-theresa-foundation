"use client";

import gsap from "gsap";
import {
	Building2,
	Globe,
	GraduationCap,
	Handshake,
	HeartPulse,
	Hospital,
	Users,
} from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import SiteLink from "@/components/common/site/site-link";
import { Separator } from "@/components/ui/separator";
import ContactWithUs from "../../about/_component/contact-with-us";
import OurPartners from "./_components/our-partners";
import PartnershipHero from "./_components/partnership-hero";

const PartnershipsPage = () => {
	// Create refs for animated elements
	const titleRef = useRef<HTMLHeadingElement>(null);
	const introRef = useRef<HTMLParagraphElement>(null);
	const partnerCardsRef = useRef<(HTMLDivElement | null)[]>([]);
	const testimonialsTitleRef = useRef<HTMLHeadingElement>(null);
	const testimonialCardsRef = useRef<(HTMLQuoteElement | null)[]>([]);
	const ctaRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLElement>(null);

	// Add partner card to refs array
	const addToPartnerCardsRef = (el: HTMLDivElement | null, index: number) => {
		partnerCardsRef.current[index] = el;
	};

	// Add testimonial card to refs array
	const addToTestimonialCardsRef = (
		el: HTMLQuoteElement | null,
		index: number,
	) => {
		testimonialCardsRef.current[index] = el;
	};

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Create animation timeline
			const tl = gsap.timeline();

			// Animate title and intro
			tl.from(titleRef.current, {
				opacity: 0,
				y: -20,
				duration: 0.8,
				ease: "power2.out",
			})
				.from(
					introRef.current,
					{
						opacity: 0,
						y: 20,
						duration: 0.6,
						ease: "power2.out",
					},
					"-=0.4",
				)
				// Animate partner cards with stagger
				.from(
					partnerCardsRef.current,
					{
						y: 50,
						opacity: 0,
						duration: 0.7,
						stagger: 0.1,
						ease: "power2.out",
					},
					"-=0.3",
				)
				// Animate testimonials title
				.from(
					testimonialsTitleRef.current,
					{
						opacity: 0,
						y: 30,
						duration: 0.6,
						ease: "power2.out",
					},
					"-=0.2",
				)
				// Animate testimonial cards with stagger
				.from(
					testimonialCardsRef.current,
					{
						y: 40,
						opacity: 0,
						duration: 0.6,
						stagger: 0.15,
						ease: "power2.out",
					},
					"-=0.3",
				)
				// Animate CTA section
				.from(
					ctaRef.current,
					{
						y: 30,
						opacity: 0,
						duration: 0.7,
						ease: "back.out(1.4)",
					},
					"-=0.4",
				);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	// Hover animations for partner cards
	const handlePartnerCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
		gsap.to(e.currentTarget, {
			y: -5,
			scale: 1.03,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handlePartnerCardHoverOut = (e: React.MouseEvent<HTMLDivElement>) => {
		gsap.to(e.currentTarget, {
			y: 0,
			scale: 1,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	return (
		<main className="mx-auto max-w-7xl space-y-8  py-16 px-8">
			<PartnershipHero />
			<Separator />
			<OurPartners />

			<ContactWithUs />
		</main>
	);
};

export default PartnershipsPage;
