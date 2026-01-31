"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedLink from "@/components/common/animation/animated-link";
import MyImage from "@/components/common/images/MyImage";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const SiteNavItems = () => {
	const pathname = usePathname();
	const aboutUsPages = [
		{
			name: "Foundation story",
			href: "/about",
			image: "/icons/history.png",
		},
		{
			name: "Leadership bios & photos",
			href: "/about/team",
			image: "/icons/group.png",
		},
		{
			name: "Vision, mission, and values",
			href: "/about/vision-mission",
			image: "/icons/eye.png",
		},
		{
			name: "Timeline 2013–2027",
			href: "/about/timeline",
			image: "/icons/calender.png",
		},
	];

	const workItems = [
		{
			title: "Mobile Clinics",
			href: "/work/mobile-clinics",
			description:
				"Bringing healthcare directly to rural and hard-to-reach communities.",
		},
		{
			title: "Community Pharmacies",
			href: "/work/community-pharmacies",
			description: "Establishing local access to affordable medicine.",
		},
		{
			title: "Digital Health",
			href: "/work/digital-health",
			description:
				"E-consultations and digital tools to overcome distance barriers.",
		},
		{
			title: "Public Health Education",
			href: "/work/public-health",
			description:
				"Promoting awareness in hygiene, nutrition, and safe medicine use.",
		},
		{
			title: "Training & Empowerment",
			href: "/work/training",
			description: "Building capacity of local health workers and leaders.",
		},
		{
			title: "Partnerships",
			href: "/work/partnerships",
			description: "Collaborating with faith-based and global partners.",
		},
	];
	const programItems = [
		{
			title: "Timeline 2025–2027",
			href: "/programs/timeline",
			description: "Key activities and milestones of the action plan.",
		},
		{
			title: "Budget Overview",
			href: "/programs/budget",
			description: "Financial needs to support our 3-year strategy.",
		},
		{
			title: "Milestones",
			href: "/programs/milestones",
			description: "Tracking the progress and achievements of our initiatives.",
		},
	];

	const impactItems = [
		{
			title: "Statistics",
			href: "/impact/statistics",
			description:
				"Patients served, medicines delivered, and communities reached.",
		},
		{
			title: "Stories",
			href: "/impact/stories",
			description: "Testimonials and stories from the communities we serve.",
		},
		{
			title: "Photo & Video Gallery",
			href: "/impact/gallery",
			description: "Explore visuals of our work in action.",
		},
	];

	const involvementItems = [
		{
			title: "Donate",
			href: "/get-involved/donate",
			description: "Support our mission by making a contribution.",
		},
		{
			title: "Volunteer",
			href: "/get-involved/volunteer",
			description: "Join as a volunteer or health worker in the field.",
		},
		{
			title: "Partnerships",
			href: "/get-involved/partner",
			description: "Collaborate with us to expand healthcare access.",
		},
	];

	const biographyItems = [
		{
			title: "Community Outreach",
			href: "/biography/outreach",
			description: "Updates from rural outreach missions and mobile clinics.",
		},
		{
			title: "Workshops & Training",
			href: "/biography/training",
			description: "Insights from our health and nutrition workshops.",
		},
		{
			title: "Conferences & Advocacy",
			href: "/biography/conferences",
			description:
				"Where we've represented our mission nationally and internationally.",
		},
		{
			title: "Press Releases",
			href: "/biography/press",
			description: "Official announcements and publications.",
		},
	];
	return (
		<NavigationMenu viewport={false} className="bg-none p-1">
			<div className={cn("flex items-center")}>
				<NavigationMenuList className="flex max-lg:hidden">
					<NavigationMenuItem>
						<NavigationMenuTrigger className=" bg-none">
							<AnimatedLink href="/about" pathname={pathname}>
								Who we are
							</AnimatedLink>
						</NavigationMenuTrigger>
						<NavigationMenuContent className="flex flex-row gap-4 md:w-xl max-w-2xl group-data-[viewport=false]/navigation-menu:border-none group-data-[viewport=false]/navigation-menu:bg-muted p-4 min-w-165 group-data-[viewport=false]/navigation-menu:rounded-2xl">
							<div className=" p-4 rounded-lg space-y-3 bg-background">
								<h3 className=" h4 text-muted ">Learn more about us</h3>
								<div className=" grid grid-cols-2 gap-2 gap-x-6">
									{aboutUsPages.map((page) => (
										<Link
											key={page.name}
											href={page.href}
											className=" flex items-center gap-2"
										>
											<Image
												src={page.image}
												alt={page.name}
												width={24}
												height={24}
											/>
											<span className="ml-2 ">{page.name}</span>
										</Link>
									))}
								</div>
							</div>
							<div>
								<div className=" relative h-28 w-32 ">
									<Image
										src="/images/anita.webp"
										alt="Vision, mission, and values"
										fill
										priority
										className=" object-cover rounded-md"
									/>
								</div>
								<div className="mt-2 flex flex-col items-center gap-1">
									<Link
										href="/about/our-story"
										className=" flex flex-col gap-0.5"
									>
										<h6 className=" text-background text-sm  text-center">
											AHAYO Marie Anita
										</h6>
										<span className=" text-background text-xs leading-2.4 text-center">
											Founder & Managing Director
										</span>
									</Link>
									<Link href="/about/our-story" className=" ">
										<Button
											variant={"outline"}
											size={"sm"}
											className=" text-background bg-muted"
										>
											Read More
										</Button>
									</Link>
								</div>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Our Work */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<AnimatedLink href="/work" pathname={pathname}>
								Our Work
							</AnimatedLink>
						</NavigationMenuTrigger>
						<NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:rounded-2xl">
							<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{workItems.map((link) => (
									<ListItem
										key={link.href}
										pathname={pathname}
										href={link.href}
										title={link.title}
									>
										{link.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Programs & Action Plan */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<AnimatedLink href="/programs" pathname={pathname}>
								Programs & Plan
							</AnimatedLink>
						</NavigationMenuTrigger>
						<NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:rounded-2xl">
							<ul className="grid w-[350px] gap-2 md:w-[450px]">
								{programItems.map((link) => (
									<ListItem
										key={link.title}
										pathname={pathname}
										href={link.href}
										title={link.title}
									>
										{link.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Impact & Stories */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<AnimatedLink href="/impact" pathname={pathname}>
								Impact & Stories
							</AnimatedLink>
						</NavigationMenuTrigger>
						<NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:rounded-2xl">
							<ul className="grid w-[350px] gap-2">
								{impactItems.map((link) => (
									<ListItem
										key={link.title}
										pathname={pathname}
										href={link.href}
										title={link.title}
									>
										{link.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Get Involved */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<AnimatedLink href="/get-involved" pathname={pathname}>
								Get Involved
							</AnimatedLink>
						</NavigationMenuTrigger>
						<NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:rounded-2xl">
							<ul className="grid w-[350px] gap-2">
								{involvementItems.map((link) => (
									<ListItem
										key={link.title}
										pathname={pathname}
										href={link.href}
										title={link.title}
									>
										{link.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Biography & Events */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<AnimatedLink href="/biography" pathname={pathname}>
								Biography
							</AnimatedLink>
						</NavigationMenuTrigger>
						<NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:rounded-2xl">
							<ul className="grid  w-[350px] gap-2">
								{biographyItems.map((item) => (
									<ListItem
										key={item.title}
										pathname={pathname}
										href={item.href}
										title={item.title}
									>
										{item.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</div>
		</NavigationMenu>
	);
};

export default SiteNavItems;

function ListItem({
	title,
	children,
	href,
	pathname,
	...props
}: React.ComponentPropsWithoutRef<"li"> & {
	href: string;
	pathname: string;
}) {
	const isActive = pathname === href;
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div
						className={cn(
							"text-sm leading-none font-medium",
							isActive && "text-primary",
						)}
					>
						{title}
					</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
