"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Search,
  Sparkles,
  Waypoints,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection({ profile }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const highlights = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Vibe Coder",
    "SEO Knowledge",
    "Google Search Console",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.rotatingRoles.length);
    }, 2400);

    return () => clearInterval(timer);
  }, [profile.rotatingRoles.length]);

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-8 pt-8 sm:pt-12">
      <div className="hero-noise" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="mx-auto grid w-[min(1080px,100%)] items-center gap-8 lg:grid-cols-[1.02fr_0.86fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-10"
        >
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>Software developer with product and ONDC experience</span>
          </div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {["Shaikh", "Akbar"].map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <h5 className="mt-4 max-w-2xl text-lg font-medium leading-8 text-slate-200 sm:text-xl">
            Software developer for frontend, backend, and ONDC commerce.
          </h5>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            <span className="font-medium text-slate-100">{profile.name}</span> is a{" "}
            {profile.role.toLowerCase()} with 2+ years of experience building ecommerce platforms,
            ONDC buyer flows, backend APIs, dashboards, and SEO-aware digital products.
          </p>

          <div className="mt-4 h-7 overflow-hidden text-xs uppercase tracking-[0.3em] text-cyan-200/85 sm:text-sm">
            <motion.div
              key={profile.rotatingRoles[roleIndex]}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              {profile.rotatingRoles[roleIndex]}
            </motion.div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">{profile.tagline}</p>

          <div className="mt-6 flex max-w-2xl flex-wrap gap-2.5">
            {highlights.map((item) => (
              <span key={item} className="stack-badge">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
            <a href="#about" className="secondary-button">
              <Download size={16} />
              Explore Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="hero-card space-y-3 p-5 sm:p-6">
            <div className="metric-card !mt-0 !p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Current Role</p>
              <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">Mobilogi Technology Pvt. Ltd.</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Working across frontend and backend delivery for modern business products and ecommerce-focused builds.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="metric-card !mt-0 !p-5">
                <div className="icon-pill">
                  <BriefcaseBusiness size={18} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-slate-400">Development</p>
                <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
                  Frontend, Backend, Full Stack
                </p>
              </div>

              <div className="metric-card !mt-0 !p-5">
                <div className="icon-pill">
                  <Waypoints size={18} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-slate-400">Commerce</p>
                <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
                  ONDC, BAP Flows, Buyer Journeys
                </p>
              </div>

              <div className="metric-card !mt-0 !p-5">
                <div className="icon-pill">
                  <Search size={18} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-slate-400">SEO</p>
                <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
                  Search Console, Technical SEO
                </p>
              </div>

              <div className="metric-card !mt-0 !p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Primary Stack</p>
                <p className="mt-3 text-lg font-semibold text-white sm:text-xl">React, Next.js, Node.js, ONDC</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
