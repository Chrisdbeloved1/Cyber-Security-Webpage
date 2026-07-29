'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShieldAlert, Cpu, Lock, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface MethodologyStep {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  duration: string;
  summary: string;
  icon: any;
  actions: string[];
  deliverable: string;
}

export function MethodologyTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: MethodologyStep[] = [
    {
      id: 1,
      phase: 'STAGE 01',
      title: 'Discover',
      subtitle: 'Global Mesh Asset & Key Inventory',
      duration: '7–14 Days',
      summary: 'Comprehensive non-invasive mapping of 100% of cloud resources, API tokens, ephemeral container endpoints, and legacy RSA certificates across all environments.',
      icon: Search,
      actions: [
        'Automated eBPF Kernel Network & Workload Topology Enumeration',
        'Identity & Access Token Lifecycle Audit (AWS IAM, GCP, Okta, Azure AD)',
        'Shadow Microservice & Unmanaged Public Endpoint Discovery',
        'Cryptographic Asset & Legacy Encryption Standard Scan',
      ],
      deliverable: 'Complete Attack Surface Map & Threat Vector Audit Report',
    },
    {
      id: 2,
      phase: 'STAGE 02',
      title: 'Assess',
      subtitle: 'Adversarial Breach & AI Red Teaming',
      duration: '14–21 Days',
      summary: 'Controlled adversarial attack scenarios mimicking sovereign state APT tactics, LLM prompt injection, and lateral privilege escalation to validate perimeter weaknesses.',
      icon: ShieldAlert,
      actions: [
        'Adversarial AI Model Poisoning & Context Window Exfiltration Stress Tests',
        'API Token Persistence & OAuth Hijacking Exploitation Scenarios',
        'Multi-Tenant Container Breakout & Kernel Privilege Escalation',
        'Simulated Ransomware & Ephemeral Data Destruction Response Tests',
      ],
      deliverable: 'Adversarial Proof-of-Exploit Blueprint & Risk Severity Matrix',
    },
    {
      id: 3,
      phase: 'STAGE 03',
      title: 'Remediate',
      subtitle: 'Zero-Trust Enclave & Crypto Isolation',
      duration: '21–30 Days',
      summary: 'Execution of custom zero-trust microsegmentation, Hardware FIDO2/WebAuthn identity integration, and Post-Quantum hybrid TLS encryption across target workloads.',
      icon: Cpu,
      actions: [
        'SPIFFE/SPIRE Ephemeral Workload Identity Mesh Deployment',
        'Kernel-Level eBPF Microsegmentation & Dynamic Circuit Breaking',
        'NIST ML-KEM Kyber Lattice Key Exchange Integration',
        'Zero-Knowledge Access Policy Enforcement Across Multi-Cloud APIs',
      ],
      deliverable: 'Sovereign Zero-Trust Architecture Deployment & Verification',
    },
    {
      id: 4,
      phase: 'STAGE 04',
      title: 'Strengthen',
      subtitle: 'Continuous Telemetry & Autonomous Resilience',
      duration: 'Continuous',
      summary: 'Integration of real-time SOC telemetry, sub-4-minute containment SLA automation, and continuous threat monitoring via Cybreon Sovereign Intelligence.',
      icon: Lock,
      actions: [
        'Automated 24/7 Lateral Containment Circuit-Breaker Triggering',
        'Continuous Post-Quantum Cryptographic Key Agility Management',
        'Board-Level Security Compliance Telemetry & Real-Time Risk Score',
        'Quarterly AI Red-Team Re-Certification & Policy Refinement',
      ],
      deliverable: 'Continuous Sovereign Security Certification & SLA Guarantee',
    },
  ];

  const currentStepData = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section id="methodology" className="py-24 relative overflow-hidden bg-[#0D1E20]/70 border-y border-[#2ED3C6]/15">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2ED3C6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12282A] border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0]">
            <span>CYBREON ENGAGEMENT METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            A Rigorous 4-Stage Journey to <br />
            <span className="teal-gradient-text">Absolute Cyber Sovereignty.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#AFC4C7]">
            From initial asset discovery to continuous post-quantum hardening, our engagement lifecycle guarantees verifiable zero-trust resilience.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="relative mb-12">
          {/* Connecting Track Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#12282A] -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[#1A5C5E] via-[#2ED3C6] to-[#57FFF0]"
              initial={{ width: '25%' }}
              animate={{ width: `${(activeStep / 4) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep > step.id;
              const IconComp = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                    isActive
                      ? 'bg-[#12282A] border-[#57FFF0] shadow-xl shadow-[#2ED3C6]/20'
                      : isPast
                      ? 'bg-[#0D1E20] border-[#2ED3C6]/40 text-[#AFC4C7]'
                      : 'bg-[#071416]/70 border-[#2ED3C6]/15 text-[#6E8588] hover:border-[#2ED3C6]/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-mono uppercase tracking-widest font-bold ${isActive ? 'text-[#57FFF0]' : 'text-[#6E8588]'}`}>
                      {step.phase}
                    </span>
                    <div className={`p-2 rounded-xl border transition-colors ${
                      isActive
                        ? 'bg-[#1A5C5E] border-[#57FFF0] text-white'
                        : 'bg-[#12282A] border-[#2ED3C6]/20 text-[#2ED3C6]'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-lg font-bold mb-1 ${isActive ? 'text-white' : 'text-[#AFC4C7] group-hover:text-white'}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#6E8588] font-mono">{step.duration}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepData.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-8 border border-[#2ED3C6]/30 bg-[#12282A]/90"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Description */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#1A5C5E]/50 border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0]">
                    {currentStepData.phase} • {currentStepData.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">
                  {currentStepData.title}: <span className="text-[#57FFF0]">{currentStepData.subtitle}</span>
                </h3>
                <p className="text-sm text-[#AFC4C7] leading-relaxed">
                  {currentStepData.summary}
                </p>

                <div className="p-4 rounded-xl bg-[#071416]/80 border border-[#2ED3C6]/20">
                  <span className="text-[10px] font-mono text-[#57FFF0] uppercase tracking-wider block mb-1">
                    PRIMARY DELIVERABLE
                  </span>
                  <p className="text-xs font-semibold text-white">
                    {currentStepData.deliverable}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Actions */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                  Technical Execution Actions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStepData.actions.map((act, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#0D1E20] border border-[#2ED3C6]/20 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2ED3C6] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#AFC4C7] leading-normal">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
