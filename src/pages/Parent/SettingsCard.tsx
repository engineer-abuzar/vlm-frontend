import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  Globe, 
  Bell, 
  ShieldCheck, 
  LogOut, 
  Sparkles 
} from "lucide-react";

import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import SettingsCard from "@/components/basic/parent/Settings";

const Settings: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className={cn("min-h-screen flex justify-center p-6", bgCss)}>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-xl flex flex-col relative"
      >
        {/* Background Glows */}
        <div className="absolute top-[20%] -left-10 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] -right-10 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Header */}
        <header className="flex items-center justify-between mb-8 relative z-10 px-2">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          <h1 className="text-xl font-black uppercase tracking-[0.2em] text-white">
            Settings
          </h1>

          <div className="w-10 h-10 flex items-center justify-center">
            <Sparkles size={18} className="text-blue-300/40" />
          </div>
        </header>

        {/* Settings List */}
        <div className="flex flex-col gap-5 z-10">
          
          {/* Profile Section */}
          <SettingsCard
          icon={<Globe size={22} />}
            isProfile
            variant="yellow"
            label="Edit Profile"
            title="Sarah Jones"
            subtitle="sarah_jones@email.com"
            avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
            onClick={() => navigate("/edit-profile")}
          />

          {/* Configuration Sections */}
          <SettingsCard
            variant="cyan"
            icon={<Globe size={22} />}
            title="Language"
            subtitle="English (US)"
            onClick={() => {}}
          />

          <SettingsCard
            variant="yellow"
            icon={<Bell size={22} />}
            title="Notifications"
            subtitle="Push and Email Alerts"
            onClick={() => {}}
          />

          <SettingsCard
            variant="green"
            icon={<ShieldCheck size={22} />}
            title="Privacy"
            subtitle="Data & Security"
            onClick={() => {}}
          />

          {/* Logout Section */}
          <SettingsCard
            variant="red"
            icon={<LogOut size={22} />}
            title="Logout"
            subtitle="Sign out of your account"
            onClick={() => console.log("Logout triggered")}
          />

        </div>

        {/* Footer Sparkle Accent */}
        <div className="absolute bottom-1/4 -left-4">
           <Sparkles size={16} className="text-cyan-500/30 rotate-45" />
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;