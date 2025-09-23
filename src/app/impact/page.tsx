// src/app/impact/page.tsx
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

export default function Impact() {
  const images = Array.from({ length: 11 }, (_, i) => ({
    src: `/assets/images/image-${i + 1}.jpeg`,
    alt: `Doctors providing compassionate care — photo ${i + 1}`,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Impact</span> in Pictures
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Moments from mobile clinics, community pharmacies, and public health outreach—serving
            Rwanda’s rural communities with dignity and compassion.
          </p>
        </div>
      </header>

      {/* Intro copy from your action plan */}
      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Who We Are</h2>
              <p className="mt-3 text-gray-700">
                The Sainte Thérèse Foundation is a faith-driven, nonprofit initiative founded by
                AHAYO Anita together with seasoned humanitarian professionals as an extension of
                the work of Sainte Thérèse Polyclinic. Rooted in compassion and human dignity, we
                bring affordable, quality healthcare closer to poor and vulnerable communities in
                rural Rwanda.
              </p>
              <p className="mt-3 text-gray-700">
                Established in 2013, Sainte Thérèse Polyclinic serves over{" "}
                <span className="font-semibold text-slate-900">50,000 patients annually</span>.
                Through our Foundation, we extend care beyond facility walls—via mobile clinics,
                sustainable community pharmacies, digital health, and public health education.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                Why We Act
              </h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• <span className="font-medium">43%</span> of Rwandans live in rural areas with limited access to clinics.</li>
                <li>• <span className="font-medium">1 in 3</span> lack proper healthcare due to financial or geographical barriers.</li>
                <li>• <span className="font-medium">82%</span> of the poor cannot afford medicine—leading to preventable illness and death.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Our programs respond with mobile healthcare, subsidized medicines, e-consultation,
                health education, and local capacity-building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, idx) => (
              <figure key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={idx < 2}
                />
                <figcaption className="sr-only">{img.alt}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">
            Photos: doctors and community health workers serving patients across outreach sites.
          </p>
        </div>
      </section>

      {/* Faith & mission note */}
      <section className="bg-gray-50 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <blockquote className="rounded-lg border-l-4 border-yellow-500 bg-white p-6 shadow-sm">
            <p className="text-sm md:text-base text-slate-900">
              Inspired by St. Thérèse of Lisieux’s “little way” of love and service, our mission
              aligns with the call of Matthew 25:40 — “Whatever you did for one of the least of
              these brothers and sisters of mine, you did for me.”
            </p>
          </blockquote>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="font-semibold text-slate-900">Mobile Clinics</h4>
              <p className="mt-2 text-sm text-gray-700">
                Deploying units to rural and hard-to-reach communities for primary care and screening.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="font-semibold text-slate-900">Community Pharmacies</h4>
              <p className="mt-2 text-sm text-gray-700">
                Two pharmacies offering subsidized essential medicines as part of a sustainable model.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="font-semibold text-slate-900">Digital Health & Education</h4>
              <p className="mt-2 text-sm text-gray-700">
                e-Consultations, digital prescriptions, and community education on safe medicine use, nutrition, and hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call for partnership */}
      <section className="bg-slate-900 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Join Our Mission
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Partner with Sainte Thérèse Foundation to expand access to care: support mobile clinics,
            ensure affordable medicines, and equip local health workers.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold">
              <Link href="/donate">Donate</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              <Link href="/partners">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
