import React from "react";
import { Bell } from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { History,Star } from "lucide-react";
import StatsCard from "@/components/basic/teacher/StatsCard";
import { LiveClassCard, NotificationItem, ReviewItem } from "@/components/basic/teacher/DashboardWidgets";
import ReferralCard from "@/components/basic/teacher/ReferralCard";

const Dashboard: React.FC = () => {
  return (
    <div className={cn("min-h-screen p-4 pb-10 flex flex-col items-center", bgCss)}>
      <div className="w-full max-w-xl space-y-6">
        
        {/* Header */}
        <header className="flex justify-between items-center py-2">
          <div className="space-y-0.5">
            <h1 className="text-xl font-black text-white tracking-tight uppercase">Teacher App</h1>
            <p className="text-[13px] font-bold text-zinc-500 uppercase tracking-widest">Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 bg-emerald-500/20 px-2 py-1 rounded-full border border-emerald-500/30">
                <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Online</span>
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
              <span className="flex items-center gap-1 text-[8px] font-bold text-zinc-500 uppercase">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
              </span>
            </div>
            <button className="relative text-zinc-400 p-1">
              <Bell size={24} />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950" />
            </button>
            <div className="flex flex-col items-center">
              <Avatar className="w-10 h-10 border-2 border-white/10 bg-zinc-800">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
              <span className="text-[10px] font-bold text-zinc-500 mt-1">Sarah</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <StatsCard title="Today's Earnings" value="$1,250" subValue="+5%" variant="teal" />
          <StatsCard title="Total Points" value="8,500" subValue="Value:" variant="gold" icon={<Star size={14} fill="currentColor" />} />
          <StatsCard title="Wallet Balance" value="$5,800" subValue="recent activity..." variant="purple" />
          <StatsCard title="Total Sessions" value="350+" subValue="Value:" icon={<History size={14} />} />
          <StatsCard title="Missed Requests" value="3" subValue="Value:" />
          <StatsCard title="Rating" value="4.9" subValue="4.9 | 125 reviews" icon={<Star size={14} fill="currentColor" className="text-yellow-500" />} />
        </div>

        {/* Classes & Notifications Split Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-[32px] border border-white/5 bg-white/[0.02] flex flex-col gap-4">
            <h3 className="text-sm font-black text-white uppercase tracking-tight">Upcoming Live Classes</h3>
            <LiveClassCard title="AI Fundamentals" student="Liam O'Connor" time="10:30 AM" />
            <LiveClassCard title="AI Fundamentals" student="Liam O'Connor" time="10:30 AM" />
            <LiveClassCard title="AI Fundamentals" student="Liam O'Connor" time="10:30 AM" />
            <span className="text-[9px] font-bold text-zinc-600 text-center uppercase">next in 10 mins</span>
          </div>

          <div className="p-6 rounded-[32px] border border-white/5 bg-white/[0.02] flex flex-col gap-6">
            <h3 className="text-sm font-black text-white uppercase tracking-tight">Notifications</h3>
            <NotificationItem icon={<Star size={14} className="text-yellow-500" />} text="New Review Received from Maya Kapoor" student="Maya K." color="bg-yellow-500/10" />
            <NotificationItem icon={<div className="w-3 h-3 bg-white rounded-sm" />} text="Class Rescheduled by Student..." student="Maya K." color="bg-purple-500/20" />
            <NotificationItem icon={<Bell size={14} className="text-yellow-500" />} text="Class Rescheduled by Maya Kapoor" student="Maya K." color="bg-yellow-500/10" />
          </div>
        </div>

        {/* Bottom Split Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-[32px] border border-white/5 bg-white/[0.02] flex flex-col gap-4">
            <h3 className="text-sm font-black text-white uppercase tracking-tight">Recent Reviews</h3>
            <div className="divide-y divide-white/5 space-y-4">
              <ReviewItem text="Great explanation, helpful tips." student="Maya K." />
              <ReviewItem text="Great explanation, helpful tips." student="Maya K." />
            </div>
          </div>
          <ReferralCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;