'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Lock, FileCheck, Building2, Globe2, Cpu, ArrowUpRight } from 'lucide-react';

export function TrustSignals() {
  const certs = [
    { name: 'ISO/IEC 27001:2022', desc: 'Global Information Security Management Standard', icon: ShieldCheck },
    { name: 'SOC 2 Type II Certified', desc: 'Verified Security, Availability & Confidentiality Controls', icon: FileCheck },
    { name: 'FedRAMP High Ready', desc: 'U.S. Federal Risk and Authorization Management Program', icon: Lock },
    { name: 'NIST SP 800-207', desc: 'Verified Zero Trust Architecture Compliance Framework', icon: Award },
    { name: 'CREST STAR Certified', desc: 'Simulated Threat-Driven Adversarial Readiness', icon: Cpu },
    { name: 'EU NIS2 Directive', desc: 'European Cyber Resilience & Essential Entity Standards', icon: Globe2 },
  ];

  const caseStudies = [
    {
      client: 'Tier-1 Sovereign Investment Bank',
      title: 'Zero-Downtime Post-Quantum TLS Migration across 14,000 Microservice Nodes',
      metric: '100% Kyber PQC Hybrid Migration',
      impact: 'Protected $1.8T in daily transaction clearings against harvest-now-decrypt-later quantum threat vectors.',
      tech: 'NIST ML-KEM • eBPF Mesh • SPIFFE/SPIRE',
    },
    {
      client: 'Global Autonomous Fleet Operator',
      title: 'Adversarial AI Model Weight Shielding & Autonomous Vector Store Protection',
      metric: '<0.01% Adversarial Injection Rate',
      impact: 'Neutralized cross-context prompt injections across 45,000 edge autonomous vehicle vision pipelines.',
      tech: 'AI Red Teaming • Intent Proxy • Vector Distance Filter',
    },
    {
      client: 'European Sovereign Cloud Consortium',
      title: 'Confidential Enclave Deployment for Cross-Border Patient Data Integrity',
      metric: 'Zero-Knowledge Audit Compliance',
      impact: 'Satisfied GDPR Article 32 & NIS2 directives without granting host cloud provider access to raw keys.',
      tech: 'Intel SGX Enclaves • zk-SNARK Telemetry • Hardware HSM',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#071416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12282A] border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0]">
            <Award className="w-3.5 h-3.5 text-[#57FFF0]" />
            <span>ENTERPRISE TRUST & SOVEREIGN STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Validated by Global Audits & <br />
            <span className="teal-gradient-text">Mission-Critical Deployments.</span>
          </h2>
        </div>

        {/* Certifications Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {certs.map((cert, index) => {
            const IconComp = cert.icon;
            return (
              <div
                key={index}
                className="glass-card p-4 rounded-2xl border border-[#2ED3C6]/15 hover:border-[#2ED3C6]/40 transition-colors text-center space-y-2 group"
              >
                <div className="w-9 h-9 mx-auto rounded-xl bg-[#12282A] border border-[#2ED3C6]/30 flex items-center justify-center text-[#57FFF0] group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-white font-sans leading-tight">
                  {cert.name}
                </div>
                <div className="text-[10px] text-[#6E8588] leading-tight font-mono">
                  {cert.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white text-left flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#2ED3C6]" />
            Featured Enterprise Case Studies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-7 border border-[#2ED3C6]/25 bg-[#0D1E20] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-[#57FFF0] uppercase tracking-wider font-bold block">
                    {cs.client}
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {cs.title}
                  </h4>
                  <div className="p-3 rounded-xl bg-[#12282A] border border-[#2ED3C6]/20">
                    <span className="text-xs font-bold text-[#57FFF0] font-mono block">
                      {cs.metric}
                    </span>
                    <p className="text-xs text-[#AFC4C7] mt-1 leading-relaxed">
                      {cs.impact}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2ED3C6]/15 flex items-center justify-between text-[11px] font-mono text-[#6E8588]">
                  <span>{cs.tech}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#2ED3C6]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
