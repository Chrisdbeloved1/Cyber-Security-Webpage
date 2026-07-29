'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, FileText, Key, Linkedin, Twitter, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function LeadershipSection() {
  const leaders = [
    {
      name: 'Dr. Elena Vance',
      role: 'Founder & Chief Cryptographer',
      credentials: 'Ph.D. MIT CSAIL • Ex-NSA Research Directorate',
      bio: 'Pioneered zero-latency lattice key exchange protocols and post-quantum eBPF cryptographic observers. Serves on NIST PQC Advisory Council.',
      patents: '14 Published Lattice Encryption Patents',
      avatar: 'https://picsum.photos/seed/elena_vance_cyber/600/700',
      pgp: 'PGP: 4F8A 9C21 B73E 88A9 011F',
    },
    {
      name: 'Marcus Thorne',
      role: 'VP of Adversarial Intelligence',
      credentials: 'Ex-DARPA Cyber Division • CREST Master Red Teamer',
      bio: 'Led offensive cyber operations for sovereign defense networks. Specializes in autonomous AI model exfiltration defense and multi-cloud kernel exploits.',
      patents: 'Author of MITRE ATT&CK AI Matrix v2',
      avatar: 'https://picsum.photos/seed/marcus_thorne_cyber/600/700',
      pgp: 'PGP: 8291 ACCF 3310 B992 4E7A',
    },
    {
      name: 'Sarah Lin',
      role: 'Head of Sovereign Enclave Architecture',
      credentials: 'Ex-Principal Security Architect, GCP & CERN',
      bio: 'Architected confidential computing enclaves for international financial clearinghouses and sovereign cloud enclaves across EU jurisdictions.',
      patents: 'Co-Inventor of Hardware-Attested zk-SNARK Telemetry',
      avatar: 'https://picsum.photos/seed/sarah_lin_cyber/600/700',
      pgp: 'PGP: D149 883E 55A1 C209 772F',
    },
  ];

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-[#0D1E20]/60 border-t border-[#2ED3C6]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12282A] border border-[#2ED3C6]/30 text-xs font-mono text-[#57FFF0]">
            <Award className="w-3.5 h-3.5 text-[#57FFF0]" />
            <span>PRINCIPAL LEADERSHIP & FELLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Grounded in Deep Intelligence & <br />
            <span className="teal-gradient-text">Uncompromising Technical Craft.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#AFC4C7]">
            Led by world-renowned cryptographers, defense red team commanders, and cloud enclave architects.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-[#2ED3C6]/25 bg-[#12282A]/90 flex flex-col justify-between group"
            >
              {/* Photo Frame */}
              <div className="relative h-72 w-full overflow-hidden bg-[#071416]">
                <Image
                  src={leader.avatar}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12282A] via-transparent to-transparent" />

                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#071416]/80 backdrop-blur-md border border-[#2ED3C6]/30 text-[10px] font-mono text-[#57FFF0]">
                  {leader.pgp}
                </div>
              </div>

              {/* Bio Content */}
              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#57FFF0] transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-mono text-[#57FFF0] font-semibold">
                    {leader.role}
                  </div>
                  <div className="text-[11px] font-mono text-[#6E8588]">
                    {leader.credentials}
                  </div>
                  <p className="text-xs text-[#AFC4C7] leading-relaxed pt-2">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2ED3C6]/15 flex items-center justify-between text-xs font-mono text-[#6E8588]">
                  <span className="flex items-center gap-1.5 text-white text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-[#57FFF0]" />
                    {leader.patents}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
