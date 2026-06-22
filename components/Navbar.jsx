"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar({ links, name }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.15, 0.4, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  const navClasses = scrolled
    ? "border-white/15 bg-slate-950/80 shadow-[0_20px_70px_rgba(8,15,40,0.35)] backdrop-blur-2xl"
    : "border-white/10 bg-slate-950/55 backdrop-blur-xl";

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex w-[min(1120px,100%)] items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${navClasses}`}
      >
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100"
        >
          {name}
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-cyan-400/15 text-cyan-200"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex rounded-full border border-white/10 p-2 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 flex w-[min(1120px,100%)] flex-col gap-2 rounded-[28px] border border-white/10 bg-slate-950/95 p-4 shadow-[0_24px_80px_rgba(3,10,30,0.45)] backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
