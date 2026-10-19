import { funProjects } from "@/lib/projects";

export default function JustForFun() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">
        Just for fun
      </span>
      {funProjects.map((project) => (
        <a
          key={project.href}
          href={project.href}
          className="group block rounded p-5 bg-[#FBF3F6] border border-dashed border-[#D9B8C6] hover:border-[#8E1F3D] transition-colors"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] font-medium leading-snug group-hover:text-[#8E1F3D] transition-colors">
              {project.title} 🍷
            </h3>
            <p className="text-[13px] leading-[1.6] text-gray-600">
              {project.description}
            </p>
            <span className="text-[13px] font-medium text-[#8E1F3D] mt-1">
              Take the quiz →
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
