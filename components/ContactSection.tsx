'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Shield, Lock, CheckCircle2, Copy, MapPin, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialReport?: string;
}

export function ContactSection({ initialService, initialReport }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    engagementType: initialService || 'Zero-Trust Infrastructure Architecture Audit',
    nodeScope: '500–5,000 Ephemeral Nodes',
    targetDate: '',
    notes: initialReport ? `Attached AI Risk Report: ${initialReport}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [ticketId, setTicketId] = useState('CYB-ADV-48291');

  const pgpFingerprint = '4F8A 9C21 B73E 88A9 011F 33A9 B92E 41D0';

  const handleCopyKey = () => {
    navigator.clipboard.writeText(pgpFingerprint);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const newTicket = `CYB-ADV-${Math.floor(10000 + Math.random() * 89999)}`;
    setTicketId(newTicket);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0D1E20]/80 border-t border-[#2ED3C6]/20">
      {/* Radial lighting background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2ED3C6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Encrypted Channel */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12282A] border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0]">
                <Shield className="w-3.5 h-3.5 text-[#57FFF0]" />
                <span>EXECUTIVE CONSULTATION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                Initiate Sovereign <br />
                <span className="teal-gradient-text">Security Advisory.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#AFC4C7] leading-relaxed">
                Connect directly with Cybreon Principal Cryptographers and Incident Commanders. All inquiries are covered under mutual non-disclosure agreements (mNDA).
              </p>
            </div>

            {/* Encrypted PGP Box */}
            <div className="p-5 rounded-2xl bg-[#12282A] border border-[#2ED3C6]/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#57FFF0] uppercase tracking-wider font-bold flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#2ED3C6]" />
                  Encrypted PGP Communications
                </span>
                <button
                  onClick={handleCopyKey}
                  className="px-2.5 py-1 rounded-lg bg-[#071416] border border-[#2ED3C6]/30 text-[10px] font-mono text-[#57FFF0] hover:bg-[#1A5C5E] transition-colors flex items-center gap-1.5"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedKey ? 'COPIED' : 'COPY KEY'}</span>
                </button>
              </div>
              <p className="text-[11px] text-[#AFC4C7] font-mono break-all bg-[#071416]/80 p-2.5 rounded-xl border border-[#2ED3C6]/15">
                {pgpFingerprint}
              </p>
              <div className="text-[10px] text-[#6E8588] font-mono">
                Fingerprint for secure GPG/PGP sensitive incident reporting
              </div>
            </div>

            {/* Global Advisory Hubs */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider font-bold">
                Global Sovereign Enclave Offices
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-[#AFC4C7]">
                <div className="p-3 rounded-xl bg-[#12282A]/60 border border-[#2ED3C6]/15 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#2ED3C6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">San Francisco</strong>
                    <span className="text-[11px] text-[#6E8588] font-mono">350 Mission Street</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#12282A]/60 border border-[#2ED3C6]/15 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#57FFF0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Zurich</strong>
                    <span className="text-[11px] text-[#6E8588] font-mono">Bahnhofstrasse 45</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#12282A]/60 border border-[#2ED3C6]/15 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#4FA8FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Singapore</strong>
                    <span className="text-[11px] text-[#6E8588] font-mono">Marina Bay Financial</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#12282A]/60 border border-[#2ED3C6]/15 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F5B942] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">London</strong>
                    <span className="text-[11px] text-[#6E8588] font-mono">100 Bishopsgate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-[#2ED3C6]/40 bg-[#12282A] shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="border-b border-[#2ED3C6]/20 pb-4 mb-4">
                      <h3 className="text-xl font-bold text-white">
                        Executive Consultation Request
                      </h3>
                      <p className="text-xs text-[#AFC4C7] mt-1 font-mono">
                        Direct routing to Cybreon Principal Security Engineering Team
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-mono text-[#AFC4C7] mb-1 font-medium">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. Alexander Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#0D1E20] border border-[#2ED3C6]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-mono text-[#AFC4C7] mb-1 font-medium">
                          EXECUTIVE WORK EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alexander@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#0D1E20] border border-[#2ED3C6]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Organization Name */}
                      <div>
                        <label className="block text-xs font-mono text-[#AFC4C7] mb-1 font-medium">
                          ORGANIZATION / COMPANY *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Apex Financial Systems"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full bg-[#0D1E20] border border-[#2ED3C6]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                        />
                      </div>

                      {/* Infrastructure Scope */}
                      <div>
                        <label className="block text-xs font-mono text-[#AFC4C7] mb-1 font-medium">
                          INFRASTRUCTURE SCOPE
                        </label>
                        <select
                          value={formData.nodeScope}
                          onChange={(e) => setFormData({ ...formData, nodeScope: e.target.value })}
                          className="w-full bg-[#0D1E20] border border-[#2ED3C6]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                        >
                          <option value="< 500 Ephemeral Nodes">&lt; 500 Ephemeral Nodes</option>
                          <option value="500–5,000 Ephemeral Nodes">500–5,000 Ephemeral Nodes</option>
                          <option value="5,000–50,000+ Ephemeral Nodes">5,000–50,000+ Global Enclaves</option>
                        </select>
                      </div>
                    </div>

                    {/* Engagement Type */}
                    <div>
                      <label className="block text-xs font-mono text-[#AFC4C7] mb-1 font-medium">
                        ENGAGEMENT CAPABILITY FOCUS *
                      </label>
                      <select
                        value={formData.engagementType}
                        onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                        className="w-full bg-[#0D1E20] border border-[#2ED3C6]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                      >
                        <option value="Zero-Trust Infrastructure Architecture Audit">Zero-Trust Infrastructure Architecture Audit</option>
                        <option value="AI & Autonomous System Red Teaming">AI & Autonomous System Red Teaming</option>
                        <option value="Quantum-Safe Cryptography (PQC) Migration">Quantum-Safe Cryptography (PQC) Migration</option>
                        <option value="Sub-4-Minute Incident Response SLA">Sub-4-Minute Incident Response SLA</option>
                        <option value="Sovereign Cloud Enclaves & Compliance">Sovereign Cloud Enclaves & Compliance</option>
                      </select>
                    </div>

                    {/* Notes / Attached report */}
                    <div>
                      <label className="block text-xs font-mono text-[#AFC4C7] mb-1 font-medium">
                        ENGAGEMENT NOTES & THREAT CONCERNS
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide details on target architecture, timeframe, or compliance requirements..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-[#0D1E20] border border-[#2ED3C6]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#1A5C5E] via-[#2ED3C6] to-[#1A5C5E] bg-[length:200%_100%] hover:bg-[100%_0] border border-[#57FFF0]/40 shadow-xl shadow-[#2ED3C6]/20 transition-all flex items-center justify-center gap-2 group"
                    >
                      {submitting ? (
                        <span>Encrypting & Transmitting Payload...</span>
                      ) : (
                        <>
                          <span>Schedule Executive Advisory Session</span>
                          <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#1A5C5E]/50 border-2 border-[#57FFF0] flex items-center justify-center text-[#57FFF0] shadow-xl shadow-[#2ED3C6]/30 animate-pulse">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white font-sans">
                        Advisory Payload Transmitted
                      </h3>
                      <p className="text-xs sm:text-sm text-[#AFC4C7] max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-white">{formData.name}</strong>. Your request for <strong className="text-[#57FFF0]">{formData.engagementType}</strong> has been assigned to a Cybreon Principal Engineer.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0D1E20] border border-[#2ED3C6]/30 max-w-md mx-auto text-xs font-mono text-[#57FFF0]">
                      CONFIRMATION TICKET: {ticketId} • mNDA ACTIVE
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-mono font-semibold text-[#AFC4C7] hover:text-white bg-[#0D1E20] border border-[#2ED3C6]/20 transition-colors"
                    >
                      Submit Another Consultation Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
