// A one-line-per-role summary for the homepage. The detail lives on /cv
// (lib/cv.ts), so keep this in step with that rather than adding descriptions.

export type TimelineEntry = {
  company: string;
  role: string;
  period: string;
};

export const timeline: TimelineEntry[] = [
  {
    company: "Clavium (formerly The Workshop)",
    role: "Product Manager",
    period: "Jan 2025 – Jun 2026",
  },
  {
    company: "The Workshop",
    role: "Product Owner → Product Manager",
    period: "May 2022 – Dec 2024",
  },
  {
    company: "LacunaFit",
    role: "Founder",
    period: "Nov 2020 – Dec 2024",
  },
  {
    company: "Shell Remote Sense",
    role: "Product Manager",
    period: "Dec 2019 – Mar 2022",
  },
  {
    company: "Shell Digital Innovation",
    role: "Venture Associate",
    period: "Oct 2018 – Dec 2019",
  },
  {
    company: "Shell",
    role: "Analyst / Product Owner",
    period: "Jan 2017 – Sep 2018",
  },
];
