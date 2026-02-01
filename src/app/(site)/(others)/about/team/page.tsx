"use client";
import AhayoMarie from "./_components/ahayo-marie";
import TeamHero from "./_components/team-hero";

const OurTeamPage = () => {
	return (
		<main className=" px-8 mt-12 space-y-8">
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
			<AhayoMarie />
		</main>
	);
};

export default OurTeamPage;
