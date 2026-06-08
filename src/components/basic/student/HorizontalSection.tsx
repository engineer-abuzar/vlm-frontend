import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
export default function HorizontalSection({ title, isVideo }: { title: string; isVideo?: boolean }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-black tracking-[0.2em] text-white/60">{title}</h3>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className={cn("shrink-0 bg-[#1a1a1a] rounded-3xl border border-white/5 flex items-center justify-center relative", isVideo ? "w-40 h-56" : "w-64 h-32")}>
             <PlayCircle className="text-white/20 h-10 w-10" />
          </div>
        ))}
      </div>
    </div>
  );
}