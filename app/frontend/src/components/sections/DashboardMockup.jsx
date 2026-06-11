import React from "react";
import { motion } from "framer-motion";
import { Palette, PenLine, Sparkles, Scissors, Repeat, Layers, Search, Bell, Settings, Plus, Wand2, ImageIcon } from "lucide-react";

const TOOLS = [
  { key: "design", icon: Palette, color: "#00BFFF", label: "Design" },
  { key: "write", icon: PenLine, color: "#7C3AED", label: "Write" },
  { key: "gel", icon: Sparkles, color: "#00E5A8", label: "GEL" },
  { key: "cut", icon: Scissors, color: "#F472B6", label: "Cut" },
  { key: "convert", icon: Repeat, color: "#F59E0B", label: "Convert" },
  { key: "mockup", icon: Layers, color: "#3B82F6", label: "Mockup" },
];

export const DashboardMockup = () => {
  return (
    <div data-testid="hero-dashboard-mockup" className="relative w-full max-w-5xl mx-auto">
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-[#00BFFF]/20 via-[#7C3AED]/12 to-[#00E5A8]/20 blur-3xl opacity-80 -z-10" />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }} className="rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-300" /><span className="w-2.5 h-2.5 rounded-full bg-slate-300" /><span className="w-2.5 h-2.5 rounded-full bg-slate-300" /></div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-500 font-mono"><span className="px-2 py-0.5 rounded bg-white border border-slate-200">app.ranz-ai.com</span></div>
          <div className="flex items-center gap-2 text-slate-400"><Search className="w-3.5 h-3.5" /><Bell className="w-3.5 h-3.5" /><Settings className="w-3.5 h-3.5" /></div>
        </div>
        <div className="grid grid-cols-12 min-h-[420px]">
          <aside className="hidden md:flex col-span-2 flex-col gap-1 p-4 border-r border-slate-200 bg-slate-50/60">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 px-2">Tools</div>
            {TOOLS.map((tool, i) => {
              const Icon = tool.icon;
              return <div key={tool.key} className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs ${i === 0 ? "bg-white text-slate-950 border border-slate-200 shadow-sm" : "text-slate-500 hover:text-slate-900 hover:bg-white"} transition cursor-default`}><Icon className="w-3.5 h-3.5" style={{ color: i === 0 ? tool.color : undefined }} /><span className="font-medium">{tool.label}</span></div>;
            })}
            <div className="mt-auto pt-3 border-t border-slate-200"><div className="text-[10px] text-slate-500 px-2">Ranz Coin</div><div className="px-2 mt-1 text-sm font-semibold text-[#00A77A]">120 <span className="text-slate-500 font-normal">coins</span></div></div>
          </aside>
          <main className="col-span-12 md:col-span-10 p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"><Wand2 className="w-4 h-4 text-[#00BFFF]" /><div className="text-xs sm:text-sm text-slate-700 truncate">Buat poster promosi kafe Tropical Brew<span className="text-slate-400"> — siap diproses</span></div><span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#00E5A8]/10 text-[#008966] border border-[#00E5A8]/20">AI</span></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TOOLS.map((tool, i) => {
                const Icon = tool.icon;
                return <motion.div key={tool.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.06 }} className="relative rounded-xl border border-slate-200 bg-white p-3.5 overflow-hidden shadow-sm"><div className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-15" style={{ background: tool.color }} /><div className="flex items-center justify-between mb-3"><div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${tool.color}1A`, color: tool.color }}><Icon className="w-3.5 h-3.5" /></div><Plus className="w-3.5 h-3.5 text-slate-300" /></div><div className="text-[13px] font-semibold text-slate-950">RanzAI {tool.label}</div><div className="text-[11px] text-slate-500 mt-0.5">{i % 2 === 0 ? "12 tugas" : "8 tugas"} bulan ini</div><div className="mt-3 h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full" style={{ width: `${40 + i * 9}%`, background: `linear-gradient(90deg, ${tool.color}, ${tool.color}80)` }} /></div></motion.div>;
              })}
            </div>
            <div className="grid grid-cols-3 gap-3">{[0, 1, 2].map((i) => <div key={i} className="aspect-video rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center relative overflow-hidden"><ImageIcon className="w-4 h-4 text-slate-300" /><div className="absolute bottom-2 left-2 text-[10px] text-slate-400 font-mono">output_{i + 1}.png</div></div>)}</div>
          </main>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9, x: -10 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.8 }} className="hidden sm:flex absolute -left-6 top-1/3 items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-2 shadow-xl"><span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00E5A8] to-[#00BFFF] flex items-center justify-center text-[10px] font-bold text-[#111827]">R</span><span className="text-xs font-medium text-slate-800">+24 Ranz Coin</span></motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9, x: 10 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 1 }} className="hidden sm:flex absolute -right-4 bottom-12 items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-2 shadow-xl"><span className="w-2 h-2 rounded-full bg-[#00E5A8]" /><span className="text-xs text-slate-700">AI processing · 1.2s</span></motion.div>
    </div>
  );
};
