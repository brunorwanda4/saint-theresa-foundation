"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import ContactWithUs from "../../about/_component/contact-with-us";

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
	const buttonRef = useRef<HTMLAnchorElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
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
						},
					},
				);
			}

			if (descriptionRef.current) {
				gsap.fromTo(
					descriptionRef.current,
					{ opacity: 0, y: 30 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						scrollTrigger: {
							trigger: descriptionRef.current,
							start: "top 85%",
						},
					},
				);
			}

			if (supportSectionRef.current) {
				gsap.fromTo(
					supportSectionRef.current,
					{ opacity: 0, y: 40 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						scrollTrigger: {
							trigger: supportSectionRef.current,
							start: "top 80%",
						},
					},
				);
			}

			const items = listItemsRef.current.filter(Boolean) as HTMLLIElement[];
			if (items.length) {
				gsap.fromTo(
					items,
					{ x: -40, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						stagger: 0.15,
						duration: 0.6,
						scrollTrigger: {
							trigger: items[0],
							start: "top 85%",
						},
					},
				);
			}

			if (buttonRef.current) {
				gsap.fromTo(
					buttonRef.current,
					{ scale: 0, opacity: 0 },
					{
						scale: 1,
						opacity: 1,
						duration: 0.6,
						ease: "back.out(1.8)",
						scrollTrigger: {
							trigger: buttonRef.current,
							start: "top 90%",
						},
					},
				);
			}
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const maskRevealVariants = {
		hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
		visible: {
			clipPath: "inset(0 0% 0 0)",
			opacity: 1,
		},
	};

	return (
		<section ref={containerRef} className="min-h-screen py-12 px-8 space-y-12">
			<div className=" flex justify-between  items-end w-full mt-12">
				<div className=" lg:min-w-1/2 hidden lg:block" />
				<div className=" mb-8 flex flex-col w-full">
					<motion.h1
						className=" h1 max-w-2xl"
						variants={maskRevealVariants}
						initial="hidden"
						animate="visible"
						transition={{ duration: 1.2, ease: "easeInOut" }}
					>
						Support Community Health & Equity
					</motion.h1>
					<motion.p
						className="max-w-2xl leading-relaxed p mt-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						By supporting the <strong>Sainte Thérèsa Foundation</strong>, you
						help address a critical crisis where{" "}
						<strong>82% of the rural poor</strong> cannot afford essential
						medicine and <strong>1 in 3 people</strong> lack access to basic
						healthcare across Rwanda and Kenya.
					</motion.p>
				</div>
			</div>

			{/* Support Section */}
			<div
				ref={supportSectionRef}
				className="bg-foreground text-primary-foreground rounded-3xl p-8 flex"
			>
				<div className="max-w-2xl">
					<h2 ref={supportHeadingRef} className="h1  mb-6">
						How You Can Support Our Mission
					</h2>

					<ul className="space-y-4 leading-relaxed ">
						<li ref={(el) => { listItemsRef.current[0] = el; }} className="p">
							<strong>• Financial Contributions (Impact Tiers):</strong> Support
							our Community Health and Access Initiative with a total budget of{" "}
							<strong>271,040,000 RWF (~$186,500 USD)</strong>, including mobile
							medical vehicles, community pharmacies, health screenings, and
							digital health platforms.
						</li>

						<li ref={(el) => { listItemsRef.current[1] = el; }} className="p">
							<strong>• Strategic Partnerships:</strong> Collaborate with us
							through faith-based networks, pharmaceutical and logistics firms,
							and development organizations to ensure sustainable healthcare
							delivery.
						</li>

						<li ref={(el) => { listItemsRef.current[2] = el; }} className="p">
							<strong>• Capacity Building & Training:</strong> Fund training for
							community health workers and public education on nutrition,
							hygiene, and disease prevention under our 2025–2027 plan.
						</li>

						<li ref={(el) => { listItemsRef.current[3] = el; }} className="p">
							<strong>• Professional & Advocacy Support:</strong> Contribute
							expertise, staffing, and advocacy to strengthen our institutional
							capacity and global health engagement.
						</li>
					</ul>

					<SiteLink ref={buttonRef} link="/contact" className="mt-8 ">
						Partner or Donate With Us
					</SiteLink>
				</div>
				<MyImage
					src="/icons/doctor-tool.png"
					className=" size-96"
					classname=" object-contain"
				/>
			</div>
			<ContactWithUs />
		</section>
	);
}
