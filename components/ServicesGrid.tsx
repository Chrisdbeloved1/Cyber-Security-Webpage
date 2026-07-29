'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Cpu,
  Lock,
  Zap,
  Server,
  Radio,
  ArrowRight,
  Layers,
  Terminal,
} from 'lucide-react';
import { ServiceDetailModal, ServiceItem } from './ServiceDetailModal';

interface ServicesGridProps {
  onBookAdvisory: (serviceName: string) => void;
}

export function ServicesGrid({ onBookAdvisory }: ServicesGridProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'zero-trust',
      title: 'Zero-Trust Infrastructure Architecture',
      category: 'ENTERPRISE MESH',
      shortDesc: 'Eliminate implicit network trust through microsegmentation, ephemeral identity tokens, and hardware-backed WebAuthn credentials.',
      fullDesc: 'Cybreon designs end-to-end zero-trust network topologies that enforce continuous identity verification for every packet, API call, and microservice container across multi-cloud environments.',
      icon: ShieldCheck,
      deliverables: [
        'NIST SP 800-207 Zero-Trust Topology Blueprint',
        'Ephemeral SPIFFE/SPIRE Microservice Identity Mesh',
        'Hardware Key & FIDO2/WebAuthn Mandate Implementation',
        'Granular eBPF Kernel-Level Network Segmentation',
      ],
      benefits: [
        '99.9% Reduction in Lateral Threat Movement',
        'Elimination of Persistent Static API Keys',
        'Instant Compliance Mapping to FedRAMP & ISO 27001',
      ],
      architectureOverview: 'Deploys eBPF kernel observers paired with SPIFFE workload identity issuers to eliminate IP-based trust assumptions across Kubernetes clusters, cloud enclaves, and on-premises datacenters.',
      standards: ['NIST SP 800-207', 'ISO 27001:2022', 'FedRAMP High'],
    },
    {
      id: 'ai-red-teaming',
      title: 'AI & Autonomous System Red Teaming',
      category: 'AI THREAT LABS',
      shortDesc: 'Stress-test LLM agent pipelines, RAG vector stores, and autonomous decision models against prompt injection, poison attacks, and exfiltration.',
      fullDesc: 'As autonomous AI agents execute critical business actions, Cybreon conducts rigorous adversarial red-teaming to uncover model manipulation, indirect prompt injection, vector database poison attacks, and proprietary model weight theft.',
      icon: Cpu,
      deliverables: [
        'Adversarial LLM & Agent Safety Benchmark Report',
        'RAG Vector Store & Context Poisoning Diagnostics',
        'Prompt Injection Boundary Guardrail Middleware',
        'Agentic Privilege Escalation & Sandbox Testing',
      ],
      benefits: [
        'Protection Against Autonomous Agent Hijacking',
        'Prevention of Corporate Data Leakage via RAG Pipelines',
        'Safe Deployment of Enterprise AI Workflows',
      ],
      architectureOverview: 'Implements dual-pass input/output intent verification proxies, vector distance anomaly filters, and sandboxed isolated tool-call runtime environments.',
      standards: ['OWASP Top 10 for LLMs', 'NIST AI RMF 1.0', 'EU AI Act Compliance'],
    },
    {
      id: 'quantum-crypto',
      title: 'Quantum-Safe Cryptography (PQC) Migration',
      category: 'POST-QUANTUM',
      shortDesc: 'Prepare enterprise infrastructure for Q-Day by auditing crypto-assets and transitioning to NIST ML-KEM and ML-DSA lattice encryption.',
      fullDesc: 'Adversaries are currently capturing encrypted corporate data via Harvest-Now-Decrypt-Later strategies. Cybreon identifies legacy RSA/ECC dependencies and implements NIST-standardized Post-Quantum Cryptography across key exchanges and digital signatures.',
      icon: Lock,
      deliverables: [
        'Cryptographic Asset Inventory & Quantum Vulnerability Assessment',
        'Hybrid TLS 1.3 Kyber (ML-KEM) Key Exchange Deployment',
        'Post-Quantum Dilithium (ML-DSA) Code-Signing Pipeline',
        'Hardware Security Module (HSM) PQC Firmware Upgrade',
      ],
      benefits: [
        'Immunity to Harvest-Now-Decrypt-Later Threat Actors',
        'Full Compliance with NSA CNSA 2.0 Timelines',
        'Seamless Cryptographic Agility Across Services',
      ],
      architectureOverview: 'Deploys dual-handshake hybrid encryption combining classical ECDH with Kyber-768 lattice algorithms, ensuring backwards compatibility while guaranteeing post-quantum confidentiality.',
      standards: ['NIST FIPS 203/204', 'NSA CNSA 2.0', 'RFC 9180 HPKE'],
    },
    {
      id: 'incident-response',
      title: 'Sub-4-Minute Threat Incident Response',
      category: 'THREAT CONTAINMENT',
      shortDesc: 'Sub-4-minute automated containment SLA, memory forensics, threat actor attribution, and rapid zero-trust quarantine.',
      fullDesc: 'When threat actors breach perimeter defenses, every second matters. Cybreon deploys automated threat isolation circuits and Principal Incident Commanders to neutralize threats, isolate compromises, and reconstruct full attack timelines.',
      icon: Zap,
      deliverables: [
        'Sub-4-Minute Threat Circuit-Breaking SLA',
        'Deep Ephemeral Memory & Kernel Forensics Analysis',
        'State-Sponsored Threat Actor Attribution Report',
        'Post-Incidence Infrastructure Hardening Roadmap',
      ],
      benefits: [
        'Near-Zero Business Interruption During Incidents',
        'Legal & Regulatory Disclosure Defense Evidence',
        'Complete Eradication of Threat Persistence Mechanisms',
      ],
      architectureOverview: 'Leverages continuous memory telemetry and automated API circuit-breakers to instantly quarantine infected container nodes without taking core applications offline.',
      standards: ['NIST SP 800-61 Rev 2', 'FIRST CSIRT Guidelines', 'ISO 27035'],
    },
    {
      id: 'sovereign-cloud',
      title: 'Sovereign Cloud Enclaves & Governance',
      category: 'SOVEREIGN COMPLIANCE',
      shortDesc: 'Architect secure multi-tenant enclaves, confidential computing enclaves, and sovereign data residency boundaries.',
      fullDesc: 'Cybreon empowers global enterprises to satisfy strict national data sovereignty laws, European NIS2 directives, and high-consequence compliance frameworks through hardware-level AMD SEV-SNP / Intel SGX confidential enclaves.',
      icon: Server,
      deliverables: [
        'Confidential Computing & Memory Enclave Architecture',
        'Cross-Border Sovereignty & Key Custody Protocol',
        'EU NIS2 & GDPR Article 32 Technical Compliance Verification',
        'Zero-Knowledge Access Audit Telemetry System',
      ],
      benefits: [
        'Guaranteed Key Custody & Cloud Provider Isolation',
        'Elimination of Foreign Subpoena Risk on Enclave Data',
        'Unlocks High-Regulated Government Contracts',
      ],
      architectureOverview: 'Utilizes hardware-rooted attestation and CPU enclaves to ensure that even cloud hosting providers cannot inspect application memory or raw customer keys.',
      standards: ['NIS2 Directive', 'FedRAMP High', 'GDPR Art. 32', 'BSI C5'],
    },
    {
      id: 'attack-simulation',
      title: 'Continuous Breach & Attack Surface Emulation',
      category: 'ADVERSARIAL LABS',
      shortDesc: 'Continuous automated red-teaming simulating advanced nation-state threat vectors, zero-day exploits, and API vulnerabilities.',
      fullDesc: 'Instead of relying on annual point-in-time penetration tests, Cybreon provides continuous, AI-driven threat simulation that constantly probes your external attack surface, public cloud APIs, and identity providers for security gaps.',
      icon: Radio,
      deliverables: [
        'Continuous External Attack Surface Management (EASM)',
        'Automated Adversarial Breach Simulation Scenarios',
        'API Token Persistence & OAuth Hijacking Scans',
        'Executive & Board-Level Risk Dashboard Telemetry',
      ],
      benefits: [
        'Real-Time Discovery of Shadow IT & Exposed Assets',
        'Validated Defense Posture Against Active CVEs',
        'Continuous Defense Validation for Board Audit',
      ],
      architectureOverview: 'Combines dynamic cloud asset discovery engines with proprietary adversarial simulation modules to mimic real APT tactic techniques and procedures (MITRE ATT&CK).',
      standards: ['MITRE ATT&CK Framework', 'CREST STAR', 'OWASP Top 10'],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#071416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12282A] border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0]">
              <Layers className="w-3.5 h-3.5 text-[#2ED3C6]" />
              <span>CYBREON CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Precision Security Engineering <br />
              <span className="teal-gradient-text">Built for Sovereign Scale.</span>
            </h2>
          </div>
          <p className="text-sm text-[#AFC4C7] max-w-md leading-relaxed">
            Our consulting methodology replaces passive security advisory with hands-on cryptographic implementation, threat modeling, and zero-trust engineering.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-7 border border-[#2ED3C6]/20 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#1A5C5E]/40 border border-[#2ED3C6]/30 text-[#57FFF0] group-hover:border-[#57FFF0] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-[#57FFF0] px-2.5 py-1 rounded-full bg-[#12282A] border border-[#2ED3C6]/30 font-semibold tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#57FFF0] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#AFC4C7] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#2ED3C6]/15 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#6E8588] group-hover:text-[#57FFF0] transition-colors">
                    Explore Architecture
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#12282A] border border-[#2ED3C6]/20 flex items-center justify-center text-[#2ED3C6] group-hover:bg-[#1A5C5E] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookAdvisory={onBookAdvisory}
      />
    </section>
  );
}
