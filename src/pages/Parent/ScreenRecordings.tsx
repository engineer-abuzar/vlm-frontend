import React from 'react';
import { Search, Filter, Play, Clock, Sparkles } from 'lucide-react';

// Define the data structure for type safety
interface Session {
  id: number;
  title: string;
  teacher: string;
  duration: string;
  avatar: string;
}

const sessions: Session[] = [
  {
    id: 1,
    title: "Advanced Astrophysics",
    teacher: "Dr. Amelia Thorne",
    duration: "1h 15m",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amelia",
  },
  {
    id: 2,
    title: "Quantum Mechanics",
    teacher: "Prof. David Chen",
    duration: "1h 45m",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: 3,
    title: "Roman Civilization",
    teacher: "Ms. Sarah Miller",
    duration: "1h 30m",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
];

const SessionRecordings: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white p-6 font-sans relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full" />

      {/* Header */}
      <header className="flex justify-between items-center mb-10 max-w-2xl mx-auto relative z-10">
        <Sparkles size={18} className="text-cyan-400/40" />
        <h1 className="text-xl font-semibold tracking-wide opacity-90">Session Recordings</h1>
        <div className="relative cursor-pointer group">
          <div className="flex flex-col items-center">
            <Search size={22} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
            <Filter size={22} className="text-gray-300 -mt-2 group-hover:text-cyan-400 transition-colors" />
          </div>
        </div>
      </header>

      {/* Recording Cards List */}
      <main className="space-y-8 max-w-2xl mx-auto relative z-10">
        {sessions.map((session) => (
          <div 
            key={session.id} 
            className="rounded-[32px] p-[1.5px] bg-gradient-to-b from-cyan-500/40 via-transparent to-transparent shadow-2xl"
          >
            <div className="bg-[#121216]/90 backdrop-blur-md rounded-[31px] p-5 flex flex-col gap-5 border border-white/5">
              
              {/* Video Thumbnail Section */}
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#1c1c22] to-[#08080a] rounded-[24px] overflow-hidden border border-white/10">
                {/* Central Play Button with Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full scale-150 group-hover:bg-cyan-400/50 transition-all duration-300" />
                    <div className="relative h-16 w-16 rounded-full border-2 border-cyan-400/70 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                      <Play fill="currentColor" size={24} className="text-cyan-400 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Info overlay inside the thumbnail */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl font-bold mb-3 drop-shadow-lg">{session.title}</h2>
                  <div className="flex items-center gap-3">
                    <img 
                      src={session.avatar} 
                      alt={session.teacher} 
                      className="w-8 h-8 rounded-full border border-white/20 bg-gray-800"
                    />
                    <span className="text-sm font-medium text-gray-200">{session.teacher}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Metadata & Button */}
              <div className="px-1 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm font-medium">
                    Teacher: <span className="text-gray-300">{session.teacher}</span>
                  </p>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={16} />
                    <span className="text-sm font-semibold">{session.duration}</span>
                  </div>
                </div>

                <button className="w-full group relative py-4 rounded-full border border-cyan-500/50 flex items-center justify-center gap-2 overflow-hidden transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] active:scale-[0.98]">
                  <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors" />
                  <Play fill="currentColor" size={14} className="text-cyan-400" />
                  <span className="text-cyan-400 font-bold text-[13px] tracking-[0.15em] uppercase">
                    Play Recording
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      
      {/* Safe area spacer for mobile */}
      <div className="h-10" />
    </div>
  );
};

export default SessionRecordings;