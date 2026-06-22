"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection({ profile }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Send a direct inquiry and I will receive it at akbar000785@gmail.com."
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setMessage("Sending your message...");

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while sending the message.");
      }

      setStatus("success");
      setMessage("Message sent successfully. I will receive it in my inbox.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to send message right now. Please try again later.");
    }
  };

  return (
    <AnimatedSection id="contact" className="section-shell">
      <div className="contact-grid">
        <div className="glass-panel contact-panel">
          <SectionHeading
            className="contact-heading"
            eyebrow="Contact"
            title="Let's build something sharp, fast, and useful."
            description="I am available for freelance development, company roles, ecommerce work, dashboards, portals, and custom web products."
          />

          <div className="mt-8 space-y-4">
            <div className="contact-line">
              <Mail size={18} />
              <span>{profile.email}</span>
            </div>
            <div className="contact-line">
              <Phone size={18} />
              <span>{profile.phone}</span>
            </div>
            <div className="contact-line">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-chip"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel contact-panel contact-form"
        >
          <div className="contact-fields">
            <label className="field-shell">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label className="field-shell">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label className="field-shell">
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project"
                required
              />
            </label>
          </div>

          <div className="contact-actions">
            <button
              type="submit"
              disabled={status === "loading"}
              className="primary-button contact-submit disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            <p
              className={`contact-status ${
                status === "error"
                  ? "text-rose-300"
                  : status === "success"
                    ? "text-emerald-300"
                    : "text-slate-400"
              }`}
            >
              {message}
            </p>
          </div>
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
