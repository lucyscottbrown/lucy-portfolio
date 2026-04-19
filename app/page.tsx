import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  const [featured, ...rest] = projects;

  return (
    <div className="max-w-[720px] mx-auto px-10">
      {/* Hero */}
      <section className="py-16 grid grid-cols-[1fr_auto] gap-10 items-start">
        <div className="flex flex-col gap-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
            Product &amp; GTM Strategy
          </p>
          <h1 className="text-[44px] leading-[1.1] font-semibold tracking-tight">
            For companies where the product works but the business hasn't{" "}
            <em className="text-[#185FA5]">clicked</em> yet.
          </h1>
          <p className="text-[15px] leading-[1.75] text-gray-500 max-w-[480px]">
            Eight years building products across crypto payments, blockchain
            analytics, and B2B SaaS. I work across product, GTM, and
            positioning — and I'll tell you when your hypothesis is wrong.
          </p>
          <div className="flex gap-3 mt-1">
            <Link
              href="/projects"
              className="text-[13px] font-medium bg-[#185FA5] text-white px-4 py-2.5 rounded hover:bg-[#1450891] transition-colors"
              style={{ backgroundColor: "#185FA5" }}
            >
              View projects
            </Link>
            <a
              href="mailto:lucyscottbrown@gmail.com"
              className="text-[13px] font-medium border border-[#0a0a0a] text-[#0a0a0a] px-4 py-2.5 rounded hover:bg-gray-50 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
        {/* Headshot placeholder */}
        <div
          className="w-[140px] h-[165px] rounded-[8px] bg-gray-100 flex-shrink-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-[11px] text-gray-400 uppercase tracking-widest">
            Photo
          </span>
        </div>
      </section>

      {/* Chip strip */}
      <section className="border-t border-gray-200 border-b py-5 flex flex-wrap gap-2">
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

      {/* Featured work */}
      <section className="py-12">
        <div className="flex items-baseline justify-between mb-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
            Featured work
          </span>
          <Link
            href="/projects"
            className="text-[12px] text-[#185FA5] hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {/* Featured card — full width */}
          <Link
            href={`/projects/${featured.slug}`}
            className="group block border border-gray-200 rounded p-6 hover:border-gray-400 transition-colors"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-col gap-3 flex-1">
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5]">
                  {featured.tag}
                </span>
                <h2 className="text-[18px] font-medium leading-snug group-hover:text-[#185FA5] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[13px] text-gray-400">{featured.subtitle}</p>
                <p className="text-[14px] leading-[1.6] text-gray-600 max-w-[420px]">
                  {featured.description}
                </p>
              </div>
              <span
                className="text-[52px] font-medium leading-none select-none flex-shrink-0"
                style={{ color: "#e5e5e5" }}
              >
                01
              </span>
            </div>
          </Link>

          {/* 2-column grid for remaining cards */}
          <div className="grid grid-cols-2 gap-4">
            {rest.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block border border-gray-200 rounded p-5 hover:border-gray-400 transition-colors"
              >
                <div className="flex flex-col gap-2.5">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5]">
                    {project.tag}
                  </span>
                  <h2 className="text-[15px] font-medium leading-snug group-hover:text-[#185FA5] transition-colors">
                    {project.title}
                  </h2>
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

      {/* Contact CTA */}
      <section className="border-t border-gray-200 py-12">
        <p className="text-[15px] text-gray-500 mb-3">
          Available for product and GTM advisory work.
        </p>
        <div className="flex gap-4 text-[13px]">
          <a
            href="mailto:lucyscottbrown@gmail.com"
            className="text-[#185FA5] hover:underline"
          >
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
