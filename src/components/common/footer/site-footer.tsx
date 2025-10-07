"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#002b5c] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-6">
        <div className="border-r-2 max-md:border-r-0">
          <h3 className="mb-3 font-bold">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about/our-story"
                className="hover:text-primary duration-200"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/about/vision-mission"
                className="hover:text-primary duration-200"
              >
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link
                href="/about/christian-inspiration"
                className="hover:text-primary duration-200"
              >
                Christian Inspiration
              </Link>
            </li>
            <li>
              <Link
                href="/about/founder"
                className="hover:text-primary duration-200"
              >
                Founder
              </Link>
            </li>
            <li>
              <Link
                href="/about/team"
                className="hover:text-primary duration-200"
              >
                Our Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-r-2 max-md:border-r-0">
          <h3 className="mb-3 font-bold">Our Work</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/work/mobile-clinics"
                className="hover:text-primary duration-200"
              >
                Mobile Clinics
              </Link>
            </li>
            <li>
              <Link
                href="/work/community-pharmacies"
                className="hover:text-primary duration-200"
              >
                Community Pharmacies
              </Link>
            </li>
            <li>
              <Link
                href="/work/digital-health"
                className="hover:text-primary duration-200"
              >
                Digital Health
              </Link>
            </li>
            <li>
              <Link
                href="/work/public-health"
                className="hover:text-primary duration-200"
              >
                Public Health Education
              </Link>
            </li>
            <li>
              <Link
                href="/work/training"
                className="hover:text-primary duration-200"
              >
                Training & Empowerment
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-r-2 max-md:border-r-0">
          <h3 className="mb-3 font-bold">Programs & Plan</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/programs/timeline"
                className="hover:text-primary duration-200"
              >
                Timeline 2025–2027
              </Link>
            </li>
            <li>
              <Link
                href="/programs/budget"
                className="hover:text-primary duration-200"
              >
                Budget Overview
              </Link>
            </li>
            <li>
              <Link
                href="/programs/milestones"
                className="hover:text-primary duration-200"
              >
                Milestones
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-r-2 max-md:border-r-0">
          <h3 className="mb-3 font-bold">Get Involved</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/get-involved/donate"
                className="hover:text-primary duration-200"
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                href="/get-involved/volunteer"
                className="hover:text-primary duration-200"
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                href="/get-involved/partner"
                className="hover:text-primary duration-200"
              >
                Partnerships
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-r-2 max-md:border-r-0">
          <h3 className="mb-3 font-bold">biography</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/biography/outreach"
                className="hover:text-primary duration-200"
              >
                Community Outreach
              </Link>
            </li>
            <li>
              <Link
                href="/biography/training"
                className="hover:text-primary duration-200"
              >
                Workshops & Training
              </Link>
            </li>
            <li>
              <Link
                href="/biography/conferences"
                className="hover:text-primary duration-200"
              >
                Conferences & Advocacy
              </Link>
            </li>
            <li>
              <Link
                href="/biography/press"
                className="hover:text-primary duration-200"
              >
                Press Releases
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-bold">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/impact/gallery"
                className="hover:text-primary duration-200"
              >
                Photo & Video Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/impact/stories"
                className="hover:text-primary duration-200"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/impact/statistics"
                className="hover:text-primary duration-200"
              >
                Impact Statistics
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between border-t border-gray-600 px-6 py-6 md:flex-row">
        <div className="mb-4 flex space-x-4 md:mb-0">
          <Link href="#" className="hover:text-primary duration-200">
            <Facebook className="h-6 w-6 hover:text-blue-400" />
          </Link>
          <Link href="#" className="hover:text-primary duration-200">
            <Instagram className="h-6 w-6 hover:text-pink-400" />
          </Link>
          <Link href="#" className="hover:text-primary duration-200">
            <Twitter className="h-6 w-6 hover:text-sky-400" />
          </Link>
          <Link href="#" className="hover:text-primary duration-200">
            <Linkedin className="h-6 w-6 hover:text-blue-300" />
          </Link>
          <Link href="#" className="hover:text-primary duration-200">
            <Youtube className="h-6 w-6 hover:text-red-500" />
          </Link>
        </div>

        <div className="text-center text-sm md:text-right">
          <p>Together for Accessible Healthcare in Rwanda</p>
        </div>
      </div>
      <div className="bg-black py-3 text-sm text-gray-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
          <p>© {new Date().getFullYear()} Sainte Thérèse Foundation</p>
          <div className="mt-2 flex space-x-6 md:mt-0">
            <Link href="/contact" className="hover:text-primary duration-200">
              Contact
            </Link>
            <Link href="/terms" className="hover:text-primary duration-200">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-primary duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
