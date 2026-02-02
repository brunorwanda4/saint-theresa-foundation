"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import MyImage from "@/components/common/images/MyImage";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import ContactWithUs from "../../about/_component/contact-with-us";
import PublicHealthHero from "./_components/public-health-hero";

const PublicHealthPage = () => {
	const educationPrograms = [
		{
			title: "Nutrition Awareness",
			description:
				"Teaching families how balanced diets improve growth, immunity, and child development through local produce.",
			img: "/images/nutrition.jpg",
		},
		{
			title: "Hygiene Campaigns",
			description:
				"Organizing hygiene drives to promote handwashing, sanitation, and disease prevention in rural communities.",
			img: "/images/hygiene.jpg",
		},
		{
			title: "School Health Programs",
			description:
				"Engaging students and teachers with workshops on hygiene, nutrition, and menstrual health education.",
			img: "/images/school-health.jpg",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				duration: 0.6,
			},
		},
	};

	const slideFromLeftVariants = {
		hidden: { opacity: 0, x: -60 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const fadeInVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const healthTopics = [
		{
			title: "Disease Prevention",
			className: " bg-foreground",
			description:
				"Raising awareness about non-communicable diseases (NCDs) like hypertension and diabetes, as well as HIV prevention.",
		},
		{
			title: "Nutrition and Lifestyle",
			className: " bg-secondary text-foreground",
			description:
				"Providing guidance on healthy lifestyle practices to combat both malnutrition and obesity.",
		},
		{
			title: "Safe Medicine Use",
			className: " bg-primary",
			description:
				"Educating communities on how to use medications correctly and safely.",
		},
		{
			title: "Hygiene and Sanitation",
			className: " bg-muted",
			description:
				"Promoting basic hygiene practices to prevent the spread of infectious diseases.",
		},
	];

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
			},
		},
	};
	return (
		<main className="mx-auto max-w-7xl space-y-8  py-16 px-8">
			<PublicHealthHero />
			<Separator />
			<motion.div
				className=" flex flex-col gap-4 lg:gap-8 lg:flex-row"
				variants={containerVariants}
			>
				<motion.h2 className="h1 lg:w-1/3" variants={slideFromLeftVariants}>
					Core Educational Pillars
				</motion.h2>
				<motion.p
					className=" text-lg font-medium lg:text-xl lg:w-1/2 "
					variants={fadeInVariants}
				>
					The foundation's educational initiatives are categorized into four
					primary areas of focus.
				</motion.p>
			</motion.div>

			<motion.div
				className="grid-cols-1 lg:grid-cols-2 grid gap-4"
				variants={containerVariants}
			>
				{healthTopics.map((program, index) => (
					<motion.div
						key={`${program.title}-${index}`}
						className={cn(
							"rounded-md px-4 lg:px-6 py-4 text-background group  flex flex-col gap-2",
							program.className,
						)}
						variants={itemVariants}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<div className="mt-4 flex flex-row items-center justify-between">
							<h2 className="text-lg font-medium">{program.title}</h2>
							<Plus size={28} className="group-hover:rotate-45 duration-150" />
						</div>
						<p className="">{program.description}</p>
					</motion.div>
				))}
			</motion.div>
			<Separator />
			{/* Programs Section */}
			<section className="">
				<h2 className="h1 mb-8">Our Education Initiatives</h2>
				<div className="grid gap-4 md:grid-cols-3">
					{educationPrograms.map((item, i) => (
						<div
							key={`${i}-${item.title}`}
							className="relative h-80 w-full cursor-pointer duration-200 "
						>
							<MyImage
								src={item.img}
								original
								loading="lazy"
								className="h-full w-full rounded-md"
							/>
							<div className="absolute bottom-0 h-30 w-full bg-black/70 px-4 py-2 rounded-b-md">
								<h4 className="text-primary-foreground font-medium">
									{item.title}
								</h4>
								<p className="text-primary-foreground text-sm">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<ContactWithUs />
		</main>
	);
};

export default PublicHealthPage;
