import { ArrowUpRight, GitBranch } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

export function ProjectsSection({ projects }) {
  return (
    <AnimatedSection id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds with a premium product lens."
        description="Each project is framed around performance, polish, and practical outcomes. Replace these placeholders with your live work from one central file."
      />

      <div className="project-row mt-12">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className={`project-visual bg-gradient-to-br ${project.accent}`}>
              <div className="project-screen">
                <div className="project-grid" />
                <div className="project-surface" />
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="stack-badge">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.href}
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="primary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
