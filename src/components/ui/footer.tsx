"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/images/logo.png"
                  alt="Sainte Thérèse Foundation logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold">Sainte Theresa Foundation</span>
            </Link>
            <p className="text-gray-300 mb-4">
              A faith-driven nonprofit expanding access to affordable, quality healthcare in rural Rwanda
              through mobile clinics, community pharmacies, digital health, and public health education.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-yellow-400 transition-colors">Programs</Link></li>
              <li><Link href="/impact" className="text-gray-300 hover:text-yellow-400 transition-colors">Impact</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link href="/donate" className="text-gray-300 hover:text-yellow-400 transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Mobile Clinics</span></li>
              <li><span className="text-gray-300">Community Pharmacies</span></li>
              <li><span className="text-gray-300">Digital Health & e-Consultation</span></li>
              <li><span className="text-gray-300">Public Health Education</span></li>
              <li><span className="text-gray-300">Training & Local Capacity</span></li>
              <li><span className="text-gray-300">Monitoring & Evaluation</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+250 XXX XXX XXX</span> {/* replace */}
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@stfoundation.rw</span> {/* replace */}
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Eastern Province, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Mon–Fri · 9:00–17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {year} Sainte Thérèse Foundation. All rights reserved. ·{" "}
            <Link href="/legal/privacy" className="hover:text-yellow-400">Privacy</Link> ·{" "}
            <Link href="/legal/terms" className="hover:text-yellow-400">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
