
import { 
  Shield, 
  ArrowUp, 
  Settings, 
  Check, 
  ArrowDownCircle 
} from 'lucide-react';

const Subscription = () => {
  const paymentHistory = [
    { id: 1, date: "Oct 15, 2023", label: "Premium Renewal", price: "$14.99" },
    { id: 2, date: "Sep 15, 2023", label: "Premium Renewal", price: "$14.99" },
    { id: 3, date: "Aug 15, 2023", label: "Premium Upgrade Fee", price: "$5.00" },
    { id: 4, date: "Jul 15, 2023", label: "Premium Renewal", price: "$14.99" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white p-6 font-sans selection:bg-yellow-500/30">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-wider uppercase">Subscription</h1>
          <div className="w-4 h-4 text-indigo-400 mt-1">✦</div>
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

      {/* Current Plan Card */}
      <div className="relative mb-6 rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1a1c] to-[#0a0a0b] border border-yellow-500/20 p-10 flex flex-col items-center shadow-2xl">
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
        
        <div className="relative mb-6">
          <div className="text-yellow-500/80 filter drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
            <Shield size={80} strokeWidth={1.5} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1">
               <Check size={32} className="text-yellow-500" strokeWidth={3} />
            </div>
          </div>
        </div>

        <p className="text-[10px] tracking-[0.3em] font-bold text-gray-400 mb-2 uppercase">Current Plan</p>
        <h2 className="text-3xl font-serif font-bold text-[#eec15b] tracking-tight mb-4 drop-shadow-md">
        FAMILY PREMIUM
        </h2>
        
        <div className="flex items-center gap-1.5 text-sm font-medium">
          <span className="text-gray-400">Status:</span>
          <span className="text-emerald-500 flex items-center gap-1">
            Active <Check size={14} strokeWidth={3} />
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 mb-10">
        <button className="w-full py-4 bg-gradient-to-r from-blue-700 to-indigo-900 rounded-full font-bold text-md flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 border border-blue-400/20 active:scale-[0.98] transition-transform">
          Upgrade Plan <ArrowUp size={18} />
        </button>
        
        <button className="w-full py-4 bg-[#1a1a1c]/40 rounded-full font-bold text-md flex items-center justify-center gap-2 border border-yellow-600/50 text-yellow-500 active:scale-[0.98] transition-transform">
          Manage Plan <Settings size={18} />
        </button>
      </div>

      {/* Payment History Section */}
      <section>
        <h2 className="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">Payment History</h2>
        <div className="bg-[#1a1a1c]/60 border border-purple-900/20 rounded-t-3xl rounded-b-[40px] overflow-hidden divide-y divide-gray-800/50">
          {paymentHistory.map((item) => (
            <div key={item.id} className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-2 rounded-full">
                  <ArrowDownCircle className="text-emerald-500" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-200">{item.date}</h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {item.label} - <span className="text-gray-400">{item.price}</span>
                  </p>
                </div>
              </div>
              <Check className="text-emerald-500" size={20} strokeWidth={3} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Subscription;