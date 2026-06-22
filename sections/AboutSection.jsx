import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection({ profile, stats, highlights }) {
  return (
    <AnimatedSection id="about" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel p-8 sm:p-10">
          <SectionHeading
            eyebrow="About"
            title="Software developer focused on practical products and clean execution."
            description={profile.intro}
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel relative overflow-hidden p-8">
            <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative flex flex-col gap-6">
              <div className="profile-orb">
                <span className="text-center !text-lg leading-tight sm:!text-xl">
                  {profile.name}
                </span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Currently</p>
                <p className="mt-3 text-lg leading-8 text-slate-200">{profile.availability}</p>
              </div>
            </div>
          </div>

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="glass-panel flex gap-4 p-6">
                <div className="icon-pill">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
