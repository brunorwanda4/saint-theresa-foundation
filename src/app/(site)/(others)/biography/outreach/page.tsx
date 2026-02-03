"use client";
import { motion } from "framer-motion";
import { Activity, Heart, MapPin, Users } from "lucide-react";
import Image from "next/image";
import MyImage from "@/components/common/images/MyImage";
import SiteLink from "@/components/common/site/site-link";
import { cn } from "@/lib/utils";

export default function OutreachBioPage() {
	const stats = [
		{
			icon: Users,
			label: "Communities Served",
			value: "85+",
			className: "bg-muted",
		},
		{
			icon: Heart,
			label: "Patients Reached",
			value: "40,000+",
			className: "bg-primary",
		},
		{
			icon: Activity,
			label: "Mobile Clinics",
			value: "120+",
			className: "bg-secondary",
		},
		{
			icon: MapPin,
			label: "Districts Covered",
			value: "12",
			className: "bg-foreground",
		},
	];

	const stories = [
		{
			name: "Nyamasheke Mission",
			desc: "In partnership with local parishes, our team provided maternal health care and child immunization for over 500 families.",
			img: "/images/image-8-a.jpeg",
		},
		{
			name: "Kayonza Initiative",
			desc: "Our volunteers distributed essential medication and hygiene kits while offering health education to over 700 villagers.",
			img: "/images/image-11-a.jpeg",
		},
	];

	return (
		<main className="min-h-screen py-8 global-px  space-y-8">
			<header className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-8 max-w-5xl">
				<motion.h1 className="h1 lg:w-1/2">Community Outreach</motion.h1>
				<p className="lg:w-1/2 max-w-2xl leading-relaxed">
					The Sainte Thérèsa Foundation's strategic initiative to bring{" "}
					<strong>preventive healthcare</strong>, medical screenings, and health
					education directly to underserved, rural, and peri-urban populations
					who live far from traditional clinics. These missions aim to close the
					gap for the <strong>one in three people</strong> who currently lack
					access to proper healthcare due to geographical or financial barriers.
				</p>
			</header>

			<motion.div
				className="  "
				initial={{ scale: 1.1, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				<div className="max-w-[1280px] mx-auto w-full relative flex-shrink-0 h-screen">
					<Image
						fill
						quality={95}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
						src={"/images/d/15.jpg"}
						alt="Our Team"
						className="object-cover rounded-2xl"
						priority
					/>
				</div>
			</motion.div>
			{/* Header Section */}
			<p className="p max-w-2xl">
				Our outreach missions travel to rural communities where access to
				healthcare is limited. Through mobile clinics, pharmacies, and dedicated
				volunteers, we deliver free consultations, essential medicines, and
				preventive education.
				<br />
				Every mission is guided by St. Thérèse's belief – "Do small things with
				great love." From small villages to refugee settlements, our teams bring
				healing and hope wherever it's needed most.
			</p>
			<section className=""></section>

			{/* Stats Section */}
			<section className="">
				<div className="mx-auto grid grid-cols-2 gap-4  md:grid-cols-4">
					{stats.map((item, i) => (
						<div
							key={i}
							className={cn(
								"border-foreground text-background text-start min-h-44 justify-between flex flex-col p-6  transition hover:scale-105 ",
								item.className,
							)}
						>
							<p className=" opacity-70">{item.label}</p>
							<div className=" mb-2  flex justify-between items-end">
								<h3 className="h1">{item.value}</h3>
								<item.icon size={32} />
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Stories Section */}
			<section className="px-6 py-8 md:px-12">
				<h2 className="mb-8 text-3xl font-semibold">Outreach in Action</h2>

				<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
					{stories.map((story, i) => (
						<div key={i} className="relative h-96 w-full ">
							<MyImage
								original
								loading="lazy"
								className="h-full w-full"
								src={story.img}
								alt={story.name}
							/>
							<div className="absolute bottom-0 h-fit w-full bg-black/70 px-4 py-2">
								<h3 className="text-primary-foreground font-medium">
									{story.name}
								</h3>
								<p className="text-primary-foreground mt-2">{story.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Volunteer Call Section */}
			<section className="bg-foreground text-primary-foreground mt-20 py-8 text-center rounded-2xl">
				<div className="mx-auto max-w-3xl">
					<h2 className="mb-4 text-3xl font-semibold">
						Become a Volunteer of Hope
					</h2>
					<p className="text-primary-foreground mb-8">
						Join our next mission to bring care to those who need it most. Every
						helping hand makes a difference.
					</p>
					<SiteLink link="/contact">Join a Mission</SiteLink>
				</div>
			</section>
		</main>
	);
}
