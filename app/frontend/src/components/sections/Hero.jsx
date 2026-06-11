import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { LOGIN_URL } from "../../content";
import { DashboardMockup } from "./DashboardMockup";

export const Hero = ({ t }) => {
  return (
    <section id="top" data-testid="hero-section" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-radial pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(0,191,255,0.18),transparent)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm" data-testid="hero-badge"><Sparkles className="w-3.5 h-3.5 text-[#00BFFF]" />{t.hero.badge}</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="font-heading mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]" data-testid="hero-headline">{t.hero.titleA}<br /><span className="text-gradient-primary">{t.hero.titleB}</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed" data-testid="hero-subhead">{t.hero.subtitle}</motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={LOGIN_URL} data-testid="hero-cta-primary" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#7C3AED] text-white font-semibold px-6 py-3 hover:opacity-95 transition shadow-xl shadow-cyan-500/20">{t.hero.ctaPrimary}<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></a>
          <a href="#pricing" data-testid="hero-cta-secondary" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-slate-50 transition shadow-sm">{t.hero.ctaSecondary}</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500"><span className="inline-flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#00E5A8]" /> {t.hero.uptime}</span><span className="inline-flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-[#7C3AED]" /> {t.hero.rating}</span><span className="inline-flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#00BFFF]" /> {t.hero.users}</span></motion.div>
        <div className="mt-16 sm:mt-20"><DashboardMockup /></div>
      </div>
    </section>
  );
};
