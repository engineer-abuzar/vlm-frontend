import React, { useState } from "react";
import { ChevronLeft, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { bgCss } from "@/helper/CssHelper";
import { ScrollArea } from "@/components/ui/scroll-area";
import DoubtCard  from "@/components/basic/parent/Doubt_Card";
import type{ DoubtStatus } from "@/components/basic/parent/Doubt_Card";
import BottomNav from "@/components/layout/BottomNav";

const filters = ["ALL", "SOLVED", "PENDING"];

const Doubt_History: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const doubts = [
    { subject: "Math", title: "cos(2x) proof", description: "Could someone please explain the step-by-step...", status: "SOLVED" as DoubtStatus, likes: 3, comments: 0, time: "10:15 AM, Oct 24", views: 30, iconLetter: "M" },
    { subject: "Chemistry", title: "Periodic Table", description: "Could someone please explain the step-by-step...", status: "PENDING" as DoubtStatus, likes: 3, comments: 0, time: "10:15 AM, Oct 24", views: 30, iconLetter: "C" },
    { subject: "Physics", title: "Kinematics", description: "Could someone please explain the step-by-step...", status: "SOLVED" as DoubtStatus, likes: 1, comments: 1, time: "10:15 AM, Oct 24", views: 10, iconLetter: "P" },
    { subject: "History", title: "WWII treaties", description: "Could someone please explain the step-by-step...", status: "IN REVIEW" as DoubtStatus, likes: 2, comments: 1, time: "2h ago", views: 20, iconLetter: "H" },
    { subject: "Biology", title: "Cell structure", description: "Could someone please explain the step-by-step...", status: "PENDING" as DoubtStatus, likes: 5, comments: 2, time: "5h ago", views: 45, iconLetter: "B" },
  ];

  return (
    <div className={cn("min-h-screen flex flex-col items-center pb-20", bgCss)}>
      <div className="w-full max-w-xl px-6 pt-6 relative flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <button className="h-12 w-12 rounded-2xl bg-zinc-900/50 border border-white/10 flex items-center justify-center hover:bg-zinc-800 transition-colors">
              <ChevronLeft size={20} className="text-white" />
            </button>
            <h1 className="text-lg font-black uppercase tracking-[0.15em] text-white">Doubt History</h1>
          </div>
          <Search size={22} className="text-zinc-400" />
          <Sparkles className="absolute -left-2 top-14 text-cyan-400/30" size={14} />
        </header>

        {/* Filter Tabs */}
        <div className="bg-zinc-950/60 p-1.5 rounded-[24px] border border-white/5 flex mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "flex-1 py-3 text-[11px] font-black uppercase tracking-widest transition-all rounded-2xl",
                activeFilter === f 
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]" 
                  : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search for doubts" 
            className="w-full h-14 bg-zinc-950/40 border border-white/10 rounded-2xl pl-12 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400/50 transition-all"
          />
        </div>

        {/* Doubts List */}
        <ScrollArea className="flex-1 -mx-2 px-2">
          <div className="flex flex-col gap-4 pb-10">
            {doubts.map((doubt, index) => (
              <DoubtCard key={index} {...doubt} />
            ))}
          </div>
        </ScrollArea>

        {/* Decorative background glow */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <BottomNav />
    </div>
  );
};

export default Doubt_History;