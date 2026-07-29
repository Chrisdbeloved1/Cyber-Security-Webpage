'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Lock, Zap, ChevronRight, Activity, Terminal } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';

interface HeroProps {
  onOpenAdvisoryModal: () => void;
  onOpenRiskAssessor: () => void;
}

export function Hero({ onOpenAdvisoryModal, onOpenRiskAssessor }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern bg-radial-glow"
    >
      {/* Dynamic Background Glow Spots */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2ED3C6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1A5C5E]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Authority Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12282A]/90 border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0] mb-8 shadow-xl"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#57FFF0] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ED3C6]" />
          </span>
          <span className="font-semibold tracking-wide">ZERO-TRUST ARCHITECTURE & POST-QUANTUM HARDENING</span>
          <span className="text-[#6E8588] hidden sm:inline">|</span>
          <span className="text-[#AFC4C7] hidden sm:inline">ISO 27001 & SOC 2 TYPE II CERTIFIED</span>
        </motion.div>

        {/* Hero Grid layout: Left Text, Right Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-white leading-[1.06] font-sans"
            >
              Architecting <br className="hidden sm:block" />
              <span className="teal-gradient-text">Unshakable Cyber Resilience</span> <br />
              for Autonomous Enterprise.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-xl text-[#AFC4C7] font-normal leading-relaxed max-w-2xl"
            >
              Cybreon engineered sovereign Zero-Trust microsegmentation, adversarial AI red teaming, and post-quantum cryptographic shields for Fortune 500 financial institutions, autonomous networks, and defense operations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenAdvisoryModal}
                className="px-7 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#1A5C5E] via-[#2ED3C6] to-[#1A5C5E] bg-[length:200%_100%] hover:bg-[100%_0] border border-[#57FFF0]/40 shadow-xl shadow-[#2ED3C6]/20 hover:shadow-[#57FFF0]/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
              >
                <span>Schedule Executive Advisory</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenRiskAssessor}
                className="px-7 py-4 rounded-xl font-semibold text-sm text-[#57FFF0] bg-[#12282A]/80 hover:bg-[#12282A] border border-[#2ED3C6]/30 hover:border-[#2ED3C6] transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-sm group"
              >
                <Terminal className="w-4 h-4 text-[#2ED3C6] group-hover:rotate-12 transition-transform" />
                <span>Run AI Risk Engine</span>
              </button>
            </motion.div>

            {/* Trust Signal Badges under CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-[#2ED3C6]/15 flex flex-wrap items-center gap-6 text-xs text-[#6E8588] font-mono"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#2ED3C6]" />
                <span>99.999% Threat Isolation</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#57FFF0]" />
                <span>NIST Kyber Post-Quantum Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#4FA8FF]" />
                <span>&lt;4 Minute Containment SLA</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column (Canvas Node Topology) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <HeroCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
