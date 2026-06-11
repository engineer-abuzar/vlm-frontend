
import { 
  ChevronLeft, 
  Star, 
  Compass, 
  Users, 
  Lightbulb, 
  CalendarCheck, 
  Trophy 
} from 'lucide-react';

const RewardHub = () => {
  const earnedBadges = [
    { 
      id: 1, 
      label: "EARLY ADOPTER", 
      icon: <Star size={28} />, 
      color: "border-yellow-400 text-yellow-400", 
      glow: "shadow-[0_0_15px_rgba(250,204,21,0.4)]" 
    },
    { 
      id: 2, 
      label: "MASTER EXPLORER", 
      icon: <Compass size={28} />, 
      color: "border-cyan-400 text-cyan-400", 
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.4)]" 
    },
    { 
      id: 3, 
      label: "SOCIAL STAR", 
      icon: <Users size={28} />, 
      color: "border-purple-500 text-purple-500", 
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
    },
    { 
      id: 4, 
      label: "PROBLEM SOLVER", 
      icon: <Lightbulb size={28} />, 
      color: "border-orange-500 text-orange-500", 
      glow: "shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
    },
    { 
      id: 5, 
      label: "CONSISTENT PLAYER", 
      icon: <CalendarCheck size={28} />, 
      color: "border-emerald-500 text-emerald-400", 
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
    },
    { 
      id: 6, 
      label: "HIGH ACHIEVER", 
      icon: <Trophy size={28} />, 
      color: "border-yellow-500 text-yellow-500", 
      glow: "shadow-[0_0_15px_rgba(234,179,8,0.4)]" 
    },
  ];

  const lockedBadges = [1, 2, 3];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white p-6 font-sans flex flex-col items-center">
      {/* Top Navigation */}
      <div className="w-full flex justify-start mb-6">
        <div className="flex flex-col items-center gap-1">
          <ChevronLeft className="text-gray-400 cursor-pointer hover:text-white" />
          <div className="text-indigo-400 opacity-60 text-xs">✦</div>
        </div>
      </div>

      {/* Main Title with Heavy Glow */}
      <h1 className="text-3xl font-serif font-bold tracking-[0.2em] mb-12 text-center drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
        REWARDS HUB
      </h1>

      {/* Badges Container */}
      <div className="w-full max-w-sm bg-[#1a1a1c]/80 border border-gray-800 rounded-[2.5rem] p-8 flex flex-col items-center shadow-2xl relative">
        <div className="w-full mb-8">
          <h2 className="text-[11px] tracking-[0.3em] font-bold text-center text-gray-300 uppercase mb-4">
            Badges Collected
          </h2>
          <div className="w-full h-[1px] bg-gray-800" />
        </div>

        {/* Grid of Badges */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-10 w-full mb-12">
          {earnedBadges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center gap-3">
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center bg-black/40 ${badge.color} ${badge.glow}`}>
                {badge.icon}
              </div>
              <span className="text-[8px] font-bold text-center leading-tight tracking-wider text-gray-300 whitespace-pre-line">
                {badge.label.replace(' ', '\n')}
              </span>
            </div>
          ))}

          {/* Locked Badges */}
          {lockedBadges.map((id) => (
            <div key={`locked-${id}`} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-gray-800 flex items-center justify-center bg-gray-900/30">
                <span className="text-xl font-bold text-gray-700">?</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full py-4 bg-gradient-to-r from-blue-700 to-indigo-900 rounded-full font-bold text-sm shadow-lg shadow-blue-900/40 border border-blue-400/20 active:scale-95 transition-transform tracking-widest">
          REDEEM REWARDS
        </button>
      </div>
    </div>
  );
};

export default RewardHub;