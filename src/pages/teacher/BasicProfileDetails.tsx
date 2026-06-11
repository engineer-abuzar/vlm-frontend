import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  User, 
 VenusAndMars, 
  Calendar, 
  MapPin, 
  Mail, 
  Smartphone, 
  Camera,
  ChevronRight
} from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import RegistrationStepper from "@/components/basic/teacher/RegistrationStepper";
import RegistrationField from "@/components/basic/teacher/RegistrationField";

const BasicProfileDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={cn("min-h-screen flex flex-col items-center pb-12", bgCss)}>
      <RegistrationStepper currentStep={1} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "w-full max-w-xl p-6 rounded-[36px] border border-white/10",
          "bg-[#121212]/90 backdrop-blur-3xl shadow-2xl relative mx-4"
        )}
      >
        <header className="text-center mb-8">
          <h1 className="text-[26px] font-bold text-white tracking-tight">
            Basic Profile Details <span className="text-zinc-500 font-normal">(Step 1 of 5)</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-1">Complete your personal details.</p>
        </header>

        <div className="space-y-4">
          {/* Profile Photo & Initial Fields Row */}
          <div className="flex gap-4">
            {/* Upload Card */}
            <div className="w-[140px] flex flex-col items-center justify-center p-4 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="mb-4">
                <Avatar className="w-24 h-24 border-2 border-white/5 bg-zinc-800">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-zinc-800">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-[#8b5e52]" />
                      <div className="w-12 h-8 rounded-t-full bg-[#2d3a4d] -mt-1" />
                    </div>
                  </AvatarFallback>
                </Avatar>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-8 px-4 rounded-xl flex gap-2">
                <Camera size={14} />
                <span className="text-xs font-semibold">Upload</span>
              </Button>
              <span className="text-[10px] text-zinc-500 text-center font-medium mt-3 leading-tight">
                Add Profile<br />Photo
              </span>
            </div>

            {/* Right Column Fields */}
            <div className="flex-1 space-y-3">
              <RegistrationField 
                icon={<User />} 
                label="Full Name" 
                placeholder="Enter Full Name" 
              />
              <RegistrationField 
                icon={<VenusAndMars />} 
                label="Gender" 
                placeholder="Select Gender" 
                isSelect 
                iconColor="text-rose-400/80"
              />
              <RegistrationField 
                icon={<Calendar />} 
                label="DOB" 
                placeholder="DD / MM / YYYY" 
              />
            </div>
          </div>

          {/* Full Width Address */}
          <RegistrationField 
            icon={<MapPin />} 
            label="Address" 
            placeholder="Enter Street Address" 
          />

          {/* Grid: City/State Container & Pincode */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-7 flex flex-col p-3.5 rounded-2xl border border-white/10 bg-white/[0.03]">
               <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-400/80 mt-1" />
                  <div className="flex-1 space-y-2">
                     <div className="flex flex-col border-b border-white/5 pb-2">
                        <span className="text-[11px] font-bold text-zinc-100 uppercase tracking-tight">City / State</span>
                        <div className="flex items-center justify-between mt-1">
                           <span className="text-sm text-zinc-500">City</span>
                           <ChevronRight size={14} className="text-zinc-500 rotate-90" />
                        </div>
                     </div>
                     <div className="flex items-center justify-between pt-1">
                        <span className="text-sm text-zinc-500">State</span>
                        <ChevronRight size={14} className="text-zinc-500 rotate-90" />
                     </div>
                  </div>
               </div>
            </div>

            <RegistrationField 
              className="col-span-5 items-center"
              icon={<MapPin />} 
              label="Pincode" 
              placeholder="XXXXXX" 
            />
          </div>

          {/* Contact Information */}
          <RegistrationField 
            icon={<Mail />} 
            label="Email" 
            value="Pearl@gmail.com" 
          />

          <RegistrationField 
            icon={<Smartphone />} 
            label="Mobile" 
            value="9797979797" 
            iconColor="text-blue-300"
          />
        </div>

        {/* Footer Navigation */}
        <div className="mt-10">
          <Button 
            onClick={() => navigate("/teacher/register/step-2")}
            className={cn(
              "w-full h-14 rounded-full text-lg font-bold transition-all",
              "bg-gradient-to-r from-[#2b4b9b] to-[#1a2e5d] hover:brightness-110",
              "border border-blue-400/20 shadow-[0_0_20px_rgba(37,99,235,0.15)] text-white flex items-center justify-center gap-2"
            )}
          >
            Continue to document <span className="font-light text-xl opacity-80">{">"}</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default BasicProfileDetails;