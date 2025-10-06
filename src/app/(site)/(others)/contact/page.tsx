"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="global-px min-h-screen py-8">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Contact Sainte Thérèse Foundation
        </h1>
        <p className="mb-12 text-gray-600">
          We would love to hear from you. Reach out for partnerships, donations,
          or to learn more about our health programs.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="border-foreground bg-primary-foreground hover:border-primary border p-6 shadow-lg duration-200 hover:scale-105">
            <MapPin className="text-primary mx-auto mb-4 h-10 w-10" />
            <h2 className="mb-2 text-lg font-semibold">Our Address</h2>
            <p className="text-gray-600">
              Sainte Thérèse Foundation
              <br /> Kigali, Rwanda
            </p>
          </div>

          <div className="border-foreground bg-primary-foreground hover:border-primary border p-6 shadow-lg duration-200 hover:scale-105">
            <Phone className="text-primary mx-auto mb-4 h-10 w-10" />
            <h2 className="mb-2 text-lg font-semibold">Call Us</h2>
            <p className="text-gray-600">+250 789 123 456</p>
          </div>

          <div className="border-foreground bg-primary-foreground hover:border-primary border p-6 shadow-lg duration-200 hover:scale-105">
            <Mail className="text-primary mx-auto mb-4 h-10 w-10" />
            <h2 className="mb-2 text-lg font-semibold">Email Us</h2>
            <p className="text-gray-600">info@sainte-therese.org</p>
          </div>
        </div>

        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.247992044707!2d30.0589!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7151c6a9d4d%3A0x70b17b36f31a4a2d!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1697319189623!5m2!1sen!2srw"
            width="100%"
            height="350"
            loading="lazy"
            className="rounded-2xl border-0 shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
