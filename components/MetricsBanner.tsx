'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Cpu, Clock, Award, CheckCircle2 } from 'lucide-react';

export function MetricsBanner() {
  const metrics = [
    {
      value: '$4.8B+',
      label: 'Enterprise Assets Shielded',
      description: 'Securing multi-cloud topologies across global banks & defense contractors',
      icon: ShieldAlert,
      color: 'text-[#2ED3C6]',
    },
    {
      value: '0',
      label: 'Unmitigated Zero-Days',
      description: 'Zero enterprise intrusions across 650+ production deployments',
      icon: CheckCircle2,
      color: 'text-[#57FFF0]',
    },
    {
      value: '<3.8 Min',
      label: 'Containment Velocity SLA',
      description: 'Sub-4 minute automated lateral threat isolation and containment',
      icon: Clock,
      color: 'text-[#4FA8FF]',
    },
    {
      value: '140+',
      label: 'Sovereign Audits Passed',
      description: 'FedRAMP High, ISO 27001:2022, SOC 2 Type II, and NIS2 certified',
      icon: Award,
      color: 'text-[#F5B942]',
    },
  ];

  return (
    <section className="relative py-12 border-y border-[#2ED3C6]/15 bg-[#0D1E20]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-[#2ED3C6]/15 hover:border-[#2ED3C6]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-[#12282A] border border-[#2ED3C6]/20 ${item.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#6E8588] tracking-widest uppercase">
                    AUDITED
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mb-1 group-hover:text-[#57FFF0] transition-colors">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-[#AFC4C7] mb-1">
                  {item.label}
                </div>
                <p className="text-xs text-[#6E8588] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
