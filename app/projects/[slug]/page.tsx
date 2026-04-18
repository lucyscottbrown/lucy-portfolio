import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} — Lucy Scott Brown` };
}

function ProseSection({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-400">
        {label}
      </span>
      <div className="flex flex-col gap-4">
        {content.split("\n\n").map((para, i) => (
          <p key={i} className="text-[15px] leading-[1.75] text-gray-700">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="max-w-[720px] mx-auto px-10">
      {/* Header */}
      <section className="py-14 border-b border-gray-200">
        <Link
          href="/projects"
          className="text-[12px] text-gray-400 hover:text-[#185FA5] transition-colors mb-6 inline-block"
        >
          ← Projects
        </Link>
        <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5] mb-3">
          {project.tag}
        </span>
        <h1 className="text-[32px] font-medium tracking-tight leading-tight mb-3">
          {project.title}
        </h1>
        <p className="text-[13px] text-gray-400">{project.subtitle}</p>
      </section>

      {/* Case study body */}
      <section className="py-12 flex flex-col gap-12">
        <ProseSection label="The problem" content={project.problem} />
        <ProseSection label="What I did" content={project.whatIDid} />
        <ProseSection label="The outcome" content={project.outcome} />
      </section>

      {/* Footer nav */}
      <section className="border-t border-gray-200 py-10 flex items-center justify-between">
        <Link
          href="/projects"
          className="text-[13px] text-[#185FA5] hover:underline"
        >
          ← All projects
        </Link>
        <a
          href="mailto:lucyscottbrown@gmail.com"
          className="text-[13px] text-[#185FA5] hover:underline"
        >
          Get in touch →
        </a>
      </section>
    </div>
  );
}
