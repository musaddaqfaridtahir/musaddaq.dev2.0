"use client";

import React from "react";
import { ArrowUp, Code2, Mail, Phone } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/30 text-xs text-[var(--text-muted)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-500 border border-sky-500/20 flex items-center justify-center font-bold">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">
            musaddaq<span className="text-sky-500">.dev</span>
          </span>
          <span className="hidden sm:inline text-[var(--border-color)]">|</span>
          <span>© {new Date().getFullYear()} Musaddaq Farid Tahir. All rights reserved.</span>
        </div>

        {/* Links & Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/musaddaqfaridtahir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-sky-500 transition-colors flex items-center gap-1 font-mono"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="hidden md:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/musaddaqfaridtahir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-sky-500 transition-colors flex items-center gap-1 font-mono"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="hidden md:inline">LinkedIn</span>
          </a>

          <a
            href="tel:+923111122125"
            aria-label="Phone"
            className="hover:text-sky-500 transition-colors flex items-center gap-1 font-mono"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">+92 311 1122125</span>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-sky-500 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
