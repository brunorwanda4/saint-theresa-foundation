import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SiteNavContact = () => {
	return (
		<div className=" flex gap-4 items-center flex-row">
			<Link
				href={`/contact`}
				className={cn(buttonVariants({ variant: "secondary" }))}
			>
				Contact
			</Link>
		</div>
	);
};

export default SiteNavContact;
