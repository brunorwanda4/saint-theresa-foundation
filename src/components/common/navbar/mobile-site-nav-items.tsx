"use client";

import MyImage from "@/components/common/images/MyImage";
import SiteNavContact from "@/components/common/navbar/site-nav-contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/utils/media-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const MobileSiteNavItems = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (!isMobile) return null;

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"lg"}>
          <IoMenuSharp size={32} /> <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="space-y-4 overflow-y-auto p-4">
        <SheetHeader>
          <div className="flex items-center gap-4">
            <Link href={`/`}>
              <MyImage
                className="size-12"
                alt="saint theresa foundation"
                priority
                original
                src="/logo-icon.png"
              />
            </Link>
            <SheetTitle className="text-2xl font-bold">
              Sainte Thérèse Foundation
            </SheetTitle>
          </div>
        </SheetHeader>
        <SiteNavContact />
        <Accordion type="single" collapsible className="w-full">
          <Link
            href="/"
            className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-semibold transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180"
          >
            Home
          </Link>
          {/* About Us */}
          <AccordionItem value="about">
            <AccordionTrigger>Who we are</AccordionTrigger>
            <AccordionContent>
              <MobileLink
                href="/about/our-story"
                pathname={pathname}
                onClick={handleClose}
              >
                Our Story
              </MobileLink>
              <MobileLink
                href="/about/vision-mission"
                pathname={pathname}
                onClick={handleClose}
              >
                Vision & Mission
              </MobileLink>
              <MobileLink
                href="/about/team"
                pathname={pathname}
                onClick={handleClose}
              >
                Our Team
              </MobileLink>
              <MobileLink
                href="/about/founder"
                pathname={pathname}
                onClick={handleClose}
              >
                Founder
              </MobileLink>
            </AccordionContent>
          </AccordionItem>

          {/* Our Work */}
          <AccordionItem value="work">
            <AccordionTrigger>Our Work</AccordionTrigger>
            <AccordionContent>
              <MobileLink
                href="/work/mobile-clinics"
                pathname={pathname}
                onClick={handleClose}
              >
                Mobile Clinics
              </MobileLink>
              <MobileLink
                href="/work/community-pharmacies"
                pathname={pathname}
                onClick={handleClose}
              >
                Community Pharmacies
              </MobileLink>
              <MobileLink
                href="/work/digital-health"
                pathname={pathname}
                onClick={handleClose}
              >
                Digital Health
              </MobileLink>
              <MobileLink
                href="/work/public-health"
                pathname={pathname}
                onClick={handleClose}
              >
                Public Health
              </MobileLink>
              <MobileLink
                href="/work/training"
                pathname={pathname}
                onClick={handleClose}
              >
                Training & Empowerment
              </MobileLink>
              <MobileLink
                href="/work/partnerships"
                pathname={pathname}
                onClick={handleClose}
              >
                Partnerships
              </MobileLink>
            </AccordionContent>
          </AccordionItem>

          {/* Programs */}
          <AccordionItem value="programs">
            <AccordionTrigger>Programs & Plan</AccordionTrigger>
            <AccordionContent>
              <MobileLink
                href="/programs/timeline"
                pathname={pathname}
                onClick={handleClose}
              >
                Timeline 2025–2027
              </MobileLink>
              <MobileLink
                href="/programs/budget"
                pathname={pathname}
                onClick={handleClose}
              >
                Budget Overview
              </MobileLink>
              <MobileLink
                href="/programs/milestones"
                pathname={pathname}
                onClick={handleClose}
              >
                Milestones
              </MobileLink>
            </AccordionContent>
          </AccordionItem>

          {/* Impact */}
          <AccordionItem value="impact">
            <AccordionTrigger>Impact & Stories</AccordionTrigger>
            <AccordionContent>
              <MobileLink
                href="/impact/statistics"
                pathname={pathname}
                onClick={handleClose}
              >
                Statistics
              </MobileLink>
              <MobileLink
                href="/impact/stories"
                pathname={pathname}
                onClick={handleClose}
              >
                Stories
              </MobileLink>
              <MobileLink
                href="/impact/gallery"
                pathname={pathname}
                onClick={handleClose}
              >
                Gallery
              </MobileLink>
            </AccordionContent>
          </AccordionItem>

          {/* Get Involved */}
          <AccordionItem value="involved">
            <AccordionTrigger>Get Involved</AccordionTrigger>
            <AccordionContent>
              <MobileLink
                href="/get-involved/donate"
                pathname={pathname}
                onClick={handleClose}
              >
                Donate
              </MobileLink>
              <MobileLink
                href="/get-involved/volunteer"
                pathname={pathname}
                onClick={handleClose}
              >
                Volunteer
              </MobileLink>
              <MobileLink
                href="/get-involved/partner"
                pathname={pathname}
                onClick={handleClose}
              >
                Partnerships
              </MobileLink>
            </AccordionContent>
          </AccordionItem>

          {/* Biography */}
          <AccordionItem value="biography">
            <AccordionTrigger>Biography</AccordionTrigger>
            <AccordionContent>
              <MobileLink
                href="/biography/outreach"
                pathname={pathname}
                onClick={handleClose}
              >
                Community Outreach
              </MobileLink>
              <MobileLink
                href="/biography/training"
                pathname={pathname}
                onClick={handleClose}
              >
                Workshops & Training
              </MobileLink>
              <MobileLink
                href="/biography/conferences"
                pathname={pathname}
                onClick={handleClose}
              >
                Conferences & Advocacy
              </MobileLink>
              <MobileLink
                href="/biography/press"
                pathname={pathname}
                onClick={handleClose}
              >
                Press Releases
              </MobileLink>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <SheetFooter>
          <div className="mt-2 flex space-x-6 md:mt-0">
            <MobileLink
              onClick={handleClose}
              pathname={pathname}
              href="/contact"
              className="hover:text-primary text-sm duration-200"
            >
              Contact
            </MobileLink>
            <MobileLink
              onClick={handleClose}
              pathname={pathname}
              href="/terms"
              className="hover:text-primary text-sm duration-200"
            >
              Terms & Conditions
            </MobileLink>
            <MobileLink
              onClick={handleClose}
              pathname={pathname}
              href="/privacy"
              className="hover:text-primary text-sm duration-200"
            >
              Privacy Policy
            </MobileLink>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSiteNavItems;

// helper component for links
function MobileLink({
  href,
  pathname,
  children,
  onClick,
  className,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block rounded-md px-2 py-1 text-sm",
        isActive
          ? "text-primary font-medium"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
}
