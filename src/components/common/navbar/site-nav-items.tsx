"use client";
import AnimatedLink from "@/components/common/animation/animated-link";
import MyImage from "@/components/common/images/MyImage";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteNavItems = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={false} className="bg-background p-1">
      <div className={cn("flex items-center")}>
        <NavigationMenuList className="flex max-md:hidden">
          {/* About Us */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <AnimatedLink href="/about" pathname={pathname}>
                Who we are
              </AnimatedLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild className="p-0">
                    <Link
                      className="relative flex h-full w-full flex-col justify-end rounded-md no-underline outline-hidden select-none focus:shadow-md"
                      href="/about/our-story"
                    >
                      <MyImage
                        src="/images/anita.webp"
                        className="h-full w-full rounded-md"
                        useSkeleton
                      />
                      <div className="from-muted absolute bottom-0 bg-linear-to-t to-transparent p-4">
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Our Story
                        </div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                          Learn how the Sainte Thérèse Foundation began and why
                          it exists today.
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  pathname={pathname}
                  href="/about/vision-mission"
                  title="Vision & Mission"
                >
                  What drives us: a Rwanda with affordable, accessible
                  healthcare for all.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/about/team"
                  title="Our Team"
                >
                  Meet the leadership team and advisors guiding our mission.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/about/founder"
                  title="Founder"
                >
                  Biography of AHAYO Marie Anita, founder of the Foundation.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Our Work */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <AnimatedLink href="/work" pathname={pathname}>
                Our Work
              </AnimatedLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem
                  pathname={pathname}
                  href="/work/mobile-clinics"
                  title="Mobile Clinics"
                >
                  Bringing healthcare directly to rural and hard-to-reach
                  communities.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/work/community-pharmacies"
                  title="Community Pharmacies"
                >
                  Establishing local access to affordable medicine.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/work/digital-health"
                  title="Digital Health"
                >
                  E-consultations and digital tools to overcome distance
                  barriers.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/work/public-health"
                  title="Public Health Education"
                >
                  Promoting awareness in hygiene, nutrition, and safe medicine
                  use.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/work/training"
                  title="Training & Empowerment"
                >
                  Building capacity of local health workers and leaders.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/work/partnerships"
                  title="Partnerships"
                >
                  Collaborating with faith-based and global partners.
                </ListItem>
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
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-2 md:w-[450px]">
                <ListItem
                  pathname={pathname}
                  href="/programs/timeline"
                  title="Timeline 2025–2027"
                >
                  Key activities and milestones of the action plan.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/programs/budget"
                  title="Budget Overview"
                >
                  Financial needs to support our 3-year strategy.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/programs/milestones"
                  title="Milestones"
                >
                  Tracking the progress and achievements of our initiatives.
                </ListItem>
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
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-2">
                <ListItem
                  pathname={pathname}
                  href="/impact/statistics"
                  title="Statistics"
                >
                  Patients served, medicines delivered, and communities reached.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/impact/stories"
                  title="Stories"
                >
                  Testimonials and stories from the communities we serve.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/impact/gallery"
                  title="Photo & Video Gallery"
                >
                  Explore visuals of our work in action.
                </ListItem>
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
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-2">
                <ListItem
                  pathname={pathname}
                  href="/get-involved/donate"
                  title="Donate"
                >
                  Support our mission by making a contribution.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/get-involved/volunteer"
                  title="Volunteer"
                >
                  Join as a volunteer or health worker in the field.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/get-involved/partner"
                  title="Partnerships"
                >
                  Collaborate with us to expand healthcare access.
                </ListItem>
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
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-2">
                <ListItem
                  pathname={pathname}
                  href="/biography/outreach"
                  title="Community Outreach"
                >
                  Updates from rural outreach missions and mobile clinics.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/biography/training"
                  title="Workshops & Training"
                >
                  Insights from our health and nutrition workshops.
                </ListItem>
                <ListItem
                  href="/biography/conferences"
                  title="Conferences & Advocacy"
                  pathname={pathname}
                >
                  Where we've represented our mission nationally and
                  internationally.
                </ListItem>
                <ListItem
                  pathname={pathname}
                  href="/biography/press"
                  title="Press Releases"
                >
                  Official announcements and publications.
                </ListItem>
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
