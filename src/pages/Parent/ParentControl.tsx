
import { ChevronDown, BookOpen, MessageSquare, Video, Tv, ChevronRight, } from 'lucide-react';
import { useState } from 'react';

const ParentControls = () => {
  const [appUsage, setAppUsage] = useState(150); // 2h 30m in minutes
  const [chatOn, setChatOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [liveClassOn, setLiveClassOn] = useState(false);

  // Helper to format minutes to "Xh Ym"
  const formatTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m > 0 ? m + 'm' : '00m'}`;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white p-6 font-sans selection:bg-cyan-500/30">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-wider">PARENT CONTROLS</h1>
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
      <div className="bg-[#1a1a1c] border border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-10 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
             <img src="/api/placeholder/40/40" alt="Liam" />
          </div>
          <span className="text-gray-300 font-medium">Liam's Profile</span>
        </div>
        <ChevronDown className="text-gray-500" />
      </div>

      {/* Daily Usage & Study Section */}
      <section className="mb-10">
        <h2 className="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">Daily Usage & Study</h2>
        
        {/* Study Hours Card */}
        <div className="bg-gradient-to-r from-[#162a2d] to-[#1a1a1c] border border-cyan-900/30 rounded-2xl p-5 mb-4 flex items-center justify-between shadow-cyan-900/10 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-400/20">
              <BookOpen className="text-black" size={24} />
            </div>
            <div>
              <h3 className="font-bold">Daily Study Hours</h3>
              <p className="text-sm text-gray-400">Set Daily Target: <span className="text-cyan-400">4 Hrs</span></p>
            </div>
          </div>
          <button className="flex items-center text-xs text-gray-400">
            Edit <ChevronRight size={16} />
          </button>
        </div>

        {/* App Usage Limit Card */}
        <div className="bg-[#1a1a1c] border border-purple-900/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold">App Usage Limit</h3>
            <div className="relative">
               <div className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded mb-1 relative z-10">
                 Total App Time Limit
                 <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
               </div>
            </div>
          </div>

          <div className="relative mb-6">
            <input 
              type="range" 
              min="1" 
              max="480" 
              value={appUsage}
              onChange={(e) => setAppUsage(parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              style={{
                background: `linear-gradient(to right, #00e5ff ${ (appUsage/480)*100 }%, #374151 ${ (appUsage/480)*100 }%)`
              }}
            />
            <div className="flex justify-between text-[10px] text-gray-500 mt-2">
              <span>1min</span>
              <span>Max</span>
            </div>
          </div>
          
          <div className="text-center text-sm">
            <span className="text-gray-400">Max Usage: </span>
            <span className="text-cyan-400 font-bold">{formatTime(appUsage)}</span>
          </div>
        </div>
      </section>

      {/* App Functionality Section */}
      <section className="mb-10">
        <h2 className="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">App Functionality</h2>
        
        <div className="bg-[#1a1a1c] border border-gray-800 rounded-2xl divide-y divide-gray-800">
          {/* Chat Toggle */}
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <MessageSquare className="text-gray-400" size={20} />
              <span className="text-sm font-medium">Chat ON/OFF</span>
            </div>
            <CustomSwitch active={chatOn} onChange={setChatOn} />
          </div>

          {/* Video Toggle */}
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Video className="text-gray-400" size={20} />
              <span className="text-sm font-medium">Video ON/OFF</span>
            </div>
            <CustomSwitch active={videoOn} onChange={setVideoOn} />
          </div>

          {/* Live Class Toggle */}
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Tv className="text-gray-400" size={20} />
              <span className="text-sm font-medium">Live Class ON/OFF</span>
            </div>
            <CustomSwitch active={liveClassOn} onChange={setLiveClassOn} />
          </div>
        </div>
      </section>

      {/* Action Button */}
      <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-900 rounded-full font-bold text-lg shadow-lg shadow-blue-900/40 active:scale-95 transition-transform border border-blue-400/20">
        UPDATE CONTROLS
      </button>
    </div>
  );
};

// Custom Switch Component to match image styling
const CustomSwitch = ({ active, onChange }: { active: boolean; onChange: (active: boolean) => void }) => {
  return (
    <div 
      onClick={() => onChange(!active)}
      className={`w-16 h-8 rounded-full relative cursor-pointer transition-colors duration-300 flex items-center px-1 border-2 ${
        active ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-gray-800 border-gray-600'
      }`}
    >
      <span className={`text-[9px] font-bold absolute ${active ? 'left-2 text-emerald-400' : 'right-2 text-gray-400'}`}>
        {active ? 'ON' : 'OFF'}
      </span>
      <div className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md ${
        active ? 'translate-x-8' : 'translate-x-0'
      }`} />
    </div>
  );
};

export default ParentControls;