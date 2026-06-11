import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  IdCard, 
  GraduationCap, 
  Briefcase, 
  HelpCircle, 
  ChevronRight,
  Star
} from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DocumentUploadCard from "@/components/basic/teacher/DocumentUploadCard";

const DocumentUpload: React.FC = () => {
  const navigate = useNavigate();

  const handleUpload = (id: string) => {
    console.log(`Uploading document: ${id}`);
    // Handle file picker logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className={cn("min-h-screen flex flex-col items-center p-6 pb-32 relative overflow-hidden", bgCss)}>
      
      {/* Decorative Assets */}
      <div className="absolute top-10 right-8 text-purple-500/40 blur-[1px] rotate-12">
        <Star size={24} fill="currentColor" />
      </div>
      <div className="absolute bottom-1/4 right-6 text-zinc-600/40 blur-[1px]">
        <Star size={12} fill="currentColor" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 mb-10 text-center"
      >
        <h1 className="text-[28px] font-bold text-white tracking-widest uppercase">
          Document Upload
        </h1>
      </motion.header>

      {/* Upload Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xl space-y-4"
      >
        <DocumentUploadCard
          id="aadhaar"
          title="Aadhaar Card"
          description="Upload Image or PDF (Front & Back)"
          icon={<IdCard />}
          status="PENDING"
          onUpload={handleUpload}
          topRightIcon={<IdCard />}
        />

        <DocumentUploadCard
          id="qualification"
          title="Qualification Certificate"
          description="Upload Highest Degree or Marklist"
          icon={<GraduationCap className="text-yellow-500/80" />}
          status="PENDING"
          onUpload={handleUpload}
        />

        <DocumentUploadCard
          id="experience"
          title="Experience Document"
          description="Upload Work Experience Letter"
          icon={<Briefcase className="text-purple-400" />}
          status="PENDING"
          onUpload={handleUpload}
        />
      </motion.div>

      {/* Footer Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full p-8 flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[2px] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl flex items-center gap-4 pointer-events-auto"
        >
          {/* Help Button */}
          <Button
            variant="ghost"
            size="icon"
            className="w-14 h-14 rounded-full border border-white/10 bg-zinc-900/40 text-zinc-400 hover:text-white"
          >
            <HelpCircle size={28} strokeWidth={1.5} />
          </Button>

          {/* Submit Button */}
          <Button
            onClick={() => navigate("/teacher/register/success")}
            className={cn(
              "flex-1 h-16 rounded-full text-lg font-bold transition-all uppercase tracking-tight",
              "bg-gradient-to-r from-[#2b4b9b] to-[#1a2e5d] hover:brightness-110",
              "border border-blue-400/20 shadow-2xl text-white"
            )}
          >
            Submit for Verification
          </Button>

          {/* Next/Arrow Button */}
          <Button
            variant="ghost"
            size="icon"
            className="w-14 h-14 rounded-full border border-white/10 bg-zinc-900/40 text-zinc-400 hover:text-white"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DocumentUpload;
