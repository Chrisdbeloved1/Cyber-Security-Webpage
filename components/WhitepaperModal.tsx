'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Download, Share2, BookOpen, Lock, Terminal, CheckCircle2 } from 'lucide-react';

export interface ResearchPaper {
  id: string;
  paperNumber: string;
  title: string;
  authors: string[];
  date: string;
  abstract: string;
  category: string;
  keyFindings: string[];
  latexProof: string;
  fullContent: string[];
}

interface ModalProps {
  paper: ResearchPaper | null;
  onClose: () => void;
}

export function WhitepaperModal({ paper, onClose }: ModalProps) {
  if (!paper) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#071416]/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-[#2ED3C6]/40 p-6 sm:p-10 bg-[#0D1E20] shadow-2xl my-8 text-left"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#2ED3C6]/20 pb-6 mb-6">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-md bg-[#12282A] border border-[#2ED3C6]/40 text-xs font-mono text-[#57FFF0] font-semibold">
                {paper.paperNumber}
              </span>
              <span className="text-xs font-mono text-[#6E8588] uppercase tracking-wider">
                {paper.category} • Published {paper.date}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#12282A] border border-[#2ED3C6]/30 text-[#AFC4C7] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Paper Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4 font-sans">
            {paper.title}
          </h1>

          {/* Authors */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#AFC4C7] mb-8 pb-6 border-b border-[#2ED3C6]/15">
            <span>AUTHORS: <strong className="text-white">{paper.authors.join(', ')}</strong></span>
            <span>•</span>
            <span>CYBREON QUANTUM & AI LABS</span>
          </div>

          {/* Abstract Box */}
          <div className="p-6 rounded-2xl bg-[#12282A] border border-[#2ED3C6]/25 mb-8 space-y-3">
            <h3 className="text-xs font-mono text-[#57FFF0] uppercase tracking-wider font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#2ED3C6]" />
              Executive Abstract
            </h3>
            <p className="text-xs sm:text-sm text-white leading-relaxed font-sans">
              {paper.abstract}
            </p>
          </div>

          {/* Key Mathematical Formulation / Proof Diagram */}
          <div className="p-5 rounded-2xl bg-[#071416] border border-[#2ED3C6]/30 font-mono text-xs text-[#57FFF0] mb-8 overflow-x-auto">
            <div className="text-[10px] text-[#6E8588] uppercase tracking-wider mb-2">
              LATTICE CRYPTOGRAPHIC EQUATION PROOF
            </div>
            <code>{paper.latexProof}</code>
          </div>

          {/* Full Content Paragraphs */}
          <div className="space-y-6 text-xs sm:text-sm text-[#AFC4C7] leading-relaxed mb-8">
            {paper.fullContent.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="pt-4 border-t border-[#2ED3C6]/15 space-y-3">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                Key Research Takeaways for Enterprise CISOs
              </h4>
              <ul className="space-y-2">
                {paper.keyFindings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#2ED3C6] shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actions Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#2ED3C6]/20">
            <span className="text-xs font-mono text-[#6E8588]">
              DOI: 10.1038/cybreon.2026.0492 • Open Access Research
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => alert(`Downloading Whitepaper ${paper.paperNumber} (PDF format)...`)}
                className="px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#1A5C5E] hover:bg-[#2ED3C6] transition-colors flex items-center gap-2 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF (Full Paper)</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
