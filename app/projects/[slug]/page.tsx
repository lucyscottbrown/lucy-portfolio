import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  return {
    title: `${project.title} - Lucy Scott Brown`,
    description: project.description,
  };
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
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">
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

type Project = NonNullable<ReturnType<typeof getProject>>;

function Stats({
  stats,
  stacked,
}: {
  stats: NonNullable<Project["stats"]>;
  stacked: boolean;
}) {
  const cols = stacked
    ? "grid-cols-1 auto-rows-fr flex-1"
    : `grid-cols-1 ${stats.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`;
  return (
    <dl
      className={`grid ${cols} gap-px bg-gray-200 border border-gray-200 rounded overflow-hidden`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-5 flex flex-col justify-center gap-1"
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="text-[32px] font-medium tracking-tight leading-none text-[#185FA5]">
            {stat.value}
          </dd>
          <dd className="text-[13px] leading-[1.5] text-gray-600 mt-2">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Photo({ photo }: { photo: NonNullable<Project["photo"]> }) {
  return (
    <figure>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="(max-width: 720px) 100vw, 640px"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-[13px] text-gray-500 mt-3">
        {photo.caption}
      </figcaption>
    </figure>
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
  const portrait = !!project.photo && project.photo.height > project.photo.width;

  return (
    <div className="max-w-[720px] mx-auto px-10 max-sm:px-5">
      {/* Header */}
      <section className="py-14 border-b border-gray-200">
        <Link
          href="/projects"
          className="text-[13px] text-gray-500 hover:text-[#185FA5] transition-colors mb-6 inline-block"
        >
          ← Projects
        </Link>
        <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-[#185FA5] mb-3">
          {project.tag}
        </span>
        <h1 className="text-[32px] font-medium tracking-tight leading-tight mb-3">
          {project.title}
        </h1>
        <p className="text-[13px] text-gray-500">{project.subtitle}</p>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="inline-block mt-6 text-[13px] font-medium text-[#185FA5] border border-[#185FA5] rounded px-4 py-2 hover:bg-[#185FA5] hover:text-white transition-colors"
          >
            Open the live tool →
          </a>
        )}
      </section>

      {/* At a glance: results first, for readers who skim. A portrait photo
          sits beside the stats so the row is filled; a landscape one runs
          full width below them. */}
      {project.stats && (
        <section
          className={`pt-10 ${
            portrait
              ? "grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-6 items-stretch"
              : ""
          }`}
        >
          <div className="flex flex-col">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500 mb-4">
              At a glance
            </h2>
            <Stats stats={project.stats} stacked={portrait} />
          </div>
          {portrait && project.photo && <Photo photo={project.photo} />}
        </section>
      )}

      {project.screenshot && project.liveUrl && (
        <section className="pt-10">
          <a
            href={project.liveUrl}
            className="group block border border-gray-200 rounded overflow-hidden hover:border-gray-400 transition-colors"
          >
            <Image
              src={project.screenshot.src}
              alt={`Screenshot of the ${project.title} live tool`}
              width={project.screenshot.width}
              height={project.screenshot.height}
              sizes="(max-width: 720px) 100vw, 640px"
              className="w-full h-auto"
            />
          </a>
          <a
            href={project.liveUrl}
            className="inline-block mt-3 text-[13px] text-[#185FA5] hover:underline"
          >
            Try the live tool →
          </a>
        </section>
      )}

      {project.photo && !(portrait && project.stats) && (
        <section className="pt-10">
          <Photo photo={project.photo} />
        </section>
      )}

      {/* Case study body */}
      <section className="py-12 flex flex-col gap-12">
        <ProseSection label="The problem" content={project.problem} />
        <ProseSection label="What I did" content={project.whatIDid} />
        <ProseSection label="The outcome" content={project.outcome} />
      </section>

      {/* Footer nav */}
      <section className="border-t border-gray-200 py-10">
        <Link
          href="/projects"
          className="text-[13px] text-[#185FA5] hover:underline"
        >
          ← All projects
        </Link>
      </section>
    </div>
  );
}
