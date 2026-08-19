"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2, Server, Award } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      period: "2023 — Present",
      role: "Solo Professional Developer & Systems Architect",
      company: "musaddaq.dev",
      description: "End-to-end full stack web application development. Specialized in building complex Next.js applications, custom APIs, database schema design, and deploying on Ubuntu VPS infrastructure with Nginx and SSL.",
      highlights: [
        "Architected scalable logistics and dispatch systems for clients.",
        "Built custom e-commerce platforms with Prisma ORM and PostgreSQL.",
        "Configured Nginx reverse proxies, PM2 process management, and Certbot SSL.",
      ],
    },
    {
      period: "2022 — 2023",
      role: "Full Stack Web Engineer",
      company: "Independent Client Projects",
      description: "Delivered responsive web applications, real estate platforms, and interactive developer portals with modern UI frameworks.",
      highlights: [
        "Engineered reusable component libraries in React and Tailwind CSS.",
        "Optimized frontend Web Vitals (LCP, CLS) for high Lighthouse scores.",
        "Integrated third-party RESTful APIs and payment gateways.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-500">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Proven track record of managing full software lifecycles from architecture to production server deployment.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-[var(--border-color)]">
          {experiences.map((exp, idx) => (
            <div key={exp.role} className="relative pl-8 sm:pl-10 group">
              <div className="absolute left-1 sm:left-2 top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-sky-500 group-hover:bg-sky-500 transition-colors" />

              <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-sky-500/40 transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {exp.role} <span className="text-sky-500">@ {exp.company}</span>
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-sky-500 bg-sky-500/10 px-2.5 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 pt-2">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
