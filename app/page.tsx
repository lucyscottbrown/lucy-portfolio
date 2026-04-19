import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { timeline } from "@/lib/timeline";

export default function Home() {
  const [featured, ...rest] = projects;

  return (
    <div className="max-w-[720px] mx-auto px-10">

      {/* ── Hero ── */}
      <section className="pt-14 pb-12 grid grid-cols-[1fr_260px] gap-10 items-start">
        <div className="flex flex-col gap-4 pt-4">
          <p className="text-[13px] text-gray-400">Hey there,</p>
          <h1 className="text-[46px] leading-[1.08] font-semibold tracking-tight">
            I'm Lucy Scott Brown.
          </h1>
          <p className="text-[16px] leading-[1.65] text-gray-500 max-w-[400px]">
            Product and GTM strategy for B2B tech companies — I work across
            product, commercial, and the gap between the two.
          </p>
          <Link
            href="/projects"
            className="text-[14px] font-medium text-[#185FA5] hover:underline w-fit mt-1"
          >
            See my work →
          </Link>

          {/* Stats */}
          <div className="flex gap-10 mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-col gap-0.5">
              <span className="text-[28px] font-semibold leading-none tracking-tight">
                8<span className="text-[#185FA5]">+</span>
              </span>
              <span className="text-[12px] text-gray-400 mt-1">Years of experience</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[28px] font-semibold leading-none tracking-tight">
                £1M<span className="text-[#185FA5]">+</span>
              </span>
              <span className="text-[12px] text-gray-400 mt-1">Funding influenced</span>
            </div>
          </div>
        </div>

        {/* Headshot */}
        <div className="relative w-[260px] h-[360px] overflow-hidden flex-shrink-0">
          <Image
            src="/headshot.jpg"
            alt="Lucy Scott Brown"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
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
            className="text-[12px] font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </section>

      {/* ── What do I do? ── */}
      <section className="border-t border-gray-200 py-12 grid grid-cols-[180px_1fr] gap-10 items-start">
        <h2 className="text-[20px] font-medium tracking-tight leading-snug pt-0.5">
          What do I do?
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-[15px] leading-[1.75] text-gray-600">
            I'm a senior product leader with 8+ years building and scaling B2B
            products — across crypto payments, blockchain analytics, IoT SaaS,
            and AI startups. I work best where the product is strong but the
            commercial story hasn't landed yet.
          </p>
          <p className="text-[15px] leading-[1.75] text-gray-600">
            My work spans the full product lifecycle: market sizing and GTM
            strategy, roadmap and OKRs, engineering delivery, and the internal
            change management that makes it all stick. I've led teams of up to 8
            engineers, run international market research across four continents,
            and built the kind of cross-functional working practices that outlast
            any single project.
          </p>
          <div className="flex gap-6 mt-2 pt-4 border-t border-gray-100 text-[13px] text-gray-400">
            <span>8<span className="text-[#185FA5]">+</span> years experience</span>
            <span className="text-gray-200">·</span>
            <span>4 continents</span>
            <span className="text-gray-200">·</span>
            <span>$16M SOM sized</span>
          </div>
        </div>
      </section>

      {/* ── Experience timeline ── */}
      <section className="border-t border-gray-200 py-12">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-8">
          Experience
        </h2>
        <div className="flex flex-col">
          {timeline.map((entry, i) => (
            <div
              key={i}
              className={`grid grid-cols-[180px_1fr] gap-10 py-6 ${
                i > 0 ? "border-t border-gray-100" : ""
              }`}
            >
              <div className="flex flex-col gap-1 pt-0.5">
                <span className="text-[12px] text-gray-400">{entry.period}</span>
                <span className="text-[12px] text-gray-400">{entry.location}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[14px] font-medium text-[#0a0a0a]">
                  {entry.company}
                </span>
                <span className="text-[13px] text-gray-400">{entry.role}</span>
                <p className="text-[13px] leading-[1.65] text-gray-500 mt-1">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured work ── */}
      <section className="border-t border-gray-200 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
            Featured work
          </span>
          <Link href="/projects" className="text-[12px] text-[#185FA5] hover:underline">
            View all →
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {/* Featured card */}
          <Link
            href={`/projects/${featured.slug}`}
            className="group block border border-gray-200 rounded p-6 hover:border-gray-400 transition-colors"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-3 flex-1">
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5]">
                  {featured.tag}
                </span>
                <h3 className="text-[18px] font-medium leading-snug group-hover:text-[#185FA5] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-[13px] text-gray-400">{featured.subtitle}</p>
                <p className="text-[14px] leading-[1.6] text-gray-600 max-w-[420px]">
                  {featured.description}
                </p>
              </div>
              <span className="text-[52px] font-medium leading-none select-none flex-shrink-0" style={{ color: "#e5e5e5" }}>
                01
              </span>
            </div>
          </Link>

          {/* 2-col grid */}
          <div className="grid grid-cols-2 gap-4">
            {rest.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block border border-gray-200 rounded p-5 hover:border-gray-400 transition-colors"
              >
                <div className="flex flex-col gap-2.5">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5]">
                    {project.tag}
                  </span>
                  <h3 className="text-[15px] font-medium leading-snug group-hover:text-[#185FA5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-gray-400">{project.subtitle}</p>
                  <p className="text-[13px] leading-[1.6] text-gray-500 mt-1">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="border-t border-gray-200 py-12">
        <p className="text-[15px] text-gray-500 mb-3">
          Available for product and GTM advisory work.
        </p>
        <div className="flex gap-4 text-[13px]">
          <a href="mailto:lucyscottbrown@gmail.com" className="text-[#185FA5] hover:underline">
            lucyscottbrown@gmail.com
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="https://www.linkedin.com/in/lucyscottbrown"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#185FA5] hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}
