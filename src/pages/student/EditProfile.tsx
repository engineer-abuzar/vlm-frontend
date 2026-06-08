import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { 
  User, BookOpen, Globe, ChevronLeft, 
Camera
} from "lucide-react";
import { cn } from "@/lib/utils";

// Official Shadcn Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// --- Mock Data ---
const CLASSES = ["Class 9th", "Class 10th", "Class 11th", "Class 12th"];
const CITIES = ["Mumbai", "Delhi", "Bengaluru", "Pune", "Kolkata", "Hyderabad"];

const updateProfileApi = async (formData: any) => {
  console.log(formData)
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "Aryan",
    nickname: "Nickname",
    class: "Class 10th",
    city: "Mumbai"
  });

  const mutation = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => alert("Profile updated successfully!")
  });

  return (
    <div className="relative min-h-svh w-full bg-[#050505] text-white flex flex-col items-center px-6 pt-10 overflow-x-hidden pb-10">
      <div className="max-w-xl">

      {/* ── BACKGROUND DECOR ── */}
      <div className="absolute top-[10%] left-[-10%] h-64 w-64 bg-cyan-900/10 blur-[100px] pointer-events-none" />

      {/* ── HEADER ── */}
      <header className="relative z-10 w-full flex flex-col items-center gap-6 mb-10">
        <div className="w-full flex items-center justify-start gap-14">
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-white/10 bg-white/5 text-white">
                <ChevronLeft size={24} />
            </Button>
        <h1 className="   ">Edit Profile</h1>

        </div>
      </header>

      {/* ── AVATAR SECTION ── */}
      <div className="relative mb-8 flex flex-col items-center">
         <div className="relative">
            <Avatar className="h-16 w-16 border-[3px] border-cyan-400 p-1 shadow-[0_0_30px_rgba(34,211,238,0.3)] bg-transparent">
                <AvatarImage src="" />
                <AvatarFallback className="bg-black text-white">
                    <div className="h-full w-full rounded-full bg-gradient-to-br from-cyan-900 to-black flex items-center justify-center">
                       <User size={32} className="text-white/20" />
                    </div>
                </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-1 right-1 bg-cyan-400 rounded-full p-1.5 border-4 border-[#050505] text-black cursor-pointer">
                <Camera size={14} strokeWidth={3} />
            </div>
         </div>
         <div className="text-center mt-4 space-y-1">
            <h2 className="   text-white tracking-tight">My Profile</h2>
            <p className="text-xs  text-white/40 uppercase tracking-widest">Edit Details</p>
         </div>
      </div>

      {/* ── FORM FIELDS ── */}
      <main className="w-full max-w-md space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Name (Input) */}
        <EditFieldWrapper icon={<User size={20} />} label="Name">
           <Input 
             value={formData.name}
             onChange={(e) => setFormData({...formData, name: e.target.value})}
             className="border-none bg-transparent h-auto p-0 text-base   text-white focus-visible:ring-0"
           />
        </EditFieldWrapper>

        {/* Nickname (Input) */}
        <EditFieldWrapper icon={<User size={20} />} label="Nickname">
           <Input 
             value={formData.nickname}
             onChange={(e) => setFormData({...formData, nickname: e.target.value})}
             className="border-none bg-transparent h-auto p-0 text-base   text-white focus-visible:ring-0"
           />
        </EditFieldWrapper>

        {/* Class (Select) */}
        <EditFieldWrapper icon={<BookOpen size={20} />} label="Class">
          <Select 
            value={formData.class} 
            onValueChange={(val) => setFormData({...formData, class: val as string})}
          >
            <SelectTrigger className="border-none bg-transparent h-auto p-0 text-base   text-white text-sm focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Select current class" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white rounded-xl">
              {CLASSES.map((c) => (
                <SelectItem key={c} value={c} className="focus:bg-cyan-500/20 focus:text-cyan-400">
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </EditFieldWrapper>

        {/* City (Select) */}
        <EditFieldWrapper icon={<Globe size={20} />} label="City">
          <Select 
            value={formData.city} 
            onValueChange={(val) => setFormData({...formData, city: val as string})}
          >
            <SelectTrigger className="border-none bg-transparent text-xs h-auto p-0 text-base   text-white focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10 text-white rounded-xl">
              {CITIES.map((city) => (
                <SelectItem key={city} value={city} className="focus:bg-cyan-500/20 focus:text-cyan-400">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </EditFieldWrapper>

      </main>

      {/* ── SAVE BUTTON ── */}
      <div className="mt-auto w-full max-w-md pt-10 relative">
        <div className="absolute inset-0 bg-blue-600/30 blur-3xl rounded-full" />
        <Button 
          onClick={() => mutation.mutate(formData)}
          disabled={mutation.isPending}
          className={cn(
            "relative w-full h-12 rounded-[2rem] text-   font-black tracking-widest transition-all active:scale-[0.98]",
            "bg-gradient-to-r from-[#1e3a8e] to-[#0f172a] border border-blue-400/40 text-white shadow-2xl hover:brightness-110"
          )}
        >
          {mutation.isPending ? "SAVING..." : "SAVE CHANGES"}
        </Button>
      </div>

    </div>
      </div>

  );
}

// ── Reusable Wrapper for each Field Row ──
function EditFieldWrapper({ icon, label, children }: { icon: React.ReactNode, label: string, children: React.ReactNode }) {
  return (
    <Card className="bg-[#1a1a1a]/80 border-white/5 backdrop-blur-xl rounded-lg overflow-hidden transition-all hover:bg-[#222]/80">
      <CardContent className="px-6  flex items-center gap-5">
        <div className="text-white/80">
           {icon}
        </div>
        <div className="flex-1 space-y-1">
           <Label className="text-[10px]   uppercase tracking-widest text-white/60 leading-none">
             {label}
           </Label>
           <div className="w-full">
             {children}
           </div>
        </div>
      </CardContent>
    </Card>
  );
}