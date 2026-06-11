import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Landmark, Calendar, Contact2 } from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";

import QualificationField from "@/components/basic/teacher/QualificationField";
import BEdToggle from "@/components/basic/teacher/BEdToggle";
import CertificateGrid from "@/components/basic/teacher/CertificateGrid";

const TeacherQualificationDetails: React.FC = () => {
  const [hasBEd, setHasBEd] = useState(true);

  return (
    <div className={cn("min-h-screen flex flex-col items-center justify-center p-4", bgCss)}>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Qualification Details
        </h1>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className={cn(
          "w-full max-w-xl p-6 rounded-[32px] border border-white/10",
          "bg-[#121212]/95 backdrop-blur-xl shadow-2xl relative"
        )}
      >
        <div className="space-y-5">
          <QualificationField 
            label="Highest Qualification"
            icon={<Book />}
            value="Masters in Education"
            isSelect
          />

          <QualificationField 
            label="Institute Name"
            icon={<Landmark />}
            value="University of London"
          />

          <QualificationField 
            label="Passing Year"
            icon={<Calendar />}
            value="2020"
          />

          <QualificationField 
            label="Teaching Certification"
            icon={<Contact2 />}
            value="NET"
            isSelect
          />

          <div className="pt-2">
            <BEdToggle value={hasBEd} onChange={setHasBEd} />
          </div>

          <CertificateGrid />
        </div>
      </motion.div>

      {/* Decorative Blur Elements */}
      <div className="fixed top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[120px] -z-10" />
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-yellow-600/5 blur-[120px] -z-10" />
    </div>
  );
};

export default TeacherQualificationDetails;