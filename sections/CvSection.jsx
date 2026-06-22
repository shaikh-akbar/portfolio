"use client";

import { ArrowUpRight, Download } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

export function CvSection({ profile }) {
  return (
    <AnimatedSection id="cv" className="section-shell">
      <div className="glass-panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <SectionHeading
          eyebrow="CV"
          title="View or download my CV."
          description="This section makes it easy for HR, recruiters, and clients to quickly open or download my resume."
        />

        <div className="grid gap-4">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Resume Access</p>
            <p className="mt-3 text-lg leading-8 text-slate-200">
              Open the CV in a new tab for a quick review, or download it directly for sharing and shortlisting.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.cv.viewHref}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View CV
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.cv.downloadHref}
              download="Akbar-cv.pdf"
              className="secondary-button"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
