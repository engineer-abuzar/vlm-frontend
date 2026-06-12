import React, { useState } from 'react';
import { Plus, Check, Sparkles } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  activeBg?: string;
}

const SwitchProfile: React.FC = () => {
  const [selectedId, setSelectedId] = useState('ethan');

  const profiles: Profile[] = [
    {
      id: 'ethan',
      name: 'Ethan Williams',
      grade: 'Grade 5A',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan',
      activeBg: 'bg-[#1a2b2b]', // Subtle teal-tinted background for active state
    },
    {
      id: 'mia',
      name: 'Mia Johnson',
      grade: 'Grade 3B',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
    },
    {
      id: 'lucas',
      name: 'Lucas Brown',
      grade: 'Preschool',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas',
    },
    {
      id: 'isabella',
      name: 'Isabella Davis',
      grade: 'Grade 2C',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella',
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col items-center p-6 relative overflow-hidden font-sans">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[10%] left-[10%] opacity-40">
        <Sparkles size={20} className="text-blue-300" />
      </div>
      <div className="absolute top-[25%] right-[5%] w-32 h-32 border border-dashed border-white/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] opacity-30">
        <Sparkles size={16} className="text-purple-400" />
      </div>

      {/* Page Title */}
      <h1 className="mt-20 mb-12 text-2xl font-bold tracking-[0.15em] uppercase opacity-90">
        Switch Profile
      </h1>

      {/* Profiles 2x2 Grid */}
      <div className="grid grid-cols-2 gap-5 w-full max-w-sm">
        {profiles.map((profile) => {
          const isActive = selectedId === profile.id;
          return (
            <div
              key={profile.id}
              onClick={() => setSelectedId(profile.id)}
              className={`relative cursor-pointer rounded-[32px] p-[1.5px] transition-all duration-300 ${
                isActive 
                  ? 'bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.15)] scale-[1.02]' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className={`h-full rounded-[31px] p-6 flex flex-col items-center justify-center transition-colors ${
                isActive ? (profile.activeBg || 'bg-[#152322]') : 'bg-[#1a1a1e]'
              }`}>
                
                {/* Active Indicator Checkmark */}
                {isActive && (
                  <div className="absolute top-4 right-4 bg-yellow-400 rounded-full p-0.5 border-2 border-[#152322]">
                    <Check size={14} className="text-[#152322] stroke-[4px]" />
                  </div>
                )}

                {/* Avatar Container */}
                <div className={`w-20 h-20 rounded-full overflow-hidden mb-4 border-4 transition-all ${
                  isActive ? 'border-yellow-400/40 shadow-[0_0_15px_rgba(250,204,21,0.2)]' : 'border-white/5'
                }`}>
                  <img 
                    src={profile.avatar} 
                    alt={profile.name} 
                    className="w-full h-full object-cover bg-[#25252a]" 
                  />
                </div>

                {/* Profile Labels */}
                <h2 className="text-sm font-bold text-center mb-1 tracking-tight">
                  {profile.name}
                </h2>
                <p className="text-[11px] text-gray-500 font-semibold tracking-wide uppercase">
                  {profile.grade}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA Button */}
      <div className="mt-auto mb-10 w-full max-w-sm">
        <button className="w-full h-16 rounded-full relative group overflow-hidden active:scale-[0.98] transition-all shadow-[0_10px_40px_rgba(37,99,235,0.2)]">
          {/* Vibrant Indigo/Blue Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-900" />
          
          {/* Glass Overlay Shine */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Button Content */}
          <div className="relative flex items-center justify-center gap-3">
            <Plus size={22} className="text-white" />
            <span className="text-white text-lg font-bold tracking-tight">
              Add New Child
            </span>
          </div>
          
          {/* Inner Glossy Border */}
          <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
        </button>
      </div>
    </div>
  );
};

export default SwitchProfile;