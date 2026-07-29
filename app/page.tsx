'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { MetricsBanner } from '@/components/MetricsBanner';
import { ProblemLandscape } from '@/components/ProblemLandscape';
import { ServicesGrid } from '@/components/ServicesGrid';
import { MethodologyTimeline } from '@/components/MethodologyTimeline';
import { InteractiveRiskAssessor } from '@/components/InteractiveRiskAssessor';
import { ResearchLabs } from '@/components/ResearchLabs';
import { LeadershipSection } from '@/components/LeadershipSection';
import { TrustSignals } from '@/components/TrustSignals';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Page() {
  const [selectedServiceForAdvisory, setSelectedServiceForAdvisory] = useState<string>('');
  const [selectedReportForAdvisory, setSelectedReportForAdvisory] = useState<string>('');

  const scrollToContact = (serviceName?: string, reportSummary?: string) => {
    if (serviceName) setSelectedServiceForAdvisory(serviceName);
    if (reportSummary) setSelectedReportForAdvisory(reportSummary);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRiskAssessor = () => {
    const riskEl = document.getElementById('risk-assessor');
    if (riskEl) {
      riskEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#071416] text-white selection:bg-[#1A5C5E] selection:text-[#57FFF0]">
      {/* Floating Glass Navigation */}
      <Navigation onOpenAdvisoryModal={() => scrollToContact()} />

      {/* Hero Section */}
      <Hero
        onOpenAdvisoryModal={() => scrollToContact()}
        onOpenRiskAssessor={scrollToRiskAssessor}
      />

      {/* Live Threat Metrics Banner */}
      <MetricsBanner />

      {/* Modern Threat Landscape vs. Cybreon Sovereign Shield */}
      <ProblemLandscape />

      {/* Core Service Pillars Grid */}
      <ServicesGrid
        onBookAdvisory={(serviceName) => scrollToContact(serviceName)}
      />

      {/* Interactive 4-Stage Methodology Journey */}
      <MethodologyTimeline />

      {/* Interactive AI Enterprise Risk & Resilience Assessor */}
      <InteractiveRiskAssessor
        onBookAdvisoryWithReport={(reportSummary) => scrollToContact(undefined, reportSummary)}
      />

      {/* Research Division & Whitepapers */}
      <ResearchLabs />

      {/* Leadership & Technical Authority */}
      <LeadershipSection />

      {/* Enterprise Trust Signals & Case Studies */}
      <TrustSignals />

      {/* Executive Contact & Advisory Booking Form */}
      <ContactSection
        initialService={selectedServiceForAdvisory}
        initialReport={selectedReportForAdvisory}
      />

      {/* Multi-Column High-Impact Footer */}
      <Footer />
    </main>
  );
}
