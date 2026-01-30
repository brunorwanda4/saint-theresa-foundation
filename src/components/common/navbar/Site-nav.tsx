"use client";
import Image from "next/image";
import Link from "next/link";
import MobileSiteNavItems from "@/components/common/navbar/mobile-site-nav-items";
import SiteNavContact from "@/components/common/navbar/site-nav-contact";
import SiteNavItems from "@/components/common/navbar/site-nav-items";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

const SiteNav = () => {
	return (
		<div
			className={cn(
				"global-px fixed z-50 flex w-full items-center justify-between transition-colors duration-300 pt-4 backdrop-blur-2xl bg-background/90",
			)}
		>
			<div className=" flex flex-row gap-4 items-center">
				{/* Mobile */}
				<div className="flex items-center gap-2">
					<Link href={`/`}>
						<div className="relative size-14">
							<Image
								className="object-contain"
								src={"/logo-icon.png"}
								alt="saint theresa foundation"
								fill
								priority
							/>
						</div>
					</Link>
				</div>
				<div className="flex w-full justify-center">
					<div className={cn("w-fit transition-all duration-500 ease-in-out")}>
						<SiteNavItems />
					</div>
				</div>
			</div>

			{/* Nav items wrapper */}

			<div className="max-lg:hidden">
				<SiteNavContact />
			</div>
			<div className="flex lg:hidden">
				<MobileSiteNavItems />
			</div>
		</div>
	);
};

export default SiteNav;
