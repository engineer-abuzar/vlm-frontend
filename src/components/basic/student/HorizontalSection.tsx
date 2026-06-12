import { Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

<<<<<<< HEAD
=======
interface SessionItem {
  id: string;
  tutor?: string;
  topic?: string;
}

>>>>>>> sumit
interface HorizontalSectionProps {
  title: string;
  isVideo?: boolean;
  viewAllTo?: string;
<<<<<<< HEAD
}

export default function HorizontalSection({ title, isVideo, viewAllTo }: HorizontalSectionProps) {
  const cards = (
    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
      {[1, 2, 3].map((i) => {
        const card = (
          <div
            key={i}
            className={cn(
              "shrink-0 bg-[#1a1a1a] rounded-3xl border border-white/5 flex items-center justify-center relative",
=======
  items?: SessionItem[];
}

export default function HorizontalSection({ title, isVideo, viewAllTo, items }: HorizontalSectionProps) {
  const displayItems = items?.length ? items.slice(0, 3) : [{ id: "1" }, { id: "2" }, { id: "3" }];

  const cards = (
    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
      {displayItems.map((item) => {
        const card = (
          <div
            key={item.id}
            className={cn(
              "shrink-0 bg-[#1a1a1a] rounded-3xl border border-white/5 flex flex-col items-center justify-center relative p-3",
>>>>>>> sumit
              isVideo ? "w-40 h-56" : "w-64 h-32"
            )}
          >
            <PlayCircle className="text-white/20 h-10 w-10" />
<<<<<<< HEAD
=======
            {item.tutor && <p className="text-[9px] text-white/40 mt-2 truncate w-full text-center">{item.tutor}</p>}
>>>>>>> sumit
          </div>
        );

        if (viewAllTo) {
          return (
<<<<<<< HEAD
            <Link key={i} to={viewAllTo} className="shrink-0">
=======
            <Link key={item.id} to={viewAllTo} className="shrink-0">
>>>>>>> sumit
              {card}
            </Link>
          );
        }

        return card;
      })}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-black tracking-[0.2em] text-white/60">{title}</h3>
        {viewAllTo && (
          <Link to={viewAllTo} className="text-[10px] font-bold text-cyan-400 tracking-widest">
            VIEW ALL
          </Link>
        )}
      </div>
      {cards}
    </div>
  );
}
