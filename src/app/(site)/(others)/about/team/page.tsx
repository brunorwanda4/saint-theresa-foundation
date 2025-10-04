"use client";

import HoverImage from "@/components/common/images/hover-image";
import { leaders, teamMembers } from "@/lib/const/member-const";

// Reusable hover image component

const OurTeamPage = () => {
  return (
    <main className="mx-auto max-w-7xl space-y-20 px-6 py-16 md:px-12">
      {/* Page Heading */}
      <section>
        <h1 className="mb-4 text-4xl font-bold">Our Team</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Meet the dedicated professionals and leaders who drive the Sainte
          Thérèse Foundation's mission to improve healthcare access for
          underserved communities in Rwanda.
        </p>
      </section>

      {/* Leaders */}
      <section id="leaders" className="space-y-8">
        <h2 className="mb-6 text-3xl font-semibold">Leaders</h2>
        <div className="flex flex-row flex-wrap gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex flex-row gap-3">
              <HoverImage
                src1={leader.image}
                src2={leader.image2}
                alt={leader.name}
              />
              <div className="">
                <h4 className="font-semibold">{leader.name}</h4>
                <span className="text-primary text-sm">{leader.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section id="team-members" className="space-y-8">
        <h2 className="mb-6 text-3xl font-semibold">Team Members</h2>
        <div className="flex flex-row flex-wrap gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-row items-start gap-3">
              <HoverImage
                src1={member.image}
                src2={member.image2}
                alt={member.name}
              />
              <div className="">
                <h4 className="font-semibold">{member.name}</h4>
                <span className="text-primary text-sm">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OurTeamPage;
