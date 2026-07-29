'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Search, ArrowUpRight, ShieldAlert, Cpu, Lock, Terminal, Filter } from 'lucide-react';
import { WhitepaperModal, ResearchPaper } from './WhitepaperModal';

export function ResearchLabs() {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [cveSearch, setCveSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState('ALL');

  const papers: ResearchPaper[] = [
    {
      id: 'paper-049',
      paperNumber: 'PAPER #049',
      title: 'Quantum-Resistant Lattice Key Exchange in High-Throughput Kubernetes Microservices',
      authors: ['Dr. Elena Vance', 'Marcus Thorne'],
      date: 'Q2 2026',
      category: 'POST-QUANTUM CRYPTOGRAPHY',
      abstract: 'We present a zero-latency hybrid TLS 1.3 protocol integrating NIST ML-KEM (Kyber-768) into eBPF mesh proxies. Performance benchmarks demonstrate sub-0.8ms overhead during multi-cluster secret rotations.',
      latexProof: 'A_K = \\mathbf{A}s + e \\pmod q \\quad \\text{where } \\mathbf{A} \\in R_q^{k \\times k}, \\quad \\text{Security level: Kyber-768 (AES-192 Equivalent)}',
      fullContent: [
        'Post-Quantum Cryptography (PQC) transitions present non-trivial computational overhead for high-frequency microservice API meshes. In this work, Cybreon Research Labs implemented eBPF kernel-bypass acceleration for lattice polynomial multiplication.',
        'Our empirical benchmarks evaluated 10,000,000 simulated TLS handshakes per second across distributed Kubernetes clusters on AWS and GCP. The resulting Kyber-768 hybrid key exchange achieved 99.98% packet throughput parity relative to legacy ECDH-P256.',
      ],
      keyFindings: [
        'Zero-throughput degradation when pairing Kyber-768 with eBPF acceleration.',
        'Immunity to Harvest-Now-Decrypt-Later quantum adversary captures.',
        'Backwards compatible with legacy TLS 1.3 handshake fallback.',
      ],
    },
    {
      id: 'paper-042',
      paperNumber: 'PAPER #042',
      title: 'Adversarial Prompt Injection & Context Exfiltration Vectors in Autonomous LLM Agents',
      authors: ['Sarah Lin', 'Dr. Elena Vance'],
      date: 'Q1 2026',
      category: 'ADVERSARIAL AI',
      abstract: 'An empirical security evaluation of 15 commercial LLM agent execution frameworks. We identify indirect prompt injection vulnerabilities enabling cross-session vector store memory poisoning.',
      latexProof: '\\Delta_{\\text{poison}} = \\max_{\\theta} \\log P(Y_{exfil} \\mid X_{\\text{user}} + \\delta, \\theta) \\ge \\tau_{safety}',
      fullContent: [
        'Autonomous AI agents operating with tool-use capabilities introduce novel attack surfaces where unstructured text inputs control privileged API functions. Cybreon AI Labs constructed a suite of 140 synthetic prompt injection payloads.',
        'Our research demonstrated that indirect injection embedded inside PDF or HTML documents processed by RAG pipelines succeeded in altering agent tool-execution parameters in 64% of unshielded systems.',
      ],
      keyFindings: [
        'Dual-pass intent validation proxies reduce injection success rate to <0.01%.',
        'Strict privilege boundary enforcement prevents LLM tool-use escalation.',
        'Vector store embedding distance filters detect context poisoning attempts.',
      ],
    },
    {
      id: 'paper-038',
      paperNumber: 'PAPER #038',
      title: 'Zero-Knowledge Cryptographic Telemetry for Multi-Tenant Sovereign Cloud enclaves',
      authors: ['Marcus Thorne'],
      date: 'Q4 2025',
      category: 'SOVEREIGN ENCLAVES',
      abstract: 'Designing zk-SNARK attestation proofs for CPU confidential enclaves, proving real-time security compliance without revealing raw customer operational logs to cloud providers.',
      latexProof: '\\pi_{\\text{zk}} = \\text{Groth16.Prove}(pk, x_{audit}, w_{private}) \\implies \\text{Verify}(vk, x_{audit}, \\pi) = 1',
      fullContent: [
        'Cloud customers in highly regulated finance and sovereign defense sectors require continuous auditability without exposing confidential data to cloud hosting providers.',
        'We propose a Zero-Knowledge Telemetry architecture using Groth16 zk-SNARKs that compiles kernel execution logs into succinct 288-byte proof statements verified on-chain or by auditors.',
      ],
      keyFindings: [
        'Complete confidentiality of cloud workloads during regulatory audits.',
        'Hardware-attested enclave verification with zero log leak exposure.',
        'Satisfies EU NIS2 Article 21 and US FedRAMP High audit requirements.',
      ],
    },
  ];

  const cveAdvisories = [
    {
      cve: 'CYB-2026-0419',
      title: 'OAuth Refresh Token Persistence Hijacking in Cloud Identity Providers',
      severity: 'CRITICAL',
      score: '9.8',
      vector: 'Identity Mesh',
      date: 'July 2026',
    },
    {
      cve: 'CYB-2026-0382',
      title: 'Kubernetes Ephemeral Container Kernel Privilege Escalation via eBPF',
      severity: 'HIGH',
      score: '8.4',
      vector: 'Container Isolation',
      date: 'June 2026',
    },
    {
      cve: 'CYB-2026-0299',
      title: 'Vector Store Cosine Distance Poisoning in Autonomous RAG Pipelines',
      severity: 'HIGH',
      score: '8.1',
      vector: 'Adversarial AI',
      date: 'May 2026',
    },
    {
      cve: 'CYB-2026-0150',
      title: 'TLS 1.2 RSA Cipher Suite Harvesting Vector in Legacy Gateway Proxies',
      severity: 'MEDIUM',
      score: '6.5',
      vector: 'Quantum Cryptography',
      date: 'April 2026',
    },
  ];

  const filteredAdvisories = cveAdvisories.filter((adv) => {
    const matchesSearch =
      adv.title.toLowerCase().includes(cveSearch.toLowerCase()) ||
      adv.cve.toLowerCase().includes(cveSearch.toLowerCase());
    const matchesSeverity =
      severityFilter === 'ALL' || adv.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-[#071416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12282A] border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0]">
              <BookOpen className="w-3.5 h-3.5 text-[#57FFF0]" />
              <span>CYBREON RESEARCH LABS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Frontier Cybersecurity <br />
              <span className="teal-gradient-text">& Cryptographic Research.</span>
            </h2>
          </div>
          <p className="text-sm text-[#AFC4C7] max-w-md leading-relaxed text-left">
            Our research division publishes peer-reviewed whitepapers and zero-day advisories pushing the boundaries of post-quantum cryptography, AI red teaming, and sovereign enclaves.
          </p>
        </div>

        {/* Featured Research Whitepapers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {papers.map((paper) => (
            <motion.div
              key={paper.id}
              whileHover={{ y: -4 }}
              className="glass-card glass-card-hover rounded-3xl p-7 border border-[#2ED3C6]/25 bg-[#0D1E20] flex flex-col justify-between cursor-pointer group"
              onClick={() => setSelectedPaper(paper)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#12282A] border border-[#2ED3C6]/30 text-[10px] font-mono text-[#57FFF0] font-bold">
                    {paper.paperNumber}
                  </span>
                  <span className="text-[10px] font-mono text-[#6E8588]">
                    {paper.date}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-[#2ED3C6] font-semibold uppercase tracking-wider block mb-2">
                  {paper.category}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-[#57FFF0] transition-colors mb-3 leading-snug">
                  {paper.title}
                </h3>

                <p className="text-xs text-[#AFC4C7] leading-relaxed mb-6 line-clamp-3">
                  {paper.abstract}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2ED3C6]/15 flex items-center justify-between text-xs font-mono text-[#57FFF0]">
                <span>Read Full Whitepaper</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CVE Vulnerability & Threat Advisory Tracker Feed */}
        <div className="glass-card rounded-3xl p-8 border border-[#2ED3C6]/30 bg-[#0D1E20]/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2ED3C6]/20 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#F5B942]" />
                <h3 className="text-xl font-bold text-white">
                  Live Threat Intelligence & CVE Feed
                </h3>
              </div>
              <p className="text-xs text-[#AFC4C7] mt-1 font-mono">
                Continuous vulnerability disclosures curated by Cybreon Threat Intelligence
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-[#6E8588] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search CVE or vector..."
                  value={cveSearch}
                  onChange={(e) => setCveSearch(e.target.value)}
                  className="bg-[#12282A] border border-[#2ED3C6]/25 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                />
              </div>

              <div className="flex items-center space-x-1 bg-[#12282A] p-1 rounded-xl border border-[#2ED3C6]/20 text-xs font-mono">
                {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'].map((sev) => (
                  <button
                    key={sev}
                    onClick={() => setSeverityFilter(sev)}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      severityFilter === sev
                        ? 'bg-[#1A5C5E] text-[#57FFF0] font-bold'
                        : 'text-[#6E8588] hover:text-white'
                    }`}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* List of advisories */}
          <div className="space-y-3">
            {filteredAdvisories.map((adv, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#12282A]/80 border border-[#2ED3C6]/15 hover:border-[#2ED3C6]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start space-x-3">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold shrink-0 mt-0.5 ${
                      adv.severity === 'CRITICAL'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : adv.severity === 'HIGH'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-[#1A5C5E]/50 text-[#57FFF0] border border-[#2ED3C6]/30'
                    }`}
                  >
                    {adv.cve}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {adv.title}
                    </h4>
                    <span className="text-xs text-[#6E8588] font-mono">
                      Vector: {adv.vector} • Discovered {adv.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#2ED3C6]/10">
                  <span className="text-xs font-mono text-[#AFC4C7]">
                    CVSS Score: <strong className="text-white">{adv.score}</strong>
                  </span>
                  <button
                    onClick={() => alert(`Showing mitigation patch advisory for ${adv.cve}`)}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-[#57FFF0] bg-[#1A5C5E]/40 hover:bg-[#1A5C5E] border border-[#2ED3C6]/30 transition-colors"
                  >
                    Mitigation Guidance
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Whitepaper Reader Modal */}
      <WhitepaperModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />
    </section>
  );
}
