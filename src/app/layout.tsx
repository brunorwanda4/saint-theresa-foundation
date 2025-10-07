import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sainte Thérèse Foundation",
  description:
    "The Sainte Thérèse Foundation is a faith-driven nonprofit initiative bringing healthcare closer to poor and vulnerable communities in rural Rwanda through mobile clinics, digital health, community pharmacies, and public health education.",
  icons: [
    {
      url: "/logo-icon.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/logo-icon.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  keywords: [
    "Sainte Thérèse Foundation",
    "Healthcare in Rwanda",
    "Nonprofit",
    "Faith-based initiative",
    "Community health",
    "Mobile clinics",
    "Digital health",
    "Public health education",
    "Community pharmacies",
    "Christian compassion",
    "Healthcare access",
    "Rwanda charity",
    "AHAYO Marie Anita",
  ],
  authors: [{ name: "Sainte Thérèse Foundation" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
