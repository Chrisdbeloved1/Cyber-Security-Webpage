'use client';

import React, { useState } from 'react';
import { Shield, ArrowRight, Lock, CheckCircle2, Terminal } from 'lucide-react';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
    setNewsletterEmail('');
  };

  return (
    <footer className="relative bg-[#071416] border-t border-[#2ED3C6]/20 pt-16 pb-12 overflow-hidden">
      {/* Top Subtle Animated Gradient Divider */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#2ED3C6]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2ED3C6]/15">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4 text-left">
            <a href="#overview" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A5C5E] to-[#0D1E20] border border-[#2ED3C6]/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#57FFF0]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                CYBREON <span className="text-xs font-mono text-[#57FFF0]">CONSULTING</span>
              </span>
            </a>

            <p className="text-xs text-[#AFC4C7] leading-relaxed">
              Cybreon is a world-class cybersecurity consulting practice delivering sovereign zero-trust engineering, post-quantum cryptography, and adversarial AI defense to enterprise & defense organizations.
            </p>

            {/* Live System Telemetry Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0D1E20] border border-[#2ED3C6]/30 text-[11px] font-mono text-[#57FFF0]">
              <span className="w-2 h-2 rounded-full bg-[#57FFF0] animate-ping" />
              <span>TELEMETRY: ALL SHIELDED (99.999%)</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
              Capabilities & Architecture
            </h4>
            <ul className="space-y-2 text-xs text-[#AFC4C7]">
              <li><a href="#services" className="hover:text-[#57FFF0] transition-colors">Zero-Trust Network Mesh</a></li>
              <li><a href="#services" className="hover:text-[#57FFF0] transition-colors">AI & Autonomous System Red Teaming</a></li>
              <li><a href="#services" className="hover:text-[#57FFF0] transition-colors">Post-Quantum Cryptography Migration</a></li>
              <li><a href="#services" className="hover:text-[#57FFF0] transition-colors">Sub-4-Minute Incident Response SLA</a></li>
              <li><a href="#services" className="hover:text-[#57FFF0] transition-colors">Confidential Sovereign Enclaves</a></li>
            </ul>
          </div>

          {/* Research & Tools Links */}
          <div className="md:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
              Research & Engine
            </h4>
            <ul className="space-y-2 text-xs text-[#AFC4C7]">
              <li><a href="#risk-assessor" className="hover:text-[#57FFF0] transition-colors">AI Threat Risk Assessor</a></li>
              <li><a href="#research" className="hover:text-[#57FFF0] transition-colors">Kyber PQC Whitepaper</a></li>
              <li><a href="#research" className="hover:text-[#57FFF0] transition-colors">Adversarial LLM Report</a></li>
              <li><a href="#research" className="hover:text-[#57FFF0] transition-colors">CVE Vulnerability Tracker</a></li>
              <li><a href="#leadership" className="hover:text-[#57FFF0] transition-colors">Leadership & Patents</a></li>
            </ul>
          </div>

          {/* Newsletter Briefing Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
              Threat Intelligence Dispatch
            </h4>
            <p className="text-xs text-[#AFC4C7]">
              Subscribe for monthly sovereign threat intelligence briefings and post-quantum vulnerability alerts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="executive@enterprise.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#0D1E20] border border-[#2ED3C6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#1A5C5E] text-[#57FFF0] hover:bg-[#2ED3C6] hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[10px] font-mono text-[#57FFF0] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Subscribed to Cybreon Threat Intel</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6E8588] gap-4">
          <div>
            © {new Date().getFullYear()} Cybreon Consulting Inc. All Rights Reserved. Sovereign Security Protocol.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#AFC4C7] cursor-pointer">Security Disclosure Policy</span>
            <span>•</span>
            <span className="hover:text-[#AFC4C7] cursor-pointer">PGP Key ID: 4F8A-9C21</span>
            <span>•</span>
            <span className="hover:text-[#AFC4C7] cursor-pointer">ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
