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
    slug: "ai-scorecard",
    title: "Public-Sector AI Use-Case Scorecard",
    subtitle: "Self-initiated · 2026 · Applied AI / public sector",
    tag: "Applied AI",
    liveUrl: "/ai-scorecard",
    description:
      "An interactive tool that scopes a public-sector AI use case, scores it for priority, and generates the evaluation set and production-readiness gate it needs to move from pilot to production. Prototyped hands-on in Claude Code.",
    problem:
      "Most public-sector AI never makes it out of the demo. A model does something impressive in a workshop, everyone's excited, and then it dies in the gap between that demo and a system a ministry can actually trust and run.\n\nThe hard part isn't the model. It's deciding which use cases are worth doing, being honest about the risk, and knowing what \"reliable enough to ship\" concretely means before anyone builds.",
    whatIDid:
      "I built a working tool that models the front of that funnel: the part a forward-deployed product person owns before engineering starts. You scope a candidate use case (entity, problem, users, solution pattern), score it across five levers (mission impact, feasibility, data readiness, trust and risk exposure, time to value), and it computes a priority and plots it on a value-versus-feasibility quadrant.\n\nThe part I care most about is what happens next. It generates an evaluation plan (the specific metrics and the eval set) that changes by solution pattern, because evals for document extraction look nothing like evals for an agentic workflow or a forecasting model. And it produces a production-readiness gate that gets stricter as risk rises, up to human-in-the-loop review, red-teaming, and data residency for sovereign contexts.\n\nI prototyped the whole thing hands-on in Claude Code. The scoring is deliberately transparent and opinionated. It's not a validated model. What it does is force an honest conversation about reliability before build, which is exactly the conversation these projects tend to skip.",
    outcome:
      "A self-contained, working demonstration of how I'd take public-sector AI from pilot to production, and of a way of working I think is fairly rare in product: building the thing rather than just describing it. Open the live tool to try it.",
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
      "I built LacunaFit from scratch and ran every part of it myself. That meant product development, supplier sourcing and management, fulfilment partnerships, customer research, and all growth and distribution channels: email lifecycle via Omnisend, social media (growing to 9k+ followers), and direct customer relationships.\n\nThe product decisions were grounded in demand signals from the start. I didn't launch a range and hope. I tested, iterated, and made explicit decisions about what to keep, kill or pivot based on unit economics and customer feedback. That discipline is what allowed a bootstrapped brand to stay viable across four years and 10 product launches.\n\nThroughout, I owned the full customer lifecycle: acquisition, conversion, retention and resolution. A 48% returning customer rate wasn't something I optimised for in isolation. It came out of understanding what the customer needed and consistently delivering it.\n\nWhen the margin profile no longer justified continuing to scale, I made the decision to close the business. That was a deliberate, data-driven call rather than a failure of nerve.",
    outcome:
      "£220k in revenue across the UK and Ireland, a 48% returning customer rate, and an average 4.8/5 star rating across four years. Ten products launched and validated against real demand. A business built, run and closed on my own terms.",
  },
  {
    slug: "clavium-gtm",
    title: "Clavium - Treasury Manager GTM",
    subtitle: "Product Manager · 2025–2026 · Crypto payments",
    tag: "GTM Strategy",
    description:
      "End-to-end GTM strategy for a crypto treasury management platform, from market research to roadmap.",
    problem:
      "Clavium had a treasury management product but no clear picture of who it was really for. The market for crypto custody and payments is broad and noisy: lots of potential segments, very different needs, very different willingness to pay.\n\nBefore building further, the question was simple enough. Who is the right customer, and what do they actually need?",
    whatIDid:
      "I led the end-to-end GTM strategy for the platform, starting with structured market research across four international industry conferences. Rather than working from assumptions, I used those events as a primary research environment: speaking directly with practitioners, mapping the competitive landscape, and stress-testing early hypotheses about where the real demand was.\n\nThe insight that came out was specific. Family offices entering crypto were a high-value, underserved segment. They needed secure, governance-light custody solutions, and the existing market wasn't serving them well. I sized the serviceable obtainable market at $16M ARR over a five-year projection.\n\nFrom there I drove the product strategy, roadmap, OKRs and KPIs for the platform, managing two product owners overseeing delivery across engineering teams of 10–15 people.",
    outcome:
      "A grounded GTM strategy with a clearly defined primary segment, a sized market opportunity, and a product roadmap built around real customer needs rather than internal assumptions.",
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
      "I grew into this product. I started as a product owner embedded with the engineering team: managing the backlog, running Agile ceremonies, learning the technical domain in detail. Over time my scope expanded, from delivery ownership to roadmap strategy, and from working alongside a team to managing other POs.\n\nThe product work itself covered a lot of ground. Early on, the platform operated on Bitcoin only. I led the expansion to Ethereum and ERC-20 tokens, a meaningful technical lift that required new approaches to address clustering and source-of-funds tracing on a very different chain architecture.\n\nOn the commercial side, I worked closely with sales and marketing to bring in new B2B customers: understanding what different industries needed from the platform, translating that into product decisions, and making sure what we were selling matched what we could deliver. On the product side, I led the addition of new monitoring metrics, expanding what the platform could detect and therefore its value proposition to existing and prospective clients. I also worked on the UI, improving how operators interacted with the data and making a technically complex product easier to act on in practice.\n\nRunning alongside this was a global launch across five markets: Europe, India, Indonesia, the US and Canada. Each market brought its own operational and regulatory considerations, and coordinating across that many geographies while keeping the product coherent was a significant part of the work.",
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
      "Shell Remote Sense was a real-time oil condition monitoring service for industrial equipment: sensors on machinery feeding live data to a platform that tells operators when something is wrong before it becomes a failure.\n\nThe product existed and it worked, but it needed to grow. More customers, more markets, more capability.",
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
      'This was a venture built from scratch inside Shell\'s digital innovation team. The question at the start wasn\'t "what should we build". It was "is there a real problem here worth solving, and for whom?"\n\nTulli was an early-stage wind energy venture, and my job was to find out whether the opportunity was real before anyone committed serious resource to building it.',
    whatIDid:
      "I led the product work from the earliest stage: customer discovery, pain point mapping, and understanding where the real gap in the market was. That meant getting in front of potential customers, running structured interviews, and being willing to challenge assumptions, including the founding hypothesis, when the evidence pointed elsewhere.\n\nFrom the discovery work, I developed the initial product concept and validation roadmap: what we'd build first, what we'd test, and what success would look like at each stage before moving forward. I also built the business case that secured $1.5M in internal funding to take the venture further.",
    outcome:
      "A funded venture with a validated product direction, built on real customer evidence rather than internal conviction. Received a Special Recognition Award from Shell for the work.\n\nIt was also one of the formative experiences that taught me how to think about product from first principles, before there's a roadmap, a team or a brief.",
  },
  {
    slug: "elyndra",
    title: "Elyndra",
    subtitle: "Product Advisor · 2024 · AI startup, social care",
    tag: "Product Advisory",
    description:
      "Product advisory work that helped an early-stage AI startup secure £1M in VC funding.",
    problem:
      "Elyndra was an AI startup in social care with a promising concept, but it needed product management structure to attract serious investment and build effectively.",
    whatIDid:
      "I volunteered as a product advisor to help the founder implement product management best practices. That meant introducing agile methodology and ticket-based development for day-to-day MVP build management, and working with the founder to create a company vision and streamline problem identification.",
    outcome:
      "The work contributed to securing £1M in VC funding, with 3 pivotal feature decisions that resonated with 90% of beta users.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
