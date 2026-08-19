"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, CheckCircle2, Server, Cpu, Sparkles } from "lucide-react";

export function HeroSection() {
  const fullHeadline = "Engineered for Speed, Built for Scale.";
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing effect on page load (CodeWithHarry style)
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullHeadline.length) {
        setTypedText(fullHeadline.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 60); // 60ms per character for natural typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Solo Developer Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Musaddaq Farid Tahir — Solo Professional Developer</span>
            </div>

            {/* Main Headline with Typing Effect */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-[1.15] tracking-tight min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]">
              <span>{typedText}</span>
              <span
                className={`inline-block w-1.5 h-[0.85em] bg-sky-500 ml-1 translate-y-1 ${
                  isTypingComplete ? "animate-blink" : ""
                }`}
              />
            </h1>

            {/* Sub-headline & CTAs (Smooth Fade-In from Bottom) */}
            <div className="space-y-8 animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              <p className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal">
                Transforming complex business problems into high-performance web
                applications using modern tech stacks. From initial architecture to
                VPS deployment, I handle the entire technical lifecycle.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-sky-500/50 hover:text-sky-500 font-medium text-sm sm:text-base transition-all"
                >
                  <span>Explore Portfolio</span>
                </a>
              </div>

              {/* GeeksforGeeks / Professional Developer Trust Badges */}
              <div className="pt-4 border-t border-[var(--border-color)] grid grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Full-Stack Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span>VPS & Nginx Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Clean Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Window (CodeWithHarry Terminal Aesthetic) */}
          <div className="lg:col-span-5 animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>musaddaq-developer-profile.ts</span>
                </div>
                <span className="text-[10px] text-slate-500">v2.0</span>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 space-y-3 leading-relaxed text-slate-300 overflow-x-auto">
                <div>
                  <span className="text-purple-400">interface</span>{" "}
                  <span className="text-amber-300">Developer</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-400">&apos;Musaddaq Farid Tahir&apos;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">domain:</span>{" "}
                  <span className="text-emerald-400">&apos;musaddaq.dev&apos;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-emerald-400">&apos;Solo Full-Stack Engineer&apos;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-sky-300">&apos;Next.js 15&apos;</span>,{" "}
                  <span className="text-sky-300">&apos;TypeScript&apos;</span>,{" "}
                  <span className="text-sky-300">&apos;Tailwind&apos;</span>,{" "}
                  <span className="text-sky-300">&apos;VPS&apos;</span>];
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{" "}
                  <span className="text-emerald-400">&apos;Ready to deploy&apos;</span>;
                </div>
                <div>&#125;</div>
                <div className="pt-2 text-slate-500 border-t border-slate-800">
                  <span className="text-emerald-400">$</span> agy build --target=production
                  <br />
                  <span className="text-sky-400">✔</span> System compiled with 0 errors.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
