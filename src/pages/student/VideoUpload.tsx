import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  ChevronLeft, Bell, Upload, Video, Play, 
  Pencil, Calendar, Book, FileText, Info, ArrowRight 
} from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
// Official Shadcn Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/routes/paths";

// --- Mock API Fetch ---
const fetchCategories = async () => {
  return {
    classes: ["9th", "10th", "11th", "12th"],
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]
  };
};

export default function VideoUpload() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
const navigate=useNavigate()
  // TanStack Query to fetch dropdown data
  const { data: categories } = useQuery({
    queryKey: ["uploadCategories"],
    queryFn: fetchCategories,
  });

  return (
    <div className={`${bgCss}relative flex min-h-svh w-full flex-col items-center bg-[#050505] px-6 pt-5 overflow-x-hidden text-white pb-10`}>
      <div className="max-w-xl">

      
        {/* ── HEADER ── */}
      <header className="w-full max-w-xl flex items-center justify-between pb-2">
        <Button variant="outline" size="icon" onClick={() => navigate(PATHS.STUDENT_DASHBOARD)} className="rounded-xl border-white/10 bg-white/5 text-white">
          <ChevronLeft  className="h-5 w-5" />
        </Button>
        <h1 className="text-xl        tracking-tight">Ask Your Doubt</h1>
        <Button variant="ghost" size="icon" className="relative text-white">
          <Bell className="h-6 w-6" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border border-black" />
        </Button>
      </header>

      <p className="text-sm text-white/50 mb-8 animate-in fade-in duration-700">
        Share your expertise and inspire millions!
      </p>

      <main className="w-full max-w-xl space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* ── DRAG & DROP UPLOAD ZONE ── */}
        <Card className="border-2 border-dashed border-cyan-500/70 bg-cyan-500/5 rounded-[2rem] overflow-hidden cursor-pointer group transition-all hover:bg-cyan-500/10">
          <CardContent className=" flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-6 text-white/30 group-hover:text-cyan-400 transition-colors">
              <div className="p-3 bg-white/5 rounded-full"><Play size={24} /></div>
              <div className="flex gap-4">
                <Upload size={32} />
                <Video size={32} />
              </div>
            </div>
            <div className="text-center space-y-1">
              <p className="text-lg        text-white leading-tight">Drag & Drop or Click</p>
              <p className="text-lg        text-white leading-tight">to Upload Video</p>
            </div>
          </CardContent>
        </Card>

        {/* ── FORM FIELDS ── */}
        
        {/* Title Input */}
        <UploadFieldCard icon={<Pencil className="text-cyan-400" />} label="Title">
           <div className="relative">
            <Input 
              placeholder="Enter engaging video title..." 
              className="border-none bg-transparent h-auto p-0 text-base text-white placeholder:text-white/20 focus-visible:ring-0"
              maxLength={100}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="absolute bottom-0 right-0 text-[9px] text-white/30        tracking-widest">{title.length} / 100</span>
           </div>
        </UploadFieldCard>

        {/* Class Select */}
        <UploadFieldCard icon={<Calendar className="text-cyan-400" />} label="Class">
          <Select>
            <SelectTrigger className="border-none bg-transparent h-auto p-0 text-base text-white focus:ring-0">
              <SelectValue placeholder="Select Class (e.g., 10th)" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
              {categories?.classes.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </UploadFieldCard>

        {/* Subject Select */}
        <UploadFieldCard icon={<Book className="text-cyan-400" />} label="Subject">
          <Select>
            <SelectTrigger className="border-none bg-transparent h-auto p-0 text-base text-white focus:ring-0">
              <SelectValue placeholder="Select Subject (e.g., Physics)" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
              {categories?.subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </UploadFieldCard>

        {/* Topic / Description */}
        <UploadFieldCard icon={<FileText className="text-cyan-400" />} label="Topic">
          <div className="relative">
            <Textarea 
              placeholder="Describe the specific topic..." 
              className="border-none bg-transparent min-h-[60px] p-0 text-base text-white placeholder:text-white/20 focus-visible:ring-0 resize-none"
              maxLength={500}
              onChange={(e) => setTopic(e.target.value)}
            />
            <span className="absolute bottom-0 right-0 text-[9px] text-white/30        tracking-widest">{topic.length} / 500</span>
          </div>
        </UploadFieldCard>

        {/* Note */}
        <div className="flex items-center justify-center gap-2 text-cyan-400/80">
          <Info size={16} />
          <p className="text-xs font-medium">Note: <span className="text-white/60">Max video duration is 90 seconds.</span></p>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="pt-6 relative">
            <div className="absolute inset-x-0 bottom-0 top-6 bg-blue-600/20 blur-3xl rounded-full" />
            <Button onClick={() => navigate(PATHS.DOUBT_SUBMITTED)} className="relative w-full h-16 rounded-full bg-gradient-to-r from-[#1e3a8e] to-[#0f172a] border border-blue-400/40 text-white font-black tracking-widest text-lg shadow-2xl hover:brightness-110 active:scale-[0.98]">
              SUBMIT VIDEO <ArrowRight size={20} className="ml-2" />
            </Button>
        </div>

      </main>
    </div>
    </div>
  );
}

// ── Reusable Field Card Component (Pure Shadcn) ──
function UploadFieldCard({ icon, label, children }: { icon: React.ReactNode, label: string, children: React.ReactNode }) {
  return (
    <Card className="bg-transparent border-1 py-2 border-cyan-500 backdrop-blur-xl rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.05)]">
      <CardContent className="px-4 py-0 flex items-center gap-5">
        <div className="h-14 w-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
          {icon}
        </div>
        <div className="flex-1 space-y-1">
          <Label className="text-[10px] font-black uppercase tracking-widest text-white">{label}</Label>
          <div className="w-full">
            {children}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}