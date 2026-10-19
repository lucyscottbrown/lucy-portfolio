export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  problem: string;
  whatIDid: string;
  outcome: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "triage",
    title: "Triage - AI Claims Copilot",
    subtitle: "Prototype · 2026 · Applied AI / insurance",
    tag: "Applied AI",
    liveUrl: "/triage",
    description:
      "An AI copilot for car-insurance claims. It reads damage photos, drafts an itemised estimate, scores its own confidence on each line, and decides which claims can be approved without a person reviewing them. Built hands-on in Claude Code.",
    problem:
      "Car-insurance claims run on two people's judgement in sequence. An agent looks at the damage photos, prices the repair by eye and experience, and a senior adjuster re-reviews it before anything is authorised. It's slow, it's inconsistent (two agents will price the same dent differently), and it spends senior time on a scratched bumper in exactly the same way it does on a write-off.\n\nVision models can already identify damage in a photo. What is less clear is how much of the review and approval process can safely run without a person, and how the system should recognise the claims that still need one.",
    whatIDid:
      "I built Triage, a working prototype of an adjuster's copilot. It reads the damage photos, drafts an itemised estimate, and scores its own confidence on each line. Then it routes the claim into one of four lanes: auto-approve, assisted review, escalate, or total-loss review.\n\nIt is designed to support adjusters, not to replace them. Confidence is scored for each line item separately, because averaging the scores into one number would hide the panel that most needs a person to check it. A fraud signal overrides every other rule, so a claim that looks straightforward but has a suspicious photo still goes to a person. The thresholds that decide which lane a claim goes into are settings on the page. These thresholds are effectively the insurer's risk policy, so the insurer should set them deliberately rather than have them fixed in the code.\n\nAlongside the prototype I worked out the eval plan and the feedback loop behind it. The most important part is easy to overlook. Auto-approved claims produce no feedback on their own, so a wrong estimate that nobody complains about looks the same as a correct one. The plan catches these with a regular audit of a sample of auto-approved claims, and only the results of that audit can justify widening what gets auto-approved.\n\nI prototyped the whole thing hands-on in Claude Code. The vision step is simulated with a clickable diagram, because the product decisions I wanted to show all come after the damage has been identified.",
    outcome:
      "A working demonstration of where automation should stop in a regulated, high-liability process, and how the insurer can audit that limit as well as adjust it. In the live tool you can move the thresholds and see claims move between lanes.",
  },
  {
    slug: "ai-scorecard",
    title: "Public-Sector AI Use-Case Scorecard",
    subtitle: "Self-initiated · 2026 · Applied AI / public sector",
    tag: "Applied AI",
    liveUrl: "/ai-scorecard",
    description:
      "An interactive tool that scopes a public-sector AI use case, scores it for priority, and generates the evaluation set and production-readiness gate it needs to move from pilot to production. Prototyped hands-on in Claude Code.",
    problem:
      "Many public-sector AI projects stop after the demo. A model performs well in a workshop, but the project never becomes a system that a ministry trusts enough to run.\n\nThe model is usually not the main problem. The harder work is choosing which use cases are worth doing, assessing the risk honestly, and agreeing what \"reliable enough to launch\" means for that use case before anyone starts building.",
    whatIDid:
      "I built a working tool that covers the first stage of that process: the work a product person does with the client before engineering starts. You scope a candidate use case (entity, problem, users, solution pattern), score it across five levers (mission impact, feasibility, data readiness, trust and risk exposure, time to value), and it computes a priority and plots it on a value-versus-feasibility quadrant.\n\nThe most useful part is what it produces next. It generates an evaluation plan (the specific metrics and the test data) that changes with the type of solution, because evaluating document extraction is very different from evaluating an agentic workflow or a forecasting model. And it produces a production-readiness gate that gets stricter as risk rises, up to human-in-the-loop review, red-teaming, and data residency for sovereign contexts.\n\nI prototyped the whole thing hands-on in Claude Code. The scoring is simple and based on my own judgement, and it is not a validated model. Its purpose is to get the team to agree how reliable the system needs to be before they build it, which is a step these projects often skip.",
    outcome:
      "A self-contained, working demonstration of how I would take a public-sector AI project from pilot to production. I built the tool myself rather than describing the approach in a document. You can try it in the live tool.",
  },
  {
    slug: "lacunafit",
    title: "LacunaFit",
    subtitle: "Founder · 2020–2024 · DTC e-commerce, petite women's clothing",
    tag: "Venture Creation",
    description:
      "Founded and scaled a niche DTC e-commerce brand from zero: an underserved customer segment, 10 products launched across the UK and Ireland, and £220k in revenue over four years.",
    problem:
      "Petite women's clothing is a chronically underserved segment. Most brands treat it as an afterthought, producing cut-down versions of standard sizing rather than garments designed for the proportions of the customer.\n\nThe problem ran deeper than product, though. Petite shoppers had been burned enough times that they were sceptical of any new brand claiming to solve it, so there was a trust gap to close as well.\n\nThe challenge was to build something that actually worked for this customer, earn that trust, and do it without external funding.",
    whatIDid:
      "I built LacunaFit from scratch and ran every part of it myself. That meant product development, supplier sourcing and management, fulfilment partnerships, customer research, and all growth and distribution channels: email lifecycle via Omnisend, social media (growing to 9k+ followers), and direct customer relationships.\n\nProduct decisions were based on evidence of demand from the start. Instead of launching a full range at once, I tested products, changed them, and decided what to keep, drop or rework based on unit economics and customer feedback. This is what kept a bootstrapped brand viable across four years and 10 product launches.\n\nThroughout, I owned the full customer lifecycle: acquisition, conversion, retention and resolution. The 48% returning customer rate came from understanding what customers needed and delivering it consistently, rather than from targeting that number on its own.\n\nWhen the margin profile no longer justified continuing to scale, I decided to close the business, based on the numbers.",
    outcome:
      "£220k in revenue across the UK and Ireland, a 48% returning customer rate, and an average 4.8/5 star rating across four years. Ten products launched and validated against real demand.",
  },
  {
    slug: "clavium-gtm",
    title: "Clavium - Treasury Manager GTM",
    subtitle: "Product Manager · 2025–2026 · Crypto payments",
    tag: "GTM Strategy",
    description:
      "End-to-end GTM strategy for a crypto treasury management platform, from market research to roadmap.",
    problem:
      "Clavium had a treasury management product but no clear picture of who it was really for. The market for crypto custody and payments is broad and noisy: lots of potential segments, very different needs, very different willingness to pay.\n\nBefore building further, we needed to answer two questions: who is the right customer, and what do they need?",
    whatIDid:
      "I led the end-to-end GTM strategy for the platform, starting with structured market research across four international industry conferences. I used those events for primary research: speaking directly with practitioners, mapping the competitive landscape, and stress-testing early hypotheses about where the real demand was.\n\nThe research pointed to a specific segment. Family offices entering crypto were a high-value, underserved segment. They needed secure, governance-light custody solutions, and the existing market wasn't serving them well. I sized the serviceable obtainable market at $16M ARR over a five-year projection.\n\nFrom there I drove the product strategy, roadmap, OKRs and KPIs for the platform, managing two product owners overseeing delivery across engineering teams of 10–15 people.",
    outcome:
      "A grounded GTM strategy with a clearly defined primary segment, a sized market opportunity, and a product roadmap based on what customers told us they needed.",
  },
  {
    slug: "clavium-analytics",
    title: "The Workshop - Blockchain Analytics Platform",
    subtitle:
      "Product Owner → Senior PO → Product Manager · 2022–2024 · Blockchain analytics",
    tag: "Blockchain Analytics",
    description:
      "Three years growing a blockchain analytics product from BTC-only to multi-chain, from product owner to product manager.",
    problem:
      "Blockchain analytics for crypto transaction screening is technically complex and commercially critical. Get it wrong and clients face regulatory exposure or financial loss.\n\nWhen I joined, the platform was early-stage: functional, but with significant gaps in coverage, accuracy, and integration with the rest of the product suite. The work over three years was to close those gaps while the product and the team grew around it.",
    whatIDid:
      "My role on this product grew over three years. I started as a product owner embedded with the engineering team: managing the backlog, running Agile ceremonies, learning the technical domain in detail. Over time my scope expanded, from delivery ownership to roadmap strategy, and from working alongside a team to managing other POs.\n\nThe product work itself covered a lot of ground. Early on, the platform operated on Bitcoin only. I led the expansion to Ethereum and ERC-20 tokens, a meaningful technical lift that required new approaches to address clustering and source-of-funds tracing on a very different chain architecture.\n\nOn the commercial side, I worked closely with sales and marketing to bring in new B2B customers: understanding what different industries needed from the platform, translating that into product decisions, and making sure what we were selling matched what we could deliver. On the product side, I led the addition of new monitoring metrics, expanding what the platform could detect and therefore its value proposition to existing and prospective clients. I also worked on the UI, improving how operators interacted with the data and making a technically complex product easier to act on in practice.\n\nRunning alongside this was a global launch across five markets: Europe, India, Indonesia, the US and Canada. Each market brought its own operational and regulatory considerations, and coordinating across that many geographies while keeping the product coherent was a significant part of the work.",
    outcome:
      "$400k revenue from six new B2B customers, and a product with meaningfully broader capability and a wider geographic footprint than when I joined.",
  },
  {
    slug: "shell-remote-sense",
    title: "Shell Remote Sense",
    subtitle: "Product Manager · 2019–2022 · Industrial IoT / B2B SaaS",
    tag: "Industrial IoT",
    description: "Scaling a B2B IoT SaaS product across five global markets.",
    problem:
      "Shell Remote Sense was a real-time oil condition monitoring service for industrial equipment: sensors on machinery feeding live data to a platform that tells operators when something is wrong before it becomes a failure.\n\nThe product worked, and my job was to grow it: more customers, more markets and more capability.",
    whatIDid:
      "My role was scaling the product across several dimensions at once. On the commercial side, I worked closely with sales and marketing to bring in new B2B customers: understanding what different industries needed from the platform, translating that into product decisions, and making sure what we were selling matched what we could deliver.\n\nOn the product side, I led the addition of new monitoring metrics, expanding what the platform could detect and therefore its value proposition to existing and prospective clients. I also worked on the UI, improving how operators interacted with the data and making a technically complex product easier to act on in practice.\n\nRunning alongside this was a global launch across five markets: Europe, India, Indonesia, the US and Canada. Each market brought its own operational and regulatory considerations, and coordinating across that many geographies while keeping the product coherent was a significant part of the work.",
    outcome:
      "$400k revenue from six new B2B customers, and a product with meaningfully broader capability and a wider geographic footprint than when I joined.",
  },
  {
    slug: "tulli",
    title: "Tulli - Venture Creation, Early Stage",
    subtitle: "Product Lead · 2018–2019 · Wind energy / B2B",
    tag: "Venture Creation",
    description:
      "Early-stage venture creation inside Shell's digital innovation team: customer discovery, validation roadmap, and securing $1.5M in funding.",
    problem:
      'This was a venture built from scratch inside Shell\'s digital innovation team. The first question was not what to build, but whether there was a real problem worth solving, and for whom.\n\nTulli was an early-stage wind energy venture, and my job was to find out whether the opportunity was real before anyone committed serious resource to building it.',
    whatIDid:
      "I led the product work from the earliest stage: customer discovery, pain point mapping, and understanding where the real gap in the market was. That meant getting in front of potential customers, running structured interviews, and being willing to challenge assumptions, including the founding hypothesis, when the evidence pointed elsewhere.\n\nFrom the discovery work, I developed the initial product concept and validation roadmap: what we'd build first, what we'd test, and what success would look like at each stage before moving forward. I also built the business case that secured $1.5M in internal funding to take the venture further.",
    outcome:
      "A funded venture with a validated product direction, based on evidence from customers. Received a Special Recognition Award from Shell for the work.\n\nIt also taught me how to work on a product at the very start, before there is a roadmap, a team or a brief.",
  },
];

export type FunProject = {
  title: string;
  description: string;
  href: string;
};

// Side projects that link straight to the thing, with no case study.
export const funProjects: FunProject[] = [
  {
    title: "What Wine Are You?",
    href: "/what-wine-are-you",
    description:
      "Six very serious questions about snacks, holidays and your ideal Friday night, and a wine at the end of it. Are you a crowd-pleasing Champagne, a brooding Barolo, or something a bit more orange? No wine knowledge needed. No wrong answers. Possibly some wrong wines.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
