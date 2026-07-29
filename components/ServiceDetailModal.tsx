'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Server, Lock, Terminal, Cpu, FileText } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  deliverables: string[];
  benefits: string[];
  architectureOverview: string;
  standards: string[];
}

interface ModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookAdvisory: (serviceName: string) => void;
}

export function ServiceDetailModal({ service, onClose, onBookAdvisory }: ModalProps) {
  if (!service) return null;

  const IconComp = service.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#071416]/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-[#2ED3C6]/40 p-6 sm:p-8 bg-[#0D1E20] shadow-2xl my-8 overflow-hidden"
        >
          {/* Top Gradient accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1A5C5E] via-[#2ED3C6] to-[#57FFF0]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-[#12282A] border border-[#2ED3C6]/30 text-[#AFC4C7] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start space-x-4 mb-8">
            <div className="p-3.5 rounded-2xl bg-[#1A5C5E]/40 border border-[#2ED3C6]/40 text-[#57FFF0]">
              <IconComp className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#57FFF0] uppercase tracking-widest font-semibold">
                {service.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-6 text-[#AFC4C7] text-sm leading-relaxed mb-8">
            <p className="text-base text-white">{service.fullDesc}</p>

            {/* Architecture Overview Box */}
            <div className="p-5 rounded-2xl bg-[#12282A] border border-[#2ED3C6]/20">
              <h4 className="text-xs font-mono text-[#57FFF0] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#2ED3C6]" />
                Technical Architecture Blueprint
              </h4>
              <p className="text-xs text-[#AFC4C7] leading-relaxed">
                {service.architectureOverview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Deliverables */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                  Key Deliverables
                </h3>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#AFC4C7]">
                      <CheckCircle2 className="w-4 h-4 text-[#2ED3C6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Benefits */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                  Enterprise Value & Metrics
                </h3>
                <ul className="space-y-2">
                  {service.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#AFC4C7]">
                      <ShieldCheck className="w-4 h-4 text-[#57FFF0] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compliance Standards */}
            <div className="pt-4 border-t border-[#2ED3C6]/15 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#6E8588] mr-2">AUDIT ALIGNMENT:</span>
              {service.standards.map((std, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#12282A] border border-[#2ED3C6]/30 text-[11px] font-mono text-[#57FFF0]"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2ED3C6]/20">
            <span className="text-xs text-[#6E8588] font-mono">
              Cybreon Principal Advisory • Confidential Scope
            </span>
            <button
              onClick={() => {
                onClose();
                onBookAdvisory(service.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#1A5C5E] to-[#2ED3C6] hover:from-[#2ED3C6] hover:to-[#57FFF0] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Schedule Advisory for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
