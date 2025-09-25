"use client"
import dynamic from "next/dynamic";

// ✅ These will only load in the browser (no window access during SSR)
const HeroSection = dynamic(() => import("@/components/blocks/hero-section"), {
  ssr: false,
});
const Programs = dynamic(() => import("@/app/programs/page").then(m => m.default), {
  ssr: false,
});
const About = dynamic(() => import("@/app/about/page").then(m => m.default), {
  ssr: false,
});
const OperationsMap = dynamic(() => import("@/components/blocks/OperationsMap"), {
  ssr: false,
});
const Stats = dynamic(() => import("@/components/blocks/stats").then(m => m.Stats), {
  ssr: false,
});

// If you have a Footer that is server-safe, import normally.
// Otherwise you can also dynamic it with ssr:false.
import Footer from "@/components/ui/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Stats />
      <OperationsMap />
      <Footer />
    </main>
  );
}
