import React from "react";
import { Languages } from "lucide-react";
import { LOGIN_URL } from "../../content";

export const Header = ({ t, lang, setLang }) => {
  return (
    <header data-testid="site-header" className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" data-testid="brand-logo" className="flex items-center gap-2">
          <span className="relative h-8 w-8 rounded-xl overflow-hidden shadow-sm">
            <span className="absolute inset-0 bg-gradient-to-br from-[#00BFFF] via-[#7C3AED] to-[#00E5A8]" />
            <span className="absolute inset-[2px] rounded-[0.65rem] bg-white flex items-center justify-center text-[13px] font-heading font-bold tracking-tighter text-[#111827]">R</span>
          </span>
          <span className="font-heading font-semibold tracking-tight text-lg text-[#111827]">Ranz<span className="text-[#00BFFF]">AI</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" data-testid="nav-features" className="hover:text-[#111827] transition-colors">{t.nav.features}</a>
          <a href="#pricing" data-testid="nav-pricing" className="hover:text-[#111827] transition-colors">{t.nav.pricing}</a>
          <a href="#how" data-testid="nav-how" className="hover:text-[#111827] transition-colors">{t.nav.how}</a>
          <a href="#faq" data-testid="nav-faq" className="hover:text-[#111827] transition-colors">{t.nav.faq}</a>
        </nav>
        <div className="flex items-center gap-3">
          <button data-testid="lang-toggle" onClick={() => setLang(lang === "id" ? "en" : "id")} className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 border border-slate-200 rounded-full px-3 py-1.5 hover:bg-slate-50 transition" aria-label="Toggle language">
            <Languages className="w-3.5 h-3.5" />{lang.toUpperCase()}
          </button>
          <a href={LOGIN_URL} data-testid="header-cta" className="inline-flex items-center text-sm font-semibold bg-[#111827] text-white hover:bg-slate-800 rounded-full px-4 py-2 transition shadow-sm">{t.nav.startFree}</a>
        </div>
      </div>
    </header>
  );
};
