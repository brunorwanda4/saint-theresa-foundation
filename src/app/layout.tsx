import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer"; 

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sainte Theresa Foundation — Compassionate Healthcare in Rwanda",
  description:
    "The Sainte Theresa Foundation brings affordable healthcare to rural Rwanda through mobile clinics, digital health, community pharmacies, and health education.",
  keywords: [
    "Sainte Thérèse Foundation",
    "Rwanda healthcare",
    "mobile clinics",
    "digital health",
    "community pharmacy",
    "public health education",
    "nonprofit",
    "faith-based healthcare",
  ],
  openGraph: {
    title: "Sainte Theresa Foundation",
    description:
      "Compassionate, faith-driven healthcare for Rwanda’s most vulnerable communities.",
    siteName: "Sainte Theresa Foundation",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* dvh handles mobile browser UI better than vh */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-white`}>
        {/* Sticky footer layout */}
        <div className="flex min-h-dvh flex-col">
          {/* If your Navbar is fixed/sticky, give main a top padding to match its height */}
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
