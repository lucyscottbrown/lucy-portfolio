// Hand-copied from the master CV in the Obsidian vault (Jobs/CV.md).
// There is no sync: when the master CV changes, update this file too.

export type CvRole = {
  title: string;
  org: string;
  context?: string;
  location: string;
  dates: string;
  note?: string;
  bullets: string[];
};

export const profile =
  "Senior product leader with 8+ years building and scaling data-heavy, trust-critical products across crypto, fintech and industrial SaaS, spanning the full product lifecycle from GTM strategy and market sizing through to engineering delivery. Has shipped machine-learning-driven products end to end, working alongside data scientists to turn model output into insight that operators trust and act on. Led company-wide AI adoption, embedding tools such as Claude Code into product, prototyping and research workflows and formalising best practice through training and internal processes. Founder of a DTC e-commerce brand scaled to £220k revenue, owning the website end to end - copy, A/B testing, conversion funnel and user-journey analytics - and bringing an owner's commercial instinct to product and growth decisions.";

export const work: CvRole[] = [
  {
    title: "Product Manager",
    org: "Clavium (formerly The Workshop)",
    context: "B2B Crypto Payments & Blockchain Analytics",
    location: "London, UK",
    dates: "Jan 2025 – Jun 2026",
    bullets: [
      "Conducted end-to-end GTM strategy for a treasury management platform, running market research across international conferences and identifying family offices entering crypto as a high-value underserved segment, sizing the SOM at $16M ARR over a 5-year projection",
      "Founded and led the company-wide AI working group, coordinating parallel engineering and product tracks: engineering drove AI stack selection and development acceleration, while the product track built an experimentation culture, drove tooling adoption (including Claude Code) and formalised best practice through company-wide training and demo sessions",
      "Applied AI hands-on across the product workflow: prototyped features and built internal tools and web pages with Claude Code, accelerated market and competitive research, and sped up production of product and go-to-market content",
      "Drove product strategy, roadmap, OKRs and KPIs for the blockchain analytics risk management platform",
      "Line-managed a team of up to 4 Product Owners (2 years of line management in total) and oversaw delivery across engineering teams of 10-15, building capability through coaching and structured ways of working",
      "Delivered an integration between blockchain analytics and treasury management systems, reducing user steps by 50% through automated protective actions for client transaction screening",
    ],
  },
  {
    title: "Product Manager",
    org: "The Workshop",
    context: "B2B Crypto Payments Platform",
    location: "London, UK",
    dates: "May 2022 – Dec 2024",
    note: "Crypto payments division of a sports betting and iGaming group. Progressed from Product Owner → Senior Product Owner → Product Manager",
    bullets: [
      "Led development of a blockchain analytics risk management solution to reduce double-spend transactions, driving over 1,000 daily transactions and cost savings exceeding $50k",
      "Managed the in-house transition of a blockchain analytics tool tracking sources of funds on the BTC network using proprietary tracing algorithms, heuristic analysis and deterministic address clustering, providing risk scores for faster, more secure client transaction screening",
      "Orchestrated the rollout of new cryptocurrencies including ETH and ERC-20 tokens",
      "Worked with a team of 12 international engineers; managed the backlog, ran agile ceremonies and managed stakeholders",
    ],
  },
  {
    title: "Product Manager",
    org: "Shell",
    context: "Shell Remote Sense, B2B IoT SaaS",
    location: "London, UK",
    dates: "Dec 2019 – Mar 2022",
    bullets: [
      "Owned a machine-learning-driven condition-monitoring service end to end: sensors embedded in the lubricant of operating industrial equipment streamed continuous data, and ML models identified contaminants and degradation signals, delivering predictive-maintenance insights to equipment operators before failures occurred",
      "Worked directly with machine-learning data scientists to define what the models could credibly support, and shaped how confidence and uncertainty were presented so operators trusted the insight and acted on it",
      "Launched the service commercially, delivering $400k revenue from 6 new B2B customers, and contributed to the product's marketing work in Salesforce",
      "Led the global product launch across Europe, India, Indonesia, the US and Canada, working embedded within an IBM iX delivery team",
      "Designed the internal service model that made the product deliverable: how teams invoiced for it, where the hardware physically sat, how it was shipped, and who owned each stage of the journey across delivery, commercial and logistics",
    ],
  },
  {
    title: "Venture Associate",
    org: "Shell",
    context: "Digital Innovation Team",
    location: "London, UK",
    dates: "Oct 2018 – Dec 2019",
    bullets: [
      "Founding member of a wind-energy venture, embedded within a BCG Digital Ventures team; received a Special Recognition Award and secured $1.5M in internal funding",
      "Led product development from ideation to MVP, including customer research and business case development",
      "Ran 3 innovation sprints across B2B sectors, including ethnographic research and analysis of 100+ interviews",
    ],
  },
  {
    title: "Analyst / Product Owner",
    org: "Shell",
    location: "London, UK",
    dates: "Jan 2017 – Sep 2018",
    note: "Progressed through early career roles in quality analysis and process improvement",
    bullets: [
      "Delivered a blockchain application for managing supplier quality certificates",
      "Built an in-house quality incident tracking system adopted across 50+ global plants, reducing time to resolve incidents by over 30%",
    ],
  },
];

export const founder: CvRole[] = [
  {
    title: "Founder",
    org: "LacunaFit",
    context: "E-commerce Startup",
    location: "London, UK",
    dates: "Nov 2020 – Dec 2024",
    bullets: [
      "Founded a DTC apparel brand solving fit problems for petite women (under 5'4\"), launching 10 products across the UK and Ireland",
      "Scaled to £220k revenue with a 4.8/5 average rating and a 48% returning customer rate",
      "Selected and negotiated directly with manufacturers in China, agreeing commercial terms without a procurement function and managing the supply relationship end to end; product quality held at a 4.8/5 average rating",
      "Owned the e-commerce website end to end on Shopify: merchandising, product pages, site copy, checkout flow and the full path from first visit to repeat purchase",
      "Ran A/B tests across product copy, landing pages, imagery and offers, using results rather than instinct to decide what shipped",
      "Monitored the conversion funnel and user journey, analysing drop-off at each step and prioritising fixes by revenue impact",
      "Owned customer research, operations and marketing; ran email and paid social campaigns using Shopify's built-in marketing tools and Omnisend for marketing automation, and used AI tools to produce content at pace, growing social presence to 9k+ followers across Instagram, TikTok, Facebook and YouTube",
    ],
  },
];

export const education = {
  institution: "University of Bath",
  degree: "BSc (Hons) Natural Sciences, First Class",
  location: "Bath, UK",
  dates: "2012 – 2016",
};

export const qualifications = [
  "Product School - Product Strategy Micro-Certification (Sep 2024)",
  "Pendo.io - AI for Product Management (Dec 2023)",
  "General Assembly - Product Management Course, London (Sep 2018)",
  "Scrum Alliance - Certified Scrum Product Owner, London (Mar 2018)",
];

export const skills = [
  {
    label: "Tools",
    value:
      "Jira, Trello, Miro, Figma, Zendesk, Salesforce (light use), Shopify, Omnisend, Claude, Claude Code, Google Workspace, Microsoft Office",
  },
  {
    label: "AI enablement",
    value:
      "Leading adoption, prototyping with Claude Code, AI-accelerated research and content; mentoring senior leaders on digital transformation, e-commerce and AI",
  },
];
