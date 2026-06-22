"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

function TechLogo({ type }) {
  switch (type) {
    case "react":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <circle cx="32" cy="32" r="4.5" fill="#61dafb" />
          <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" />
          <ellipse
            cx="32"
            cy="32"
            rx="22"
            ry="9"
            fill="none"
            stroke="#61dafb"
            strokeWidth="3"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="22"
            ry="9"
            fill="none"
            stroke="#61dafb"
            strokeWidth="3"
            transform="rotate(120 32 32)"
          />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <circle cx="32" cy="32" r="24" fill="#fff" />
          <path d="M24 42V22l18 20V22" fill="none" stroke="#020617" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M39 24c4 3 7 8 8 14" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <rect x="10" y="10" width="44" height="44" rx="8" fill="#f7df1e" />
          <text x="32" y="40" textAnchor="middle" fontSize="20" fontWeight="700" fill="#111827">
            JS
          </text>
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <polygon points="32,8 50,18 50,46 32,56 14,46 14,18" fill="#3c873a" />
          <text x="32" y="38" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
            Node
          </text>
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <path d="M18 40c2-13 10-21 22-23 4 0 7 1 10 3-5 0-8 3-10 7 3 0 6 2 8 5-4-1-8 0-11 3 3 1 5 4 6 8-4-4-8-5-13-4-4 2-8 2-12 1z" fill="#3b82f6" />
          <path d="M18 43c4 3 9 4 15 3" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <path d="M32 10c7 9 11 18 11 28 0 8-4 14-11 18-7-4-11-10-11-18 0-10 4-19 11-28z" fill="#22c55e" />
          <path d="M32 14v36" stroke="#d1fae5" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <path d="M20 44 34 18c2-3 7-2 7 2v24c0 2-1 3-3 4l-11 6c-4 2-8-2-7-6z" fill="#3ecf8e" />
          <path d="M26 46 40 20" stroke="#a7f3d0" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "postman":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <circle cx="32" cy="32" r="20" fill="#ff6c37" />
          <path d="M22 36h14l8-8" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="22" cy="36" r="3" fill="#fff" />
        </svg>
      );
    case "php":
      return (
        <svg viewBox="0 0 64 64" className="tech-logo-svg" aria-hidden="true">
          <ellipse cx="32" cy="32" rx="24" ry="16" fill="#7c83fd" />
          <text x="32" y="38" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">
            PHP
          </text>
        </svg>
      );
    default:
      return <span className="tech-logo-fallback">{type}</span>;
  }
}

export function SkillsSection({ skillLogos }) {
  return (
    <AnimatedSection id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Tools and technologies I use to build real products."
        description="A compact stack view with the frontend, backend, database, and workflow tools I use most often."
      />

      <div className="skill-strip-shell mt-12">
        <div className="skill-strip">
          {skillLogos.map((skill, index) => (
            <motion.article
              key={skill.name}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="tech-card"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="tech-logo-wrap">
                <TechLogo type={skill.key} />
              </div>
              <p className="mt-4 text-center text-sm font-semibold tracking-[0.08em] text-slate-100">
                {skill.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
