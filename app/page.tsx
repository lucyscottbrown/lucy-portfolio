import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import LiveBadge from "@/components/LiveBadge";
import JustForFun from "@/components/JustForFun";
import { timeline } from "@/lib/timeline";

export default function Home() {
  // The homepage shows the strongest three; the rest live on /projects.
  const [featured, ...rest] = projects.slice(0, 3);

  return (
    <div className="max-w-[720px] mx-auto px-10 max-sm:px-5">

      {/* ── Hero ── */}
      <section className="pt-14 pb-12 max-sm:pt-8 grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-8 sm:gap-10 items-start">
        <div className="flex flex-col gap-4 sm:pt-4">
          <p className="text-[13px] text-gray-500">Hey there,</p>
          <h1 className="text-[44px] max-sm:text-[32px] leading-[1.08] font-medium tracking-tight">
            I&rsquo;m Lucy Scott Brown.
          </h1>
          <p className="text-[18px] leading-[1.6] text-gray-600 max-w-[400px]">
            I do product and GTM strategy for B2B tech companies. Most of my
            work happens in the gap between the two, which is where things tend
            to come unstuck.
          </p>
          <Link
            href="/projects"
            className="text-[15px] font-medium text-[#185FA5] hover:underline w-fit mt-1"
          >
            See my work →
          </Link>

          {/* Stats */}
          <div className="flex gap-10 mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-col gap-0.5">
              <span className="text-[32px] font-medium leading-none tracking-tight">
                8<span className="text-[#185FA5]">+</span>
              </span>
              <span className="text-[13px] text-gray-500 mt-1">Years of experience</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[32px] font-medium leading-none tracking-tight">
                Global
              </span>
              <span className="text-[13px] text-gray-500 mt-1">Impact</span>
            </div>
          </div>
        </div>

        {/* Headshot: above the intro on phones, beside it from sm up */}
        <div className="relative w-[200px] h-[260px] sm:w-[260px] sm:h-[360px] overflow-hidden flex-shrink-0 rounded-lg max-sm:order-first">
          <Image
            src="/headshot.jpg"
            alt="Lucy Scott Brown"
            fill
            sizes="(max-width: 640px) 200px, 260px"
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* ── Chip strip ── */}
      <section className="border-t border-gray-200 py-5 flex flex-wrap gap-2">
        {[
          "GTM strategy",
          "Product",
          "Crypto & payments",
          "Blockchain analytics",
          "B2B SaaS",
          "Regulated markets",
          "Early-growth stage",
        ].map((tag) => (
          <span
            key={tag}
            className="text-[13px] font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </section>

      {/* ── What do I do? ── */}
      <section className="border-t border-gray-200 py-12 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-10 items-start">
        <h2 className="text-[18px] font-medium tracking-tight leading-snug pt-0.5">
          What do I do?
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-[15px] leading-[1.75] text-gray-600">
            I&rsquo;m a senior product leader, 8+ years building and scaling B2B
            products across crypto payments, blockchain analytics, IoT SaaS and
            AI startups.
          </p>
          <p className="text-[15px] leading-[1.75] text-gray-600">
            I work best where the product is strong but the commercial story
            hasn&rsquo;t landed yet (which is more companies than you&rsquo;d think).
          </p>
          <p className="text-[15px] leading-[1.75] text-gray-600">
            The work spans the full product lifecycle: market sizing and GTM
            strategy, roadmap and OKRs, engineering delivery, and the internal
            change management that makes it all stick. That last one is the
            least glamorous bit and usually the one that decides whether any of
            the rest of it works.
          </p>
          <p className="text-[15px] leading-[1.75] text-gray-600">
            I&rsquo;ve led teams of up to 15 engineers, run market research across
            four continents, and built cross-functional working practices that
            outlast any single project.
          </p>
        </div>
      </section>

      {/* ── Experience: a summary; the detail lives on /cv ── */}
      <section className="border-t border-gray-200 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">
            Experience
          </h2>
          <Link href="/cv" className="text-[13px] text-[#185FA5] hover:underline">
            Full CV →
          </Link>
        </div>
        <ul className="flex flex-col">
          {timeline.map((entry, i) => (
            <li
              key={`${entry.company}-${entry.period}`}
              className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-0.5 py-3 ${
                i > 0 ? "border-t border-gray-100" : ""
              }`}
            >
              <span className="text-[15px]">
                <span className="font-medium">{entry.company}</span>
                <span className="text-gray-500"> · {entry.role}</span>
              </span>
              <span className="text-[13px] text-gray-500 whitespace-nowrap">
                {entry.period}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Featured work ── */}
      <section className="border-t border-gray-200 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">
            Featured work
          </h2>
          <Link href="/projects" className="text-[13px] text-[#185FA5] hover:underline">
            All {projects.length} projects →
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {/* Featured card */}
          <Link
            href={`/projects/${featured.slug}`}
            className="group block border border-gray-200 rounded p-6 max-sm:p-5 hover:border-gray-400 transition-colors"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5]">
                  {featured.tag}
                </span>
                {featured.liveUrl && <LiveBadge />}
              </div>
              <h3 className="text-[18px] font-medium leading-snug group-hover:text-[#185FA5] transition-colors">
                {featured.title}
              </h3>
              <p className="text-[13px] text-gray-500">{featured.subtitle}</p>
              <p className="text-[15px] leading-[1.6] text-gray-600 max-w-[480px]">
                {featured.description}
              </p>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block border border-gray-200 rounded p-5 hover:border-gray-400 transition-colors"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5]">
                      {project.tag}
                    </span>
                    {project.liveUrl && <LiveBadge />}
                  </div>
                  <h3 className="text-[15px] font-medium leading-snug group-hover:text-[#185FA5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-gray-500">{project.subtitle}</p>
                  <p className="text-[13px] leading-[1.6] text-gray-600 mt-1">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Just for fun ── */}
      <section className="border-t border-gray-200 py-12">
        <JustForFun />
      </section>

    </div>
  );
}
