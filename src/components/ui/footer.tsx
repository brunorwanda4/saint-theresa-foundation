"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between border-t border-white/10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <Image
              src="/assets/images/logo.png"
              alt="Sainte Thérèse Foundation logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-white font-semibold">Sainte Thérèse Foundation</span>
        </Link>

        {/* Copyright + Links */}
        <p className="text-gray-400">
          © {year} Sainte Thérèse Foundation ·{" "}
          <Link href="/legal/privacy" className="hover:text-yellow-400">Privacy</Link> ·{" "}
          <Link href="/legal/terms" className="hover:text-yellow-400">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
