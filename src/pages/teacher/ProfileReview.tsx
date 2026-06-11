import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calculator, 
  Atom, 
  Orbit, 
  Users, 
  Play,
  Star
} from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ReviewSectionCard from "@/components/basic/teacher/ReviewSectionCard";

const ProfileReview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={cn("min-h-screen flex flex-col p-4 pb-32 relative overflow-x-hidden", bgCss)}>
      {/* Decorative Assets */}
      <div className="absolute top-1/2 -right-4 text-purple-500/20 blur-[1px]">
        <Star size={24} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-zinc-600/30 blur-[1px]">
        <Star size={12} fill="currentColor" />
      </div>

      {/* Header */}
      <header className="flex items-center mt-4 mb-10">
        <button onClick={() => navigate(-1)} className="p-2 text-white">
          <ChevronLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-xl font-black text-white uppercase tracking-[0.05em] mr-8">
          Profile Review & Final Submit
        </h1>
      </header>

      <div className="max-w-xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Profile Details */}
        <ReviewSectionCard title="Profile Details" onEdit={() => {}} className="row-span-1">
          <div className="flex flex-col items-center text-center space-y-3 mb-2">
            <Avatar className="w-16 h-16 border-2 border-blue-400/20">
               <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jila" />
               <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-base font-bold text-white">Full Name Jila</p>
              <p className="text-[11px] font-medium opacity-80">vlmacademy@gmail.com</p>
              <p className="text-[11px] font-medium opacity-80">+91 23746353</p>
              <p className="text-[11px] font-medium opacity-60 leading-tight pt-1">
                Address: Bonnur Road,<br />neomaik, 20308
              </p>
            </div>
          </div>
        </ReviewSectionCard>

        {/* Qualifications */}
        <ReviewSectionCard title="Qualifications" onEdit={() => {}}>
          <div className="space-y-2">
            <div>
              <p className="text-zinc-100 font-bold text-[13px]">Degree (PIN)</p>
              <p className="text-[11px] opacity-80">Institution: Prismax School</p>
              <p className="text-[11px] opacity-80">Passing year: 2021</p>
              <p className="text-[11px] opacity-80">B.Ed</p>
            </div>
          </div>
        </ReviewSectionCard>

        {/* Subjects */}
        <ReviewSectionCard title="Subjects" onEdit={() => {}}>
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-2 text-zinc-300">
              <Calculator size={14} className="text-zinc-500" />
              <span className="text-[12px] font-medium">Maths</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Atom size={14} className="text-zinc-500" />
              <span className="text-[12px] font-medium">Science</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Orbit size={14} className="text-zinc-500" />
              <span className="text-[12px] font-medium">Physics</span>
            </div>
          </div>
        </ReviewSectionCard>

        {/* Classes */}
        <ReviewSectionCard title="Classes" onEdit={() => {}}>
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-2 text-zinc-300">
              <Users size={14} className="text-zinc-500" />
              <span className="text-[12px] font-medium">Class 6-8</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Users size={14} className="text-zinc-500" />
              <span className="text-[12px] font-medium">Class 9-10</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Users size={14} className="text-zinc-500" />
              <span className="text-[12px] font-medium">Class 11-12</span>
            </div>
          </div>
        </ReviewSectionCard>

        {/* Languages */}
        <ReviewSectionCard title="Languages" onEdit={() => {}}>
          <ul className="list-none space-y-1.5 text-[12px] font-medium text-zinc-300">
            <li>Hindi</li>
            <li>English</li>
            <li>Hinglish</li>
          </ul>
        </ReviewSectionCard>

        {/* Uploaded Documents */}
        <ReviewSectionCard title="Uploaded Documents" onEdit={() => {}}>
          <div className="space-y-3">
            {[
              { label: "Aadhaar Card", status: "Uploaded", color: "text-blue-400", dot: "bg-zinc-600" },
              { label: "Degree", status: "Verified", color: "text-emerald-500", dot: "bg-yellow-500" },
              { label: "Resume", status: "Verified", color: "text-emerald-500", dot: "bg-blue-500" },
              { label: "B.Ed Cert", status: "Verified", color: "text-emerald-500", dot: "bg-yellow-500" },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between">
                <p className="text-[11px] font-medium text-zinc-400">
                  {doc.label} - <span className={doc.color}>{doc.status}</span>
                </p>
                <div className={cn("w-3.5 h-3.5 rounded-[4px]", doc.dot)} />
              </div>
            ))}
          </div>
        </ReviewSectionCard>

        {/* Demo Video Status - Full Width */}
        <ReviewSectionCard title="Demo Video Status" onEdit={() => {}} className="md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-10 rounded-xl bg-zinc-800/80 flex items-center justify-center border border-white/5">
              <Play size={18} fill="currentColor" className="text-zinc-400" />
            </div>
            <p className="text-[12px] font-medium text-zinc-300 leading-tight">
              Demo Video - Uploaded & <br /> Preview Available
            </p>
          </div>
        </ReviewSectionCard>
      </div>

      {/* Action Footer */}
      <div className="fixed bottom-0 left-0 w-full p-8 flex flex-col items-center bg-gradient-to-t from-black to-transparent pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl pointer-events-auto"
        >
          <Button className="w-full h-16 rounded-full text-lg font-black tracking-tighter uppercase transition-all flex items-center justify-center gap-3 bg-[#1A2E5D] hover:bg-[#254185] border border-blue-400/20 shadow-2xl text-white group">
            Submit for Verification
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-[10px] text-zinc-600 text-center mt-6 px-4 leading-tight font-medium">
            Disclaimer: may not use info, used by peditional typographic in this elements. Sketches may be remixed and in color previewed.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileReview;