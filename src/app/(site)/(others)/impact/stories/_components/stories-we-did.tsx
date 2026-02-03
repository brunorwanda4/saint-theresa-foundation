const StoriesWeDid = () => {
	const communityHealthFindings = [
		{
			title: "Never Screened (Undiagnosed Chronic Illness)",
			summary:
				"Many individuals were living with dangerous, hidden health conditions without prior diagnosis.",
			points: [
				{
					label: "Hypertension & Diabetes",
					description:
						"A notable proportion of participants were identified with elevated blood pressure and abnormal glycemia levels.",
				},
				{
					label: "Late Discovery",
					description:
						"Many individuals reported they had never been screened before. Without this intervention, these diseases would have remained undiagnosed until serious complications occurred.",
				},
			],
		},

		{
			title: "Nutritional Challenges: Underweight to Obese",
			summary:
				"The screening revealed a double burden of malnutrition within the same community.",
			points: [
				{
					label: "Underweight",
					description:
						"Participants classified as underweight, indicating nutritional deficiencies.",
					stats: "10%",
				},
				{
					label: "Overweight & Obese",
					description:
						"Community members identified as overweight or obese, highlighting the need for nutrition and lifestyle education.",
					stats: "34% (22% overweight, 12% obese)",
				},
			],
		},

		{
			title: "Support for HIV-Reactive Individuals",
			summary:
				"Confidential HIV testing and counseling were provided in a stigma-free environment.",
			points: [
				{
					label: "Test Results",
					description:
						"Most participants tested non-reactive, while some required further medical follow-up.",
					stats: "75% non-reactive, 3% reactive, 22% undetermined",
				},
				{
					label: "Follow-up & Care",
					description:
						"Reactive and undetermined individuals received counseling and were referred to health facilities such as Rwamagana Hospital for long-term care.",
				},
			],
		},

		{
			title: "Reaching the Rural & Unreachable",
			summary:
				"The foundation focuses on populations excluded from traditional healthcare systems.",
			points: [
				{
					label: "Geographically Isolated",
					description:
						"People living in rural areas with limited access to physical healthcare facilities.",
					stats: "43% of Rwandans",
				},
				{
					label: "Economically Vulnerable",
					description:
						"Individuals unable to afford essential medication, leading to preventable suffering.",
					stats: "82% of the poor",
				},
				{
					label: "Mothers & Children",
					description:
						"Ensuring mothers in rural villages access medicine and children receive care through telehealth services.",
				},
			],
		},
	];

	return (
		<main className="flex flex-col items-center justify-center space-y-8 ">
			<h1 className="h1 text-center l">
				Community Health Impact & Key Findings
			</h1>
			<section className="container max-w-3xl mx-auto space-y-8">
				{communityHealthFindings.map((finding) => (
					<div key={finding.title} className=" space-y-2">
						<h2 className="text-xl  lg:text-3xl">{finding.title}</h2>
						<p className="p">{finding.summary}</p>
						<ul className="list-disc list-inside ml-4">
							{finding.points.map((point) => (
								<li key={point.label}>
									<span className=" font-medium">{point.label}:</span>{" "}
									{point.description}
									{point.stats && <span className="ml-2">({point.stats})</span>}
								</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</main>
	);
};

export default StoriesWeDid;
