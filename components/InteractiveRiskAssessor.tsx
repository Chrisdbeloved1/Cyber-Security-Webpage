'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ShieldAlert, Cpu, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Zap, Lock, FileText } from 'lucide-react';

interface RiskAssessorProps {
  onBookAdvisoryWithReport: (reportSummary: string) => void;
}

export function InteractiveRiskAssessor({ onBookAdvisoryWithReport }: RiskAssessorProps) {
  const [industry, setIndustry] = useState('FinTech & Sovereign Banking');
  const [cloud, setCloud] = useState('AWS Multi-Account & Kubernetes Mesh');
  const [zeroTrustLevel, setZeroTrustLevel] = useState('Level 2 - Basic Identity SSO/MFA');
  const [threatFocus, setThreatFocus] = useState('Adversarial AI Model Weight Theft & RAG Exfiltration');
  const [customQuery, setCustomQuery] = useState('');

  const [loading, setLoading] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRunAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/app/api/gemini/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organizationType: industry,
          cloudProvider: cloud,
          zeroTrustMaturity: zeroTrustLevel,
          threatScope: threatFocus,
          question: customQuery,
        }),
      });

      const data = await res.json();
      if (data.success && data.assessment) {
        setAssessmentResult(data.assessment);
      } else {
        setErrorMsg(data.error || 'Failed to complete threat analysis');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Network error while requesting AI threat analysis');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="risk-assessor" className="py-24 relative overflow-hidden bg-[#071416]">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2ED3C6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12282A] border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0]">
            <Terminal className="w-3.5 h-3.5 text-[#57FFF0]" />
            <span>CYBREON AI THREAT INTELLIGENCE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Interactive Enterprise Risk <br />
            <span className="teal-gradient-text">& Resilience Assessor.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#AFC4C7]">
            Select your organization’s infrastructure parameters to simulate an executive threat breakdown powered by Cybreon AI Research Intelligence.
          </p>
        </div>

        {/* Two-Column Grid: Left Controls, Right Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-[#2ED3C6]/30 bg-[#0D1E20]/90 shadow-2xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-[#2ED3C6]/20 pb-4">
              <Cpu className="w-5 h-5 text-[#2ED3C6]" />
              Specify Infrastructure Profile
            </h3>

            <form onSubmit={handleRunAssessment} className="space-y-4">
              {/* Industry Select */}
              <div>
                <label className="block text-xs font-mono text-[#AFC4C7] mb-1.5 font-medium">
                  INDUSTRY / SECTOR
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-[#12282A] border border-[#2ED3C6]/25 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                >
                  <option value="FinTech & Sovereign Banking">FinTech & Sovereign Banking</option>
                  <option value="Autonomous Vehicles & Aerospace">Autonomous Vehicles & Aerospace</option>
                  <option value="Defense & National Security">Defense & National Security</option>
                  <option value="Cloud SaaS & Enterprise AI">Cloud SaaS & Enterprise AI</option>
                  <option value="BioTech & Healthcare Infrastructure">BioTech & Healthcare Infrastructure</option>
                </select>
              </div>

              {/* Cloud Architecture Select */}
              <div>
                <label className="block text-xs font-mono text-[#AFC4C7] mb-1.5 font-medium">
                  CLOUD & WORKLOAD MESH
                </label>
                <select
                  value={cloud}
                  onChange={(e) => setCloud(e.target.value)}
                  className="w-full bg-[#12282A] border border-[#2ED3C6]/25 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                >
                  <option value="AWS Multi-Account & Kubernetes Mesh">AWS Multi-Account & Kubernetes Mesh</option>
                  <option value="GCP Sovereign Cloud Enclave">GCP Sovereign Cloud Enclave</option>
                  <option value="Azure Enterprise Hybrid Hybrid AD">Azure Enterprise Hybrid AD</option>
                  <option value="Multi-Cloud Sovereign Kubernetes">Multi-Cloud Sovereign Kubernetes</option>
                </select>
              </div>

              {/* Zero Trust Maturity */}
              <div>
                <label className="block text-xs font-mono text-[#AFC4C7] mb-1.5 font-medium">
                  CURRENT ZERO-TRUST MATURITY
                </label>
                <select
                  value={zeroTrustLevel}
                  onChange={(e) => setZeroTrustLevel(e.target.value)}
                  className="w-full bg-[#12282A] border border-[#2ED3C6]/25 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                >
                  <option value="Level 1 - Perimeter VPN & Static Password">Level 1 - Perimeter VPN & Static Password</option>
                  <option value="Level 2 - Basic Identity SSO/MFA">Level 2 - Basic Identity SSO/MFA</option>
                  <option value="Level 3 - Ephemeral Token Microsegmentation">Level 3 - Ephemeral Token Microsegmentation</option>
                  <option value="Level 4 - Hardware-Backed Post-Quantum">Level 4 - Hardware-Backed Post-Quantum</option>
                </select>
              </div>

              {/* Threat Focus */}
              <div>
                <label className="block text-xs font-mono text-[#AFC4C7] mb-1.5 font-medium">
                  PRIMARY THREAT EXPOSURE FOCUS
                </label>
                <select
                  value={threatFocus}
                  onChange={(e) => setThreatFocus(e.target.value)}
                  className="w-full bg-[#12282A] border border-[#2ED3C6]/25 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                >
                  <option value="Adversarial AI Model Weight Theft & RAG Exfiltration">Adversarial AI Model Theft & RAG Exfiltration</option>
                  <option value="OAuth Identity Token Persistence & Session Hijack">OAuth Token Persistence & Session Hijack</option>
                  <option value="Post-Quantum Harvesting of TLS Key Exchanges">Post-Quantum Harvesting of TLS Keys</option>
                  <option value="Container Enclave Escape & Lateral Movement">Container Enclave Escape & Lateral Movement</option>
                </select>
              </div>

              {/* Custom Query / Notes */}
              <div>
                <label className="block text-xs font-mono text-[#AFC4C7] mb-1.5 font-medium">
                  ADDITIONAL SPECIFIC CONCERNS (OPTIONAL)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Preparing for ISO 27001 audit next quarter..."
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  className="w-full bg-[#12282A] border border-[#2ED3C6]/25 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#57FFF0]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#1A5C5E] via-[#2ED3C6] to-[#1A5C5E] hover:from-[#2ED3C6] hover:to-[#57FFF0] border border-[#57FFF0]/30 shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#57FFF0]" />
                    <span>Analyzing Security Vectors...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-[#57FFF0]" />
                    <span>Generate AI Security Assessment</span>
                  </>
                )}
              </button>
            </form>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                {errorMsg}
              </div>
            )}
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7">
            {assessmentResult ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-[#2ED3C6]/40 bg-[#0D1E20] space-y-6 shadow-2xl"
              >
                {/* Header with Risk Score Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2ED3C6]/20 pb-6">
                  <div>
                    <span className="text-[10px] font-mono text-[#57FFF0] uppercase tracking-widest font-semibold">
                      THREAT LANDSCAPE REPORT
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      Executive Posture Summary
                    </h3>
                  </div>

                  <div className="flex items-center space-x-4 bg-[#12282A] px-4 py-2 rounded-2xl border border-[#2ED3C6]/30">
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-[#6E8588]">ESTIMATED RISK</div>
                      <div className="text-xs font-bold text-[#F5B942]">
                        {assessmentResult.threatLevel}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#1A5C5E]/60 border border-[#57FFF0]/40 flex items-center justify-center text-xl font-extrabold text-white font-mono shadow-inner">
                      {assessmentResult.riskScore}
                    </div>
                  </div>
                </div>

                {/* Summary text */}
                <p className="text-xs sm:text-sm text-[#AFC4C7] leading-relaxed bg-[#12282A]/60 p-4 rounded-xl border border-[#2ED3C6]/15">
                  {assessmentResult.summary}
                </p>

                {/* Vulnerabilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-white uppercase tracking-wider font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#F5B942]" />
                    Primary Identified Vulnerability Vectors
                  </h4>
                  <div className="space-y-2">
                    {assessmentResult.keyVulnerabilities?.map((vuln: string, i: number) => (
                      <div key={i} className="p-3 rounded-xl bg-[#12282A] border border-red-500/20 text-xs text-[#AFC4C7] flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-1" />
                        <span>{vuln}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mitigation Roadmap Steps */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-white uppercase tracking-wider font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2ED3C6]" />
                    Recommended Cybreon Mitigation Phases
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {assessmentResult.methodologySteps?.map((st: any, i: number) => (
                      <div key={i} className="p-3 rounded-xl bg-[#12282A] border border-[#2ED3C6]/20 space-y-1">
                        <span className="text-[10px] font-mono text-[#57FFF0] uppercase font-bold">
                          {st.phase}: {st.title}
                        </span>
                        <p className="text-[11px] text-[#AFC4C7] leading-snug">{st.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantum Readiness & Compliance Gaps */}
                <div className="pt-4 border-t border-[#2ED3C6]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#AFC4C7]">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#57FFF0]" />
                    <span>Post-Quantum Status: <strong className="text-white">{assessmentResult.quantumReadiness}</strong></span>
                  </div>

                  <button
                    onClick={() => onBookAdvisoryWithReport(`Risk Score: ${assessmentResult.riskScore} (${assessmentResult.threatLevel}). Summary: ${assessmentResult.summary}`)}
                    className="px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#1A5C5E] hover:bg-[#2ED3C6] transition-colors flex items-center gap-2 shadow-md"
                  >
                    <span>Attach Report & Book Advisory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="glass-card p-12 rounded-3xl border border-[#2ED3C6]/20 bg-[#0D1E20]/60 text-center flex flex-col items-center justify-center space-y-4 min-h-[440px]">
                <div className="p-4 rounded-2xl bg-[#12282A] border border-[#2ED3C6]/30 text-[#2ED3C6]">
                  <Terminal className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Ready for AI Threat Analysis
                </h3>
                <p className="text-xs sm:text-sm text-[#AFC4C7] max-w-md leading-relaxed">
                  Select your organization parameters on the left and click &quot;Generate AI Security Assessment&quot; to receive a real-time risk breakdown.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
