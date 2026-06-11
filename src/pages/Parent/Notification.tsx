
import { 
  ChevronDown, 
  AlertTriangle, 
  Clock, 
  MessageCircle, 
  Activity, 
  GraduationCap, 
  BookOpen,

} from 'lucide-react';

const Notification = () => {
  const recentAlerts = [
    {
      id: 1,
      title: "Child Inactive",
      desc: "No app activity detected for over 30 mins.",
      time: "32m ago",
      icon: <AlertTriangle size={20} />,
      color: "border-orange-500 text-orange-500",
      glow: "shadow-[0_0_15px_rgba(249,115,22,0.3)]"
    },
    {
      id: 2,
      title: "Screen Time limit reached",
      desc: "Maximum daily usage for social media apps.",
      time: "2h ago",
      icon: <Clock size={20} />,
      color: "border-cyan-400 text-cyan-400",
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.3)]"
    },
    {
      id: 3,
      title: "New Message from Teacher",
      desc: "Mr. Davis sent a note about the history project.",
      time: "Yesterday",
      icon: <MessageCircle size={20} />,
      color: "border-emerald-500 text-emerald-500",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]"
    }
  ];

  const smartAlerts = [
    {
      id: 4,
      title: "Low Performance",
      desc: "Liam's Math quiz scores are trending below average.",
      time: "Trend Alert - 1d ago",
      icon: <Activity size={20} />,
      color: "border-orange-500 text-orange-500",
      glow: "shadow-[0_0_15px_rgba(249,115,22,0.3)]"
    },
    {
      id: 5,
      title: "Recommended Course",
      desc: "A new 'Creative Writing' module is available.",
      time: "New suggestion - 2d ago",
      icon: <GraduationCap size={20} />,
      color: "border-cyan-400 text-cyan-400",
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.3)]"
    },
    {
      id: 6,
      title: "Study Goal Achieved",
      desc: "Daily study hours goal of 4 hrs was met.",
      time: "Milestone - 3d ago",
      icon: <BookOpen size={20} />,
      color: "border-emerald-500 text-emerald-500",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white p-6 font-sans selection:bg-cyan-500/30">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-wider">NOTIFICATIONS</h1>
          <div className="w-4 h-4 text-cyan-400 mt-1">✦</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-gray-400 text-xs">Welcome,</p>
            <p className="font-bold">Sarah</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-orange-100 border-2 border-yellow-300 overflow-hidden">
             <img src="/api/placeholder/48/48" alt="Sarah" className="object-cover" />
          </div>
        </div>
      </header>

      {/* Profile Selector */}
      <div className="bg-[#1a1a1c] border border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-8 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
             <img src="/api/placeholder/40/40" alt="Liam" />
          </div>
          <span className="text-gray-300 font-medium">Liam's Profile</span>
        </div>
        <ChevronDown className="text-gray-500" />
      </div>

      {/* Recent Alerts Section */}
      <section className="mb-8">
        <h2 className="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">Recent Alerts</h2>
        <div className="bg-[#1a1a1c]/60 border border-yellow-700/30 rounded-2xl overflow-hidden divide-y divide-gray-800">
          {recentAlerts.map((alert) => (
            <NotificationItem key={alert.id} {...alert} />
          ))}
        </div>
      </section>

      {/* Smart Alerts Section */}
      <section className="mb-10">
        <h2 className="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">Smart Alerts</h2>
        <div className="bg-[#1a1a1c]/60 border border-blue-900/30 rounded-2xl overflow-hidden divide-y divide-gray-800">
          {smartAlerts.map((alert) => (
            <NotificationItem key={alert.id} {...alert} />
          ))}
        </div>
      </section>

      {/* Action Button */}
      <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-900 rounded-full font-bold text-lg shadow-lg shadow-blue-900/40 active:scale-95 transition-transform border border-blue-400/20 leading-tight">
        MANAGE<br/><span className="text-sm font-semibold tracking-wide">NOTIFICATIONS</span>
      </button>
    </div>
  );
};

// Reusable Notification Row Component
const NotificationItem = ({ title, desc, time, icon, color, glow }:{title:any,desc:any,time:any,icon:any,color:any,glow:any}) => (
  <div className="p-5 flex items-start gap-4">
    <div className={`w-11 h-11 shrink-0 rounded-xl border-2 flex items-center justify-center ${color} ${glow} bg-black/20`}>
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-sm mb-0.5">{title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed">
        {desc} <span className="italic text-gray-600 whitespace-nowrap ml-1">{time}</span>
      </p>
    </div>
  </div>
);

export default Notification;