"use client";

import React from "react";
import { Code2, Server, Database, Cloud, Terminal, ShieldCheck } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Code2 className="w-5 h-5 text-sky-500" />,
      skills: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "HTML5 & Semantic Markup", "Framer Motion"],
      description: "Building ultra-responsive, SEO-optimized, and lightning-fast user interfaces.",
    },
    {
      title: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      skills: ["Node.js & Express", "RESTful APIs", "Authentication & Security", "Prisma ORM", "Microservices Architecture"],
      description: "Designing scalable server architectures, secure endpoints, and business logic.",
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma Schema Design", "Query Optimization"],
      description: "Data modeling, relational mapping, and high-performance database indexing.",
    },
    {
      title: "DevOps & VPS Deployment",
      icon: <Cloud className="w-5 h-5 text-amber-500" />,
      skills: ["Ubuntu VPS Setup", "Nginx Reverse Proxy", "PM2 Process Manager", "SSL / Certbot", "Git & CI/CD"],
      description: "End-to-end hosting management from server provisioning to SSL encryption.",
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (GeeksforGeeks Style) */}
        <div className="max-w-2xl text-left mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-500">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Skills & Modern Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Curated tools and technologies I use daily to architect scalable web applications from scratch.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-sky-500/40 transition-all shadow-sm hover:shadow-md space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {cat.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-color)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
