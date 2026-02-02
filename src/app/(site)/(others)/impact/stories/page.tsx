"use client";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import ContactWithUs from "../../about/_component/contact-with-us";
import OurStoriesImages from "./_components/our-stories-images";
import StoriesWeDid from "./_components/stories-we-did";

export default function StoriesPage() {
	return (
		<main className="min-h-screen py-8 pt-24 lg:gap-y-16 gap-8 flex flex-col global-px">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-8  mb-8 max-w-5xl">
				<motion.h1 className="h1 lg:w-1/2"> Stories of Hope</motion.h1>
				<p className="lg:w-1/2 max-w-2xl leading-relaxed">
					The Sainte Thérèsa Foundation through the lives of over 800
					beneficiaries who were reached during a major community health
					screening on December 21, 2025.
				</p>
			</div>
			<OurStoriesImages />
			<Separator />
			<StoriesWeDid />
			<ContactWithUs />
		</main>
	);
}
