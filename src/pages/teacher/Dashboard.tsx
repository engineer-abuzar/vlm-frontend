import React from "react";
import { Bell, History, Star } from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { teacherApi } from "@/lib/teacher-api";
import StatsCard from "@/components/basic/teacher/StatsCard";
import { LiveClassCard, NotificationItem, ReviewItem } from "@/components/basic/teacher/DashboardWidgets";
import ReferralCard from "@/components/basic/teacher/ReferralCard";

const Dashboard: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["teacherDashboard"],
    queryFn: teacherApi.getDashboard,
  });

  const teacher = data?.teacher;
  const stats = data?.stats;
  const firstName = teacher?.name?.split(" ")[0] ?? "Teacher";
  const isOnline = teacher?.availabilityStatus === "online";

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
              <div className={cn("flex items-center gap-2 px-2 py-1 rounded-full border",
                isOnline ? "bg-emerald-500/20 border-emerald-500/30" : "bg-zinc-500/20 border-zinc-500/30"
              )}>
                <span className={cn("text-[8px] font-black uppercase tracking-widest",
                  isOnline ? "text-emerald-500" : "text-zinc-400"
                )}>
                  {isLoading ? "..." : teacher?.availabilityStatus ?? "Offline"}
                </span>
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
              <span className="flex items-center gap-1 text-[8px] font-bold text-zinc-500 uppercase">
                <div className={cn("w-1.5 h-1.5 rounded-full", isOnline ? "bg-emerald-500" : "bg-zinc-500")} />
                {isOnline ? "Active" : "Inactive"}
              </span>
            </div>
            <button className="relative text-zinc-400 p-1">
              <Bell size={24} />
              {(data?.unreadNotifications ?? 0) > 0 && (
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950" />
              )}
            </button>
            <div className="flex flex-col items-center">
              <Avatar className="w-10 h-10 border-2 border-white/10 bg-zinc-800">
                <AvatarImage src={teacher?.profilePhoto ?? `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}`} />
                <AvatarFallback>{firstName[0]}</AvatarFallback>
              </Avatar>
              <span className="text-[10px] font-bold text-zinc-500 mt-1">{firstName}</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <StatsCard title="Today's Earnings" value={isLoading ? "..." : `₹${stats?.walletBalance ?? 0}`} subValue="+0%" variant="teal" />
          <StatsCard title="Total Points" value={isLoading ? "..." : String(stats?.totalPoints ?? 0)} subValue="Value:" variant="gold" icon={<Star size={14} fill="currentColor" />} />
          <StatsCard title="Wallet Balance" value={isLoading ? "..." : `₹${stats?.walletBalance ?? 0}`} subValue="recent activity..." variant="purple" />
          <StatsCard title="Total Sessions" value={isLoading ? "..." : String(stats?.totalSessions ?? 0)} subValue="Value:" icon={<History size={14} />} />
          <StatsCard title="Missed Requests" value={isLoading ? "..." : String(stats?.missedRequests ?? 0)} subValue="Value:" />
          <StatsCard title="Rating" value={isLoading ? "..." : String(stats?.rating ?? 0)} subValue={`${stats?.rating ?? 0} | ${data?.recentReviews?.length ?? 0} reviews`} icon={<Star size={14} fill="currentColor" className="text-yellow-500" />} />
        </div>

        {/* Classes & Notifications */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-[32px] border border-white/5 bg-white/[0.02] flex flex-col gap-4">
            <h3 className="text-sm font-black text-white uppercase tracking-tight">Upcoming Live Classes</h3>
            {isLoading ? (
              <p className="text-xs text-zinc-500">Loading...</p>
            ) : data?.upcomingClasses?.length > 0 ? (
              data.upcomingClasses.map((cls: any) => (
                <LiveClassCard key={cls.id} title={cls.type} student={cls.student} time={
                  cls.startedAt
                    ? new Date(cls.startedAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
                    : "Pending"
                } />
              ))
            ) : (
              <p className="text-xs text-zinc-500 italic">No upcoming classes</p>
            )}
            <span className="text-[9px] font-bold text-zinc-600 text-center uppercase">next in 10 mins</span>
          </div>

          <div className="p-6 rounded-[32px] border border-white/5 bg-white/[0.02] flex flex-col gap-6">
            <h3 className="text-sm font-black text-white uppercase tracking-tight">Notifications</h3>
            {isLoading ? (
              <p className="text-xs text-zinc-500">Loading...</p>
            ) : data?.notifications?.length > 0 ? (
              data.notifications.slice(0, 3).map((n: any) => (
                <NotificationItem key={n.id} icon={<Bell size={14} className="text-yellow-500" />} text={n.message} student={n.title} color="bg-yellow-500/10" />
              ))
            ) : (
              <p className="text-xs text-zinc-500 italic">No notifications</p>
            )}
          </div>
        </div>

        {/* Reviews & Referral */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-[32px] border border-white/5 bg-white/[0.02] flex flex-col gap-4">
            <h3 className="text-sm font-black text-white uppercase tracking-tight">Recent Reviews</h3>
            <div className="divide-y divide-white/5 space-y-4">
              {isLoading ? (
                <p className="text-xs text-zinc-500">Loading...</p>
              ) : data?.recentReviews?.length > 0 ? (
                data.recentReviews.slice(0, 2).map((r: any) => (
                  <ReviewItem key={r.id} text={r.comment ?? "No comment"} student={r.student} />
                ))
              ) : (
                <p className="text-xs text-zinc-500 italic">No reviews yet</p>
              )}
            </div>
          </div>
          <ReferralCard />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
