"use client";

import { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";

export type Founder = {
  name: string;
  role: string;
  image: string; // /public path or URL
  bio: string;
  socials?: { platform: "linkedin" | "twitter"; url: string }[];
};

function ReadMore({
  text,
  initialChars = 260,
  id,
}: {
  text: string;
  initialChars?: number;
  id: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const short =
    text.length > initialChars ? text.slice(0, initialChars).trim() + "…" : text;

  return (
    <div>
      <p id={id} className="text-gray-700">
        {expanded ? text : short}
      </p>
      {text.length > initialChars && (
        <button
          type="button"
          className="mt-2 inline-flex items-center text-yellow-700 hover:text-yellow-800 font-medium"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function Founders({
  founders,
  title = "Founders",
  subtitle = "The Foundation was started by leaders combining public health expertise, pastoral care, and community organizing.",
  initialChars = 260,
}: {
  founders: Founder[];
  title?: string;
  subtitle?: string;
  initialChars?: number;
}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <article
              key={f.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="sm:w-40 sm:flex-shrink-0">
                  <div className="relative w-full h-48 sm:h-40 overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={f.image}
                      alt={`${f.name} portrait`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <header className="mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {f.name}
                    </h3>
                    <p className="text-sm text-yellow-800">{f.role}</p>
                  </header>

                  <ReadMore
                    text={f.bio}
                    initialChars={initialChars}
                    id={`founder-bio-${i}`}
                  />

                  {f.socials && f.socials.length > 0 && (
                    <div className="mt-4 flex items-center gap-3">
                      {f.socials.map((s, idx) => {
                        const Icon =
                          s.platform === "linkedin" ? Linkedin : Twitter;
                        const label =
                          s.platform === "linkedin"
                            ? "LinkedIn profile"
                            : "Twitter profile";
                        return (
                          <a
                            key={idx}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                            aria-label={`${f.name} ${label}`}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="text-sm underline decoration-slate-300 hover:decoration-slate-500">
                              {label}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
