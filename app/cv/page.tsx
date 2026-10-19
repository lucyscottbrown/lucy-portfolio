import type { Metadata } from "next";
import Link from "next/link";
import {
  profile,
  work,
  founder,
  education,
  qualifications,
  skills,
  type CvRole,
} from "@/lib/cv";

export const metadata: Metadata = {
  title: "CV - Lucy Scott Brown",
  description:
    "Senior product leader: data-heavy, trust-critical products across crypto, fintech and industrial SaaS.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-6">
      {children}
    </h2>
  );
}

function Role({ role }: { role: CvRole }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-[15px] font-medium">
            {role.title}, {role.org}
          </h3>
          <span className="text-[13px] text-gray-400 whitespace-nowrap">
            {role.dates}
          </span>
        </div>
        <p className="text-[13px] text-gray-400 mt-1">
          {role.context ? `${role.context} · ` : ""}
          {role.location}
        </p>
      </div>
      {role.note && (
        <p className="text-[14px] leading-[1.7] text-gray-500 italic">
          {role.note}
        </p>
      )}
      <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-gray-300">
        {role.bullets.map((b) => (
          <li key={b} className="text-[14px] leading-[1.7] text-gray-700">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoleSection({ label, roles }: { label: string; roles: CvRole[] }) {
  return (
    <section className="border-t border-gray-200 py-12">
      <SectionLabel>{label}</SectionLabel>
      <div className="flex flex-col gap-10">
        {roles.map((role) => (
          <Role key={`${role.org}-${role.dates}`} role={role} />
        ))}
      </div>
    </section>
  );
}

export default function CvPage() {
  return (
    <div className="max-w-[720px] mx-auto px-10 max-sm:px-5">
      <section className="py-14">
        <Link
          href="/about"
          className="text-[12px] text-gray-400 hover:text-[#185FA5] transition-colors mb-6 inline-block"
        >
          ← About me
        </Link>
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-4">
          CV
        </p>
        <h1 className="text-[32px] font-medium tracking-tight mb-3">
          Lucy Scott Brown
        </h1>
        <p className="text-[13px] text-gray-400 mb-8">
          Dubai, UAE ·{" "}
          <a
            href="mailto:lucyscottbrown@gmail.com"
            className="text-[#185FA5] hover:underline"
          >
            lucyscottbrown@gmail.com
          </a>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/lucyscottbrown"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#185FA5] hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p className="text-[15px] leading-[1.75] text-gray-700">{profile}</p>
      </section>

      <RoleSection label="Work experience" roles={work} />
      <RoleSection label="Founder experience" roles={founder} />

      <section className="border-t border-gray-200 py-12">
        <SectionLabel>Education</SectionLabel>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-[15px] font-medium">{education.institution}</h3>
          <span className="text-[13px] text-gray-400">{education.dates}</span>
        </div>
        <p className="text-[14px] text-gray-700 mt-1">{education.degree}</p>
      </section>

      <section className="border-t border-gray-200 py-12">
        <SectionLabel>Qualifications</SectionLabel>
        <ul className="flex flex-col gap-2">
          {qualifications.map((q) => (
            <li key={q} className="text-[14px] leading-[1.7] text-gray-700">
              {q}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-gray-200 pt-12 pb-20">
        <SectionLabel>Skills and tools</SectionLabel>
        <dl className="flex flex-col gap-4">
          {skills.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-[13px] font-medium">{label}</dt>
              <dd className="text-[14px] leading-[1.7] text-gray-700 mt-1">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
