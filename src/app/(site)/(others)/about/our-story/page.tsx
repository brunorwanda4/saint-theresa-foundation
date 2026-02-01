"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ContactWithUs from "../_component/contact-with-us";
import MilestonesAndProvenImpact from "./_components/milestones-and-proven-impact";
import VisionForTheUnderserved from "./_components/vision-for-the-underserved";

const OurStory = () => {
	return (
		<section className=" px-8 mt-12 space-y-8">
			<div className=" flex flex-col lg:flex-row gap-8">
				<h1 className="h1 lg:w-1/2">The Foundation’s Roots (2013–2019)</h1>
				<p className="p lg:w-1/2">
					The story began in <strong>2013</strong> with the establishment of the
					<strong>Sainte Thérèse Polyclinic</strong> in Rwamagana, Rwanda.
					Founded by AHAYO Marie Anita a public health expert with 20 years of
					experience the clinic grew into a trusted regional hub serving
					approximately <strong>50,000 patients annually</strong> with
					specialized services like radiology and gastro-endoscopy. <br />{" "}
					<br /> In <strong>2019</strong>, the mission expanded with the
					creation of <strong>TRUST Pharmalab</strong>, a wholesale
					pharmaceutical company designed to strengthen the medical supply chain
					across Rwanda and neighboring countries like Congo and Burundi.
				</p>
			</div>
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
						src={"/images/our/ahayo-2.jpg"}
						alt="Our Team"
						className="object-cover rounded-2xl"
						priority
					/>
				</div>
			</motion.div>
			<Separator />
			<VisionForTheUnderserved />
			<Separator />
			<MilestonesAndProvenImpact />
			<ContactWithUs />
		</section>
	);
};

export default OurStory;
