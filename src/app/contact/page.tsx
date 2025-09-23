// src/app/contact/page.tsx
import Link from "next/link";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Touch</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            We’re here to answer questions about our mobile clinics, community pharmacies, and partnerships.
          </p>
        </div>
      </header>

      {/* Primary Contact + Form */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact info (compact, no cards) */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Contact Details</h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-yellow-100">
                    <Phone className="h-5 w-5 text-yellow-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Emergency Hotline</p>
                    <p className="text-gray-700">
                      <a href="tel:+250788123456" className="underline decoration-yellow-400 underline-offset-2">
                        +250 788 123 456
                      </a>{" "}
                      <span className="text-gray-500">(24/7)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-yellow-100">
                    <Mail className="h-5 w-5 text-yellow-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">General Inquiries</p>
                    <p className="text-gray-700">
                      <a href="mailto:info@stfoundation.rw" className="underline decoration-yellow-400 underline-offset-2">
                        info@stfoundation.rw
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-yellow-100">
                    <MapPin className="h-5 w-5 text-yellow-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Primary Office</p>
                    <p className="text-gray-700">Eastern Province, Rwanda</p>
                    <p className="text-gray-500 text-sm">Sainte Thérèse Polyclinic (foundation base)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-yellow-100">
                    <Clock className="h-5 w-5 text-yellow-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Office Hours</p>
                    <p className="text-gray-700">Mon–Fri · 9:00–17:00</p>
                  </div>
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold"
                >
                  <Link href="/donate">Support Our Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-300 text-slate-900 hover:bg-slate-100"
                >
                  <Link href="/partners">Become a Partner</Link>
                </Button>
              </div>
            </div>

            {/* Simple form */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Send Us a Message</h2>
              <form className="mt-6 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input placeholder="+250 7xx xxx xxx" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea rows={5} placeholder="How can we help?" />
                </div>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold">
                  Send Message
                </Button>
              </form>
              <p className="mt-3 text-xs text-gray-500">
                By submitting this form you agree to be contacted about your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency banner (simple, no extra cards) */}
      <section aria-labelledby="emergency-title" className="bg-slate-900 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            24/7 Emergency Support
          </div>

          <h2 id="emergency-title" className="text-2xl md:text-3xl font-bold text-white">
            Medical Emergency?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-gray-300">
            For life-threatening situations, call our hotline immediately or go to the nearest hospital.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold"
              aria-label="Call emergency hotline"
            >
              <a href="tel:+250788123456">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Emergency: +250 788 123 456
              </a>
            </Button>

            {/* White button with black text */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black"
              aria-label="Find nearest location"
            >
              <Link href="/contact">
                <MapPin className="mr-2 h-5 w-5 text-black" aria-hidden="true" />
                Find Nearest Location
              </Link>
            </Button>
          </div>

          <p className="mt-3 text-xs text-white/60">
            If you’re in immediate danger, contact local emergency services first.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
