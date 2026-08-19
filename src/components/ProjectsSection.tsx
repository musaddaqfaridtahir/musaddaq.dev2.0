"use client";

import React from "react";
import { ExternalLink, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      id: "swiftway-logistics",
      title: "SwiftWay Logistics — Fleet Dispatch & Operations Portal",
      category: "Fleet SaaS & Logistics Platform",
      description: "Dedicated truck dispatch and fleet order management platform enabling freight companies to assign drivers, monitor load statuses, and auto-generate rate confirmation PDFs.",
      tags: ["Next.js 15", "Node.js", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://truck-dispatch-testing.vercel.app/",
      badge: "Live Product",
      impact: "3x Faster Dispatching",
    },
    {
      id: "babu-electronics",
      title: "Babu Electronics — Retail E-Commerce & Installment Engine",
      category: "Full-Stack Retail E-Commerce",
      description: "Retail e-commerce platform built for an electronics merchant featuring a real-time installment breakdown calculator for monthly payment plans and instant checkout payloads.",
      tags: ["Next.js 15", "SQLite", "Prisma ORM", "Tailwind CSS"],
      demoUrl: "https://babu-electronics-three.vercel.app/",
      badge: "High Conversion",
      impact: "+65% Installment Sales",
    },
    {
      id: "payment-links-gateway",
      title: "Payment Links & Merchant Invoicing Gateway",
      category: "FinTech Merchant Platform",
      description: "Real-time merchant billing gateway enabling small businesses and freelancers to generate shareable payment links, automated PDF invoices, and monitor client receipts.",
      tags: ["Next.js 15", "Node.js API", "Tailwind CSS", "PDF Engine"],
      demoUrl: "https://payment-links-two.vercel.app/",
      badge: "FinTech Gateway",
      impact: "Instant Payment Settlement",
    },
    {
      id: "offline-pos-desktop",
      title: "Offline Desktop POS & Customer Ledger Software",
      category: "Desktop Software (Electron.js)",
      description: "Desktop POS software engineered with Electron.js & embedded SQLite to operate 100% offline for local merchants, handling credit ledgers, thermal printing, and billing.",
      tags: ["Electron.js", "React.js", "SQLite", "Thermal Printing"],
      demoUrl: "#contact",
      badge: "100% Offline Ready",
      impact: "+40% Debt Recovery Rate",
    },
  ];

  return (
    <section id="projects" className="py-20 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-500">
              <Zap className="w-3.5 h-3.5" />
              <span>Production Work & Live Deployments</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Featured Web Apps & Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              High-performance web applications built for business scale, tested live in production environments.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-7 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-sky-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 border border-sky-500/20 font-semibold">
                    {project.badge}
                  </span>
                  <a
                    href={project.demoUrl}
                    target={project.demoUrl.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] group-hover:text-sky-500 group-hover:border-sky-500/40 transition-all flex items-center gap-1.5 text-xs font-mono font-semibold"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-sky-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-sky-500">
                  {project.category}
                </p>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Impact Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-medium font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Result: {project.impact}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-color)] flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)]"
                  >
                    {tag}
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
