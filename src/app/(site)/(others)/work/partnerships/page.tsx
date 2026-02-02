"use client";

import { Separator } from "@/components/ui/separator";
import ContactWithUs from "../../about/_component/contact-with-us";
import OurPartners from "./_components/our-partners";
import PartnershipHero from "./_components/partnership-hero";

const PartnershipsPage = () => {
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
