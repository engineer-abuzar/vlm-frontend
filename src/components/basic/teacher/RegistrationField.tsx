import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface RegistrationFieldProps {
  icon: React.ReactNode;
  label: string;
  placeholder?: string;
  value?: string;
  isSelect?: boolean;
  className?: string;
  iconColor?: string;
}

const RegistrationField: React.FC<RegistrationFieldProps> = ({
  icon,
  label,
  placeholder,
  value,
  isSelect = false,
  className,
  iconColor = "text-blue-400/80"
}) => {
  return (
    <div className={cn(
      "flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:bg-white/[0.05]",
      className
    )}>
      <div className={cn("flex-shrink-0", iconColor)}>
        {React.cloneElement(icon as React.ReactElement, { size: 18, strokeWidth: 1.5 })}
      </div>
      <div className="flex flex-1 flex-col overflow-hidden leading-tight">
        <span className="text-[11px] font-bold text-zinc-100 uppercase tracking-tight">{label}</span>
        <div className="flex items-center justify-between mt-0.5">
          <span className={cn(
            "text-[14px] truncate",
            value ? "text-zinc-300" : "text-zinc-500 font-light"
          )}>
            {value || placeholder}
          </span>
          {isSelect && <ChevronDown size={14} className="text-zinc-500" />}
        </div>
      </div>
    </div>
  );
};

export default RegistrationField;