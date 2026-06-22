import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceSection({ timeline }) {
  return (
    <AnimatedSection id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Journey"
        title="A path shaped by shipping, refining, and scaling."
        description="Each role strengthened a different layer of the craft, from visual polish and system thinking to product execution and performance discipline."
      />

      <div className="mt-12 space-y-6">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.role} className="timeline-card">
              <div className="timeline-rail">
                <div className="icon-pill">
                  <Icon size={18} />
                </div>
                {index !== timeline.length - 1 ? <span className="timeline-line" /> : null}
              </div>

              <div className="glass-panel flex-1 p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-white">{item.role}</p>
                    <p className="mt-2 text-slate-300">{item.company}</p>
                  </div>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
                <div className="mt-5 space-y-3">
                  {item.achievements.map((achievement) => (
                    <p key={achievement} className="text-sm leading-7 text-slate-300">
                      {achievement}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
