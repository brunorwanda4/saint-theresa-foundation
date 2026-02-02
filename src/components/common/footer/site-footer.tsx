"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const footerSections = [
	{
		title: "About Us",
		links: [
			{ name: "Foundation Story", href: "/about" },
			{
				name: "Connection to Sainte Thérèse Polyclinic",
				href: "/about/polyclinic",
			},
			{ name: "Leadership bios & photos", href: "/about/team" },
			{ name: "Vision, mission, and values", href: "/about/vision-mission" },
			{ name: "Timeline 2013–2027", href: "/about/timeline" },
		],
	},
	{
		title: "Programs",
		links: [
			{ name: "Mobile Clinics", href: "/work/mobile-clinics" },
			{ name: "Digital Health Platform", href: "/work/digital-health" },
			{ name: "Public Health Education", href: "/work/public-health" },
			{ name: "Community Capacity Building", href: "/work/training" },
			{ name: "Partnerships and Advocacy", href: "/work/partnerships" },
		],
	},
	{
		title: "Digital Health",
		links: [
			{
				name: "Pharmacy locator & medicine availability",
				href: "/digital-health/locator",
			},
			{
				name: "Health record access (for future integration)",
				href: "/digital-health/records",
			},
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Articles, videos, and Images", href: "/impact/gallery" },
			{
				name: "Workshops & community event reports",
				href: "/biography/training",
			},
		],
	},
	{
		title: "Get Involved",
		links: [
			{ name: "Donation system", href: "/get-involved/donate" },
			{ name: "Volunteer sign-up", href: "/get-involved/volunteer" },
			{ name: "Partnership requests", href: "/get-involved/partner" },
			{ name: "Prayer support / spiritual engagement", href: "/spiritual" },
		],
	},
];

const socialMedias = [
	{ name: "WhatsApp", icon: "/icons/whatsapp.png", href: "" },
	{ name: "Email", icon: "/icons/gmail.png", href: "" },
	{ name: "Facebook", icon: "/icons/facebook.png", href: "" },
	{ name: "Instagram", icon: "/icons/instagram.png", href: "" },
	{ name: "Twitter", icon: "/icons/twitter.png", href: "" },
	{ name: "LinkedIn", icon: "/icons/linkedin.png", href: "" },
	{ name: "YouTube", icon: "/icons/youtube.png", href: "" },
];

export default function SiteFooter() {
	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<footer className="bg-foreground text-background py-8 px-6 md:px-12 lg:px-20">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
					<div className="lg:col-span-3">
						<Link href="/">
							<Image
								src="/logo.png"
								alt="Sainte Theresa Foundation"
								width={200}
								height={80}
								className="object-contain"
							/>
						</Link>
					</div>

					<div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
						{footerSections.map((section) => (
							<div key={section.title}>
								<h3 className="text-[#f1b434] font-semibold text-lg mb-4">
									{section.title}
								</h3>
								<ul className="space-y-2">
									{section.links.map((link) => (
										<li key={link.name}>
											<Link
												href={link.href}
												className="text-gray-300 hover:text-white text-sm transition-colors"
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="lg:col-span-3 flex flex-col items-end gap-10">
						<Button
							onClick={scrollToTop}
							variant="outline"
							className=" bg-foreground hover:bg-background hover:text-foreground duration-150 cursor-pointer rounded-full size-10"
						>
							<FaArrowUp size={20} />
						</Button>

						<div className="bg-[#334155]/40 border border-white/10 p-6 rounded-2xl w-full max-w-[300px]">
							<p className="text-sm text-gray-200 mb-4">
								Talk to our community support experts
							</p>
							<Link
								href="/contact"
								className="flex items-center justify-between w-full border border-white/40 py-2 px-4 rounded-lg hover:bg-white hover:text-[#001f31] transition-all font-medium"
							>
								Contact Us <FiArrowUpRight />
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-5 flex-row">
						{socialMedias.map((socialMedia) => (
							<Link
								key={socialMedia.name}
								href={socialMedia.href}
								className="text-2xl hover:scale-110 transition-transform"
							>
								<div className=" size-8 relative">
									<Image
										loading="lazy"
										fill
										src={socialMedia.icon}
										alt={socialMedia.name}
									/>
								</div>
								<span className="sr-only">{socialMedia.name}</span>
							</Link>
						))}
					</div>
					<p className="text-xs text-gray-400 italic">
						© 2025 Sainte Thérèse Foundation
					</p>
				</div>
			</div>
		</footer>
	);
}
