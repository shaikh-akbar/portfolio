"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { portfolioData } from "@/data/portfolioData";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { CvSection } from "@/sections/CvSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { SkillsSection } from "@/sections/SkillsSection";

export default function Home() {
  const {
    profile,
    navLinks,
    stats,
    skillLogos,
    projects,
    timeline,
    services,
    highlights,
  } = portfolioData;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="page-backdrop" />
      <Navbar links={navLinks} name={profile.name} />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} stats={stats} highlights={highlights} />
      <SkillsSection skillLogos={skillLogos} />
      <ProjectsSection projects={projects} />
      <ExperienceSection timeline={timeline} />
      <ServicesSection services={services} />
      <CvSection profile={profile} />
      <ContactSection profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}
