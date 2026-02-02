"use client";
import { Separator } from "@/components/ui/separator";
import ContactWithUs from "../_component/contact-with-us";
import LeaderProfile from "./_components/LeaderProfile";
import OperationalTeam from "./_components/operational-team";
import TeamHero from "./_components/team-hero";
import { leadersData } from "./_data/leadersData";

const OurTeamPage = () => {
	return (
		<main className=" px-8 mt-12 space-y-8 lg:space-y-12">
			<TeamHero />
			<section>
				<div className=" space-y-2">
					<h1 className="h1">Core Leadership</h1>
					<p className="p lg:max-w-xl">
						Our leadership blends high-level strategic vision with hands-on
						medical expertise to serve the most vulnerable populations in Rwanda
						and East Africa.
					</p>
				</div>
			</section>
			<Separator />
			<LeaderProfile leader={leadersData.ahayoMarie} />
			<Separator />
			<LeaderProfile leader={leadersData.jeanPaul} />
			<Separator />
			<OperationalTeam />
			<ContactWithUs />
		</main>
	);
};

export default OurTeamPage;
