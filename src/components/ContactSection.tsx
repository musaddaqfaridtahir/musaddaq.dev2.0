"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, Phone, Sparkles } from "lucide-react";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web Application",
    budget: "$1,000 - $3,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const whatsappUrl = "https://wa.me/923111122125?text=Hi%20Musaddaq,%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20new%20project!";

  return (
    <section id="contact" className="py-20 border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-500">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Start Your Project With Musaddaq
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Have a web application idea, e-commerce project, or need VPS architecture set up? Get in touch via WhatsApp or email for a quick consultation.
            </p>

            {/* Direct Contact Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp (+92 311 1122125)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+923111122125"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-mono font-semibold text-[var(--text-primary)] hover:border-sky-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-500" />
                  <span>+92 311 1122125</span>
                </a>

                <a
                  href="mailto:contact@musaddaq.dev"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-mono font-semibold text-[var(--text-primary)] hover:border-sky-500 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-500" />
                  <span>Email Direct</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500">
                <Sparkles className="w-4 h-4" />
                <span>Response Time: Usually under 2 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-lg">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in-up">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Musaddaq has received your inquiry and will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-sky-500"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                        Project Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                        <option value="E-Commerce Store & Installments">E-Commerce Store & Installments</option>
                        <option value="Fleet / Logistics SaaS">Fleet / Logistics SaaS</option>
                        <option value="VPS Architecture & Setup">VPS Architecture & Setup</option>
                        <option value="Desktop POS & Software">Desktop POS & Software</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-1.5">
                      Project Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly explain what you want to build or improve..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
