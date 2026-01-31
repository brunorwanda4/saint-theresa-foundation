import OurHistories from "../_component/our-histories";

export const metadata = {
	title: "About Timeline",
	description: "Learn more about our mission and history.",
};

const AboutTimeLine = () => {
	return (
		<div className=" pt-12">
			<OurHistories isOnPage />
		</div>
	);
};

export default AboutTimeLine;
