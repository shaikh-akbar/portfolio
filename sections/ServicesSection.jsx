import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

export function ServicesSection({ services }) {
  return (
    <AnimatedSection id="services" className="section-shell">
      <SectionHeading
        eyebrow="Services"
        title="Hands-on support across the product stack."
        description="From launch-ready interfaces to production-grade backend work, the offering stays practical, collaborative, and quality-driven."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article key={service.title} className="service-card">
              <div className="icon-pill">
                <Icon size={18} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
