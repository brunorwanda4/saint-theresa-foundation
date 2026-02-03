"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ThingsWeDid = () => {
	const thingsWeDid = [
		{
			title: "Annual Patients Served",
			total: "50,000+",
			description:
				"Providing quality healthcare through our established partner polyclinic in Rwamagana.",
			image: "/icons/patient.png",
			className: " bg-muted-foreground text-background",
		},
		{
			title: "Outreach Beneficiaries",
			total: "800+",
			description:
				"Vulnerable individuals reached during our specialized preventive health screening missions.",
			image: "/icons/reach.png",
			className: " bg-foreground text-background",
		},
		{
			title: "Years of Medical Excellence",
			total: "13+",
			description:
				"Serving the Eastern Province community with dedicated medical care since 2013.",
			image: "/icons/calendar.png",
			className: " bg-secondary text-background",
		},
		{
			title: "Essential Health Screenings",
			total: "4",
			description:
				"Free diagnostic services provided for BMI, blood pressure, glucose levels, and HIV.",
			image: "/icons/essential-oil.png",
			className:
				"bg-gradient-to-br from-primary to-info  from-10% to-90% text-background",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
			}
		}
	};

	const cardVariants = {
		hidden: { 
			opacity: 0, 
			y: 50,
			scale: 0.9
		},
		visible: { 
			opacity: 1, 
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6
			}
		}
	};

	return (
		<motion.div 
			className=" "
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
		>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{thingsWeDid.map((thing, index) => (
					<motion.div
						key={thing.title}
						className={cn(
							"group min-h-44 lg:min-h-52 p-4 bg-primary rounded-md flex flex-col justify-between",
							thing.className,
						)}
						variants={cardVariants}
						whileHover={{ 
							scale: 1.02,
							transition: { duration: 0.2 }
						}}
					>
						<div>
							<p className="opacity-80">{thing.title}</p>
							<p className="text-sm">{thing.description}</p>
						</div>
						<div className="flex items-end justify-between">
							<motion.span 
								className="h1"
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
							>
								{thing.total}
							</motion.span>
							<Image
								src={thing.image}
								alt={thing.title}
								width={32}
								height={32}
								loading="lazy"
								className="invert group-hover:animate-bounce"
							/>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default ThingsWeDid;
