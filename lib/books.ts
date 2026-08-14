export type Book = {
  slug: string;
  title: string;
  fullTitle?: string;
  author: string;
  status: "read" | "reading" | "unread";
  /** Why it's on the shelf. */
  blurb: string;
  /** What I took from it. Only set once read. */
  takeaway?: string;
  /** Opening line of the LinkedIn post it became, if it became one. */
  postHook?: string;
  /** Link to that post. */
  postUrl?: string;
  /** Spine cloth colour. */
  colour: string;
  /** Spine text colour. */
  ink: string;
  /** Relative spine thickness, in px. */
  thickness: number;
  /** Relative spine height, in px. */
  height: number;
};

export const books: Book[] = [
  {
    slug: "the-power-of-pull",
    title: "The Power of Pull",
    fullTitle:
      "The Power of Pull: What You Need to Know About Customer Demand to Build a Successful Startup (and Why Most Founders Get It Wrong)",
    author: "Rob Snyder",
    status: "read",
    blurb:
      "Rob Snyder argues that customer demand is all that matters: find real demand and customers pull the product out of your hands rather than you pushing it. His PULL framework starts from what customers are trying to accomplish, why they're stuck, and what motivates them to act.",
    takeaway:
      "Demand is supply-agnostic - it's what buyers are trying to accomplish, and it exists whether or not your product does. But a problem isn't demand until it's unavoidable right now and they're already acting on it. Bitching ain't switching. And you can't find that in a normal discovery conversation: people tell you what you want to hear, so the test has to be part of a sales process where they put money where their mouth is.",
    postHook:
      "It did the thing books almost never do: challenged a premise I didn't realise was up for challenge.",
    postUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7490335008230981632/",
    colour: "#2563C9",
    ink: "#F2F6FF",
    thickness: 65,
    height: 317,
  },
  {
    slug: "everybody-lies",
    title: "Everybody Lies",
    fullTitle:
      "Everybody Lies: Big Data, New Data, and What the Internet Can Tell Us About Who We Really Are",
    author: "Seth Stephens-Davidowitz",
    status: "read",
    blurb:
      "On how new data sources - especially Google searches - reveal what people actually think and want, versus what they'll admit. And on how to use data well.",
    takeaway:
      "Right data beats more data. The skill isn't gathering data, it's finding the data that answers the question you're actually asking. And big data still needs small data: even with masses of it, the human, on-the-ground view is what completes the picture - which matters more in the AI age, not less.",
    postHook:
      'Somewhere along the way we all decided the answer to basically everything is "more data". This book made me think we might have that backwards.',
    postUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7488535362655379456/",
    colour: "#C8432F",
    ink: "#FFF1EC",
    thickness: 53,
    height: 333,
  },
  {
    slug: "the-unaccountability-machine",
    title: "The Unaccountability Machine",
    author: "Dan Davies",
    status: "read",
    blurb:
      "Dan Davies on how organisations create accountability sinks - systems and processes that diffuse responsibility so no one is answerable for decisions - drawing on cybernetics and systems thinking.",
    takeaway:
      "The accountability sink: a policy or process you can't argue with, that soaks up the blame so there's never a human at the other end who could have chosen differently. The decision gets made far upstream from the consequences, and the information that might have corrected it never flows back.",
    postHook:
      "\"That's just our policy\" might be the most quietly infuriating sentence in the English language. Turns out there's a name for it.",
    postUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7484555143103954944/",
    colour: "#1F9E77",
    ink: "#06281F",
    thickness: 59,
    height: 306,
  },
  {
    slug: "alchemy",
    title: "Alchemy",
    fullTitle: "Alchemy: The Surprising Power of Ideas That Don't Make Sense",
    author: "Rory Sutherland",
    status: "unread",
    blurb:
      "Rory Sutherland on behavioural economics and the psychology of value - why seemingly irrational choices often make sense, and what that means for understanding real human behaviour. Relevant to field research and how people actually decide versus how they say they do.",
    colour: "#E8A227",
    ink: "#3D2A05",
    thickness: 56,
    height: 325,
  },
  {
    slug: "the-master-and-his-emissary",
    title: "The Master and His Emissary",
    author: "Iain McGilchrist",
    status: "unread",
    blurb:
      "On the divided brain and the making of the Western world - how the two hemispheres attend to the world differently, and the cultural consequences of that divide.",
    colour: "#6D4FC4",
    ink: "#F4F0FF",
    thickness: 81,
    height: 341,
  },
  {
    slug: "irresistible",
    title: "Irresistible",
    fullTitle:
      "Irresistible: The Rise of Addictive Technology and the Business of Keeping Us Hooked",
    author: "Adam Alter",
    status: "unread",
    blurb:
      "Adam Alter on how modern technology and products are engineered to capture attention and form compulsive habits. Sits in the same behavioural and attention space as Beyond Belief.",
    colour: "#C43462",
    ink: "#FFF0F5",
    thickness: 51,
    height: 314,
  },
  {
    slug: "beyond-belief",
    title: "Beyond Belief",
    author: "Nir Eyal",
    status: "unread",
    blurb:
      "Nir Eyal on how our hidden beliefs - not effort, discipline or circumstance - set the ceiling on what we attempt. The argument: beliefs aren't facts, they're tools, and understanding how they work lets you set aside the unhelpful ones.",
    colour: "#12A0A8",
    ink: "#04302F",
    thickness: 48,
    height: 301,
  },
  {
    slug: "quantum-marketing",
    title: "Quantum Marketing",
    author: "Raja Rajamannar",
    status: "unread",
    blurb:
      "Mastercard's CMO on how marketing is being reshaped by new technology and shifting consumer expectations - his framing of the fifth paradigm of marketing.",
    colour: "#7CA82B",
    ink: "#22300A",
    thickness: 54,
    height: 322,
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const readBooks = books.filter((b) => b.status === "read");
export const unreadBooks = books.filter((b) => b.status !== "read");
