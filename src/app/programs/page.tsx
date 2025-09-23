"use client";

import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Truck,
  Pill,
  Smartphone,
  BookOpen,
  GraduationCap,
  Handshake,
  ClipboardCheck,
  FileText,
} from "lucide-react";

const programs = [
  {
    icon: Truck,
    title: "Mobile Clinics",
    description:
      "Bringing primary care, screening, and follow-up to rural and hard-to-reach communities.",
    features: [
      "Primary care & screening",
      "Maternal/child visits & vaccinations",
      "NCD screening & referrals",
      "Regular outreach missions",
    ],
    image:
      "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: Pill,
    title: "Community Pharmacies",
    description:
      "Two accessible pharmacies offering subsidized or low-cost essential medicines.",
    features: [
      "Affordable essential medicines",
      "Safe dispensing & counselling",
      "Cost-recovery for sustainability",
      "Quality & supply partnerships",
    ],
    image:
      "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Digital Health",
    description:
      "e-Consultations and digital prescriptions to overcome distance and affordability barriers.",
    features: [
      "Remote triage & follow-up",
      "Digital prescriptions",
      "Care coordination",
      "Platform & maintenance",
    ],
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: BookOpen,
    title: "Public Health Education",
    description:
      "Community awareness on safe medicine use, nutrition, hygiene, and disease prevention.",
    features: [
      "Community workshops",
      "Faith & school-based sessions",
      "IEC materials & campaigns",
      "Behavior-change focus",
    ],
    image:
      "https://images.pexels.com/photos/6646912/pexels-photo-6646912.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Training & Local Capacity",
    description:
      "Building local leadership and training community health workers to sustain impact.",
    features: [
      "CHW training modules",
      "Mentorship & supervision",
      "Referral linkages",
      "Leadership development",
    ],
    image:
      "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: Handshake,
    title: "Partnerships & Advocacy",
    description:
      "Collaboration with faith networks, pharmaceutical and global health partners, and donors.",
    features: [
      "Faith-based networks",
      "Medicine access partnerships",
      "Donor engagement",
      "Advocacy & conferences",
    ],
    image:
      "https://images.pexels.com/photos/5668853/pexels-photo-5668853.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: ClipboardCheck,
    title: "Monitoring & Evaluation",
    description:
      "Robust M&E to track outcomes, improve programs, and ensure transparency.",
    features: [
      "Indicators & baselines",
      "Routine data capture",
      "Periodic reviews",
      "Learning & adaptation",
    ],
    image:
      "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    icon: FileText,
    title: "Governance & Setup",
    description:
      "Legal registration, board facilitation, and office setup to support operations.",
    features: [
      "Draft statutes & register",
      "Board & partner meetings",
      "HQ setup & operations",
      "Stewardship & compliance",
    ],
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Programs & Initiatives
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Practical, faith-driven solutions to expand access to affordable,
            quality healthcare for rural and underserved communities in Rwanda.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card
                  key={program.title}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
                        <IconComponent className="h-6 w-6 text-slate-900" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-slate-900">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="mb-6 space-y-2">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <span className="mr-3 inline-block h-2 w-2 rounded-full bg-yellow-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-slate-900 transition-colors"
                    >
                      <a href="/programs">Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Partner with Sainte Thérèse Foundation
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Join us in extending the healing hand of service—through donations,
            partnerships, or volunteering.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="rounded-lg bg-yellow-600 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-yellow-700">
              Donate
            </Button>
            <Button
              variant="outline"
              className="rounded-lg border-2 border-white px-8 py-4 text-lg text-white hover:bg-white hover:text-slate-900"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
