"use client";
import Image from "next/image";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import LeadershipTeam from "../../_components/home/leadership-team";
import ContactWithUs from "./_component/contact-with-us";
import OurHistories from "./_component/our-histories";
import OurImages from "./_component/our-images";
import ThingsWeDid from "./_component/things-we-did";

export default function AboutPage() {
	const headerRef = useRef<HTMLDivElement>(null);

	return (
		<main className="min-h-screen py-8 space-y-8 px-8">
			<div className=" flex justify-between  items-end w-full mt-12">
				<div className=" lg:min-w-1/2 hidden lg:block" />
				<div ref={headerRef} className=" mb-8 flex flex-col w-full">
					<h1 className=" h1 max-w-2xl">
						Bringing the Healing Hand of Service to the Hard-to-Reach
					</h1>
					<p className="max-w-2xl leading-relaxed p mt-12">
						The <strong>Sainte Thérèse Foundation</strong> is a faith-driven
						initiative founded by seasoned humanitarian professionals to bridge
						the gap between quality medical care and the world's most vulnerable
						populations. Rooted in the <strong>"little way"</strong> of St.
						Thérèse of Lisieux, we view healthcare as a sacred duty and a humble
						contribution to the <strong>healing ministry of Christ.</strong>
					</p>
				</div>
			</div>

			<div className="  ">
				<div className="max-w-[1280px] mx-auto w-full relative flex-shrink-0 h-screen">
					<Image
						fill
						quality={95}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
						src={"/images/our/we.jpg"}
						alt="Our Team"
						className="object-cover rounded-2xl"
						priority
					/>
				</div>
			</div>
			<div className=" flex flex-col lg:flex-row lg:gap-16 gap-8">
				<div className=" lg:w-1/2">
					<h2 className="h1">
						Extending the Healing Hand of Service to the Hard-to-Reach
					</h2>
				</div>
				<div className=" lg:w-1/2 flex flex-col gap-4 lg:gap-8">
					<p className="text-lg font-medium">
						Who We Are The Sainte Thérèse Foundation is a faith-driven,
						nonprofit initiative that serves as an extension of the Sainte
						Thérèse Polyclinic, which currently provides care to approximately
						40,000 to 50,000 patients annually.
					</p>
					<p className="text-lg font-medium opacity-80">
						Founded by seasoned humanitarian professionals, we blend global
						strategic vision with local, hands-on action to bring healthcare
						closer to vulnerable rural communities.
					</p>
				</div>
			</div>
			<Separator className="mx-8" />
			<ThingsWeDid />
			<OurHistories />
			<Separator />
			<OurImages />
			<LeadershipTeam />
			<Separator />
			<ContactWithUs />
		</main>
	);
}
