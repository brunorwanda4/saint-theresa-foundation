import React from "react";

const OurGrowingImpact = () => {
	const stats = [
		{
			value: "800+",
			label: "Immediate Lives Impacted",
			subLabel: "Already served through our health screening missions",
		},
		{
			value: "50,000+",
			label: "Patients Served Annually",
			subLabel: "Through our established partner medical polyclinic",
		},
		{
			value: "2",
			label: "Mobile Clinics in Progress",
			subLabel: "Bringing healing to remote rural villages by 2026",
		},
		{
			value: "40+ Years",
			label: "Combined Leadership",
			subLabel: "Expertise in public health and global governance",
		},
		{
			value: "82%",
			label: "Medicine Equity Goal",
			subLabel: "Closing the gap for the poor who cannot afford treatment",
		},
	];

	return (
		<div className="relative w-full max-w-6xl mx-auto overflow-hidden bg-[#0a1d2e] rounded-xl p-8 ">
			{/* Background Decorative Slants */}
			<div className="absolute top-0 right-0 w-full h-full pointer-events-none">
				<div className="absolute top-0 right-[20%] w-16 h-[200%] bg-[#f2b33d] transform rotate-[40deg] -translate-y-1/4 opacity-90"></div>
				<div className="absolute top-0 right-[5%] w-16 h-[200%] bg-[#1a73e8] transform rotate-[30deg] -translate-y-1/4 opacity-90"></div>
			</div>

			{/* Title */}
			<h2 className="relative z-10 h2 text-background mb-6">
				Our Growing Impact
			</h2>

			{/* Stats Container */}
			<div className="relative z-10 flex flex-col md:flex-row bg-[#e9ecef] rounded-2xl overflow-hidden shadow-2xl">
				{stats.map((stat, index) => (
					<div
						key={`${index}-${stat.label}`}
						className={`flex-1 flex flex-col items-center justify-center text-center p-6 min-h-[180px]
              ${index !== stats.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-400" : ""}`}
					>
						<div className="text-[#0a1d2e]  mb-2 leading-tight h2">
							{stat.value}
						</div>
						<div className="text-[#0a1d2e] text-sm md:text-base font-normal max-w-[150px]">
							{stat.label}
							{stat.subLabel && (
								<span className="block text-xs mt-1 text-gray-600">
									{stat.subLabel}
								</span>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurGrowingImpact;
