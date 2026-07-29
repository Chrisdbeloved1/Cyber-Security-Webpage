'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldX, ShieldCheck, AlertTriangle, ArrowRight, Lock, Key, Server, Cpu } from 'lucide-react';

export function ProblemLandscape() {
  const legacyVsCybreon = [
    {
      area: 'Perimeter vs. Zero-Trust',
      legacy: 'Static VPNs and broad network subnets assuming internal trust.',
      cybreon: 'Microsegmented identity mesh with dynamic WebAuthn token lifecycle.',
    },
    {
      area: 'Adversarial AI Risk',
      legacy: 'Blind trust in LLM pipelines, vulnerable to RAG injection and model weight theft.',
      cybreon: 'Air-gapped AI Red Teaming & runtime vector isolation proxies.',
    },
    {
      area: 'Cryptographic Resilience',
      legacy: 'RSA-2048 and ECC certificates vulnerable to Harvest-Now-Decrypt-Later quantum attacks.',
      cybreon: 'Post-Quantum Kyber & Dilithium lattice encryption operational today.',
    },
    {
      area: 'Threat Incident Response',
      legacy: 'Manual forensic triage taking 14+ hours while lateral movement spreads.',
      cybreon: 'Sub-4-minute automated zero-trust circuit breaking and containment.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#071416]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#1A5C5E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12282A] border border-[#2ED3C6]/20 text-xs font-mono text-[#57FFF0]">
            <AlertTriangle className="w-3.5 h-3.5 text-[#F5B942]" />
            <span>THE MODERN THREAT LANDSCAPE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Perimeter Security is Dead. <br />
            <span className="teal-gradient-text">Welcome to Continuous Resilience.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#AFC4C7] leading-relaxed">
            As enterprises migrate to autonomous cloud workloads and integration of AI agents, traditional firewalls create a false sense of security. Cybreon enforces zero-trust isolation from hardware to cloud.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Legacy Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-red-500/20 bg-gradient-to-b from-[#12282A]/80 to-[#071416]/90 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                    <ShieldX className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Legacy Security Architecture</h3>
                    <p className="text-xs text-[#6E8588] font-mono">Reactive • Static • Vulnerable</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-red-500/10 text-red-400 border border-red-500/30 uppercase">
                  HIGH RISK
                </span>
              </div>

              <div className="space-y-4">
                {legacyVsCybreon.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#071416]/60 border border-red-500/10">
                    <div className="text-xs font-mono text-red-400 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      {item.area}
                    </div>
                    <p className="text-xs text-[#AFC4C7] leading-relaxed">{item.legacy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-500/10 text-xs text-[#6E8588] font-mono">
              Result: $4.45M average breach cost & 204 days dwell time
            </div>
          </motion.div>

          {/* Cybreon Zero-Trust Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-[#2ED3C6]/40 bg-gradient-to-b from-[#12282A] to-[#0D1E20] relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-[#2ED3C6]/10"
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#57FFF0]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-[#2ED3C6]/20 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#1A5C5E]/50 text-[#57FFF0] border border-[#2ED3C6]/40">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Cybreon Sovereign Defense</h3>
                    <p className="text-xs text-[#57FFF0] font-mono">Proactive • Post-Quantum • Autonomous</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#2ED3C6]/20 text-[#57FFF0] border border-[#2ED3C6]/40 uppercase font-bold">
                  OPTIMAL
                </span>
              </div>

              <div className="space-y-4">
                {legacyVsCybreon.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#12282A]/90 border border-[#2ED3C6]/25 hover:border-[#57FFF0]/40 transition-colors">
                    <div className="text-xs font-mono text-[#57FFF0] mb-1 flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#57FFF0] animate-pulse" />
                      {item.area}
                    </div>
                    <p className="text-xs text-white leading-relaxed">{item.cybreon}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#2ED3C6]/20 text-xs text-[#57FFF0] font-mono flex items-center justify-between relative z-10">
              <span>Result: Continuous resilience & sub-4 min containment</span>
              <span className="text-white font-semibold">100% Audit Verified</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
