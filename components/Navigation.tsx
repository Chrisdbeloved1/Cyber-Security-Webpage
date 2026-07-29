'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, ArrowUpRight, Terminal, Lock, ChevronRight } from 'lucide-react';

interface NavigationProps {
  onOpenAdvisoryModal: () => void;
}

export function Navigation({ onOpenAdvisoryModal }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['overview', 'services', 'methodology', 'risk-assessor', 'research', 'leadership', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Methodology', href: '#methodology', id: 'methodology' },
    { name: 'AI Risk Engine', href: '#risk-assessor', id: 'risk-assessor' },
    { name: 'Research Labs', href: '#research', id: 'research' },
    { name: 'Leadership', href: '#leadership', id: 'leadership' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            className={`glass-nav rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl ${
              scrolled ? 'border-[#2ED3C6]/30 shadow-[#071416]/80' : 'border-[#2ED3C6]/15'
            }`}
          >
            {/* Brand Logo */}
            <a
              href="#overview"
              className="flex items-center space-x-3 group text-left"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A5C5E] to-[#0D1E20] border border-[#2ED3C6]/40 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shadow-[#2ED3C6]/10">
                <Shield className="w-5 h-5 text-[#57FFF0] transition-transform group-hover:rotate-6" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#2ED3C6] animate-pulse" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
                  CYBREON
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1A5C5E]/40 text-[#57FFF0] border border-[#2ED3C6]/30 uppercase tracking-widest font-semibold">
                    CONSULTING
                  </span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0D1E20]/60 p-1 rounded-xl border border-[#2ED3C6]/10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded-lg ${
                      isActive ? 'text-white font-semibold' : 'text-[#AFC4C7] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#1A5C5E]/50 rounded-lg border border-[#2ED3C6]/30 z-0"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenAdvisoryModal}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#1A5C5E] to-[#0D1E20] border border-[#2ED3C6]/40 hover:border-[#57FFF0] shadow-lg hover:shadow-[#2ED3C6]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Schedule Advisory</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#57FFF0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#0D1E20] border border-[#2ED3C6]/20 text-[#AFC4C7] hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#57FFF0]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 sm:hidden glass-nav rounded-2xl p-6 border border-[#2ED3C6]/30 shadow-2xl bg-[#071416]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-[11px] font-mono text-[#57FFF0] tracking-wider uppercase border-b border-[#2ED3C6]/15 pb-2">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-medium text-[#AFC4C7] hover:text-white py-2 px-3 rounded-lg hover:bg-[#12282A]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#2ED3C6]" />
                </a>
              ))}
              <div className="pt-2 border-t border-[#2ED3C6]/15 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdvisoryModal();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#1A5C5E] to-[#2ED3C6] text-center shadow-lg"
                >
                  Schedule Advisory Session
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
