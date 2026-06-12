
import { 
  ChevronLeft, 
  ChevronDown, 
  Book, 
  Clock, 
  Check, 
  X, 
  Home, 
  HelpCircle, 
  BookOpen, 
  Bell, 
  User 
} from 'lucide-react';

const LiveClassTracking = () => {
  const attendedClasses = [
    {
      id: 1,
      teacher: "Mr. James Davis",
      subject: "Math: Quadratic Equations",
      time: "Oct 28, 10:30 AM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      status: "Attended",
      type: "completed"
    },
    {
      id: 2,
      teacher: "Dr. Evelyn Reed",
      subject: "English: The Great Gatsby",
      time: "Oct 30, 11:00 AM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Evelyn",
      status: "Attended",
      type: "completed"
    }
  ];

  const missedClasses = [
    {
      id: 3,
      teacher: "Ms. Isabella Rodriguez",
      subject: "Science: The Periodic Table",
      time: "Oct 29, 3:00 PM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
      status: "Missed",
      type: "absent"
    },
    {
      id: 4,
      teacher: "Mr. David Chen",
      subject: "History: The Industrial Revolution",
      time: "Nov 1, 9:00 AM",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      status: "Missed",
      type: "absent"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans pb-24">
      {/* Header */}
      <header className="p-6 flex justify-between items-start">
        <div className="flex flex-col items-center gap-1">
          <ChevronLeft className="text-gray-400 cursor-pointer" />
          <div className="text-indigo-400 opacity-60 text-[10px]">✦</div>
        </div>
        
        <div className="text-center">
          <h1 className="text-xl font-bold tracking-widest leading-tight">LIVE CLASS</h1>
          <h1 className="text-xl font-bold tracking-widest leading-tight">TRACKING</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-gray-400 text-[10px]">Welcome,</p>
            <p className="text-xs font-bold">Sarah</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-green-200 bg-white overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="User" />
          </div>
        </div>
      </header>

      {/* Profile Selector */}
      <div className="mx-6 mb-8 bg-[#1a1a1c] border border-gray-800 rounded-2xl p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-gray-700">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Liam" alt="Liam" />
          </div>
          <span className="text-gray-300 font-medium">Liam's Profile</span>
        </div>
        <ChevronDown className="text-gray-500" size={20} />
      </div>

      {/* Attended Classes Section */}
      <section className="px-6 mb-8">
        <h2 className="text-[11px] font-bold text-gray-500 tracking-widest mb-4 uppercase">Attended Classes</h2>
        <div className="space-y-4">
          {attendedClasses.map((item) => (
            <ClassCard key={item.id} data={item} accentColor="emerald" />
          ))}
        </div>
      </section>

      {/* Missed Classes Section */}
      <section className="px-6 mb-4">
        <h2 className="text-[11px] font-bold text-gray-500 tracking-widest mb-4 uppercase">Missed Classes</h2>
        <div className="space-y-4">
          {missedClasses.map((item) => (
            <ClassCard key={item.id} data={item} accentColor="orange" />
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0d1117] border-t border-gray-800 py-3 px-6 flex justify-between items-center z-50">
        <NavItem icon={<Home size={22} />} label="Home" />
        <NavItem icon={<HelpCircle size={22} />} label="Doubts" />
        <NavItem icon={<BookOpen size={22} />} label="Learning" active />
        <NavItem icon={<Bell size={22} />} label="Alerts" />
        <NavItem icon={<User size={22} />} label="Profile" />
      </nav>
    </div>
  );
};

// Reusable Class Card Component
const ClassCard = ({ data, accentColor }:{ data: any; accentColor: string }) => {
  const isEmerald = accentColor === 'emerald';
  
  return (
    <div className={`relative bg-[#1a1a1c]/60 border rounded-3xl p-5 overflow-hidden shadow-xl
      ${isEmerald ? 'border-emerald-500/30' : 'border-orange-500/30'}`}>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-br 
        ${isEmerald ? 'from-emerald-500' : 'from-orange-500'} to-transparent`} />

      <div className="flex items-start gap-4">
        {/* Avatar with Status Ring */}
        <div className={`w-14 h-14 rounded-full border-2 p-0.5 shrink-0
          ${isEmerald ? 'border-emerald-500' : 'border-orange-500'}`}>
          <div className={`w-full h-full rounded-full overflow-hidden ${isEmerald ? 'bg-emerald-100' : 'bg-orange-100'}`}>
            <img src={data.avatar} alt={data.teacher} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-sm text-gray-100">{data.teacher}</h3>
            <span className={`text-[10px] font-bold ${isEmerald ? 'text-emerald-500' : 'text-orange-500'}`}>
              - {data.status}
            </span>
          </div>

          <div className="space-y-1.5 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Book size={14} className="opacity-60" />
              <span>{data.subject}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="opacity-60" />
              <span>{data.time}</span>
            </div>
          </div>

          <div className={`mt-4 flex items-center gap-2 text-[11px] font-bold
            ${isEmerald ? 'text-emerald-500' : 'text-orange-500'}`}>
            {isEmerald ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
            <span className="uppercase">{data.type === 'completed' ? 'Completed' : 'Absent'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Navigation Item Component
const NavItem = ({ icon, label, active = false }:{ icon: React.ReactNode; label: string; active?: boolean }) => (
  <div className={`flex flex-col items-center gap-1 cursor-pointer transition-colors
    ${active ? 'text-cyan-400' : 'text-gray-500'}`}>
    <div className={active ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' : ''}>
      {icon}
    </div>
    <span className="text-[10px] font-medium tracking-wide">{label}</span>
  </div>
);

export default LiveClassTracking;