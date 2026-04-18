import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <div className="max-w-[720px] mx-auto px-10">
      <section className="py-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400 mb-4">
          Work
        </p>
        <h1 className="text-[32px] font-medium tracking-tight mb-3">
          Projects
        </h1>
        <p className="text-[15px] leading-[1.75] text-gray-500 max-w-[480px]">
          A selection of product work across crypto, industrial IoT, and early-stage ventures.
        </p>
      </section>

      <section className="border-t border-gray-200 pt-10 pb-16">
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

          {/* 2-col grid */}
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
    </div>
  );
}
