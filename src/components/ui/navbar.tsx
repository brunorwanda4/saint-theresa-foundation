"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14">
              <Image
                src="/assets/images/logo.png"
                alt="Sainte Therese Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
              Sainte Theresa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    active ? "text-yellow-600" : "text-gray-700 hover:text-yellow-600"
                  }`}
                >
                  {item.name}
                  {active && (
                    <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden sm:inline-flex bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Link href="/contact">Contact us</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100 bg-white">
              {navigationItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 ${
                      active
                        ? "text-yellow-600 bg-yellow-50"
                        : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-blue-900 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-200"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
