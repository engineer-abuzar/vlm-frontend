import { useState } from "react";
import { ChevronLeft, Lightbulb, MessageCircle, Headphones, Video } from "lucide-react";
import { cn } from "@/lib/utils";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PLANS = [{
    name: "Premium Plan",
    recommended: true,
    oldPrice: "₹9999",
    price: "₹4999",
    color: "text-yellow-200",
    glow: "shadow-[0_0_20px_rgba(245,166,35,0.3)]",
    border: "border-yellow-300/50",
    features: [
      { icon: Lightbulb, text: "Unlimited AI credits" },
      { icon: MessageCircle, text: "500 human chat credits" },
      { icon: Headphones, text: "Unlimited audio/video minutes" },
      { icon: Video, text: "Unlimited Live class access" },
    ],
  },
   {
    name: "Pro Plan",
    oldPrice: "₹4999",
    price: "₹2499",
    color: "text-blue-400",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    border: "border-blue-400/30",
    features: [
      { icon: Lightbulb, text: "1000 AI credits" },
      { icon: MessageCircle, text: "50 human chat credits" },
      { icon: Headphones, text: "600 audio/video minutes" },
      { icon: Video, text: "10 Live class access" },
    ],
  },
  {
    name: "Basic Plan",
    oldPrice: "₹1999",
    price: "₹999",
    color: "text-cyan-400",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    border: "border-cyan-500/30",
    features: [
      { icon: Lightbulb, text: "100 AI credits" },
      { icon: MessageCircle, text: "5 human chat credits" },
      { icon: Headphones, text: "60 audio/video minutes" },
      { icon: Video, text: "1 Live class access" },
    ],
  },
 
  
];

export default function LearningPlan() {
  const [selectedPlan, setSelectedPlan] = useState("Premium Plan");

  return (
    <div className="vlm-bg relative min-h-svh w-full bg-[#050505] text-white flex flex-col items-center px-4 pb-40 overflow-x-hidden">
      
      {/* ── Background Glow ── */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-blue-700/10 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-purple-900/10 blur-[120px]" />

      {/* ── Header ── */}
      <header className="w-full max-w-5xl pt-8 flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="flex-1 text-center text-xl font-bold tracking-tight pr-10">
          Choose Your Learning Plan
        </h1>
      </header>

      {/* ── Plans Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 w-full max-w-xs md:max-w-2xl">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={cn(
              "relative cursor-pointer transition-all duration-500 border-none  backdrop-blur-xl rounded-[2rem] overflow-visible",
              plan.glow,
              selectedPlan === plan.name ? "ring-2 ring-offset-2 ring-offset-black" : "opacity-80 scale-[0.98]",
              selectedPlan === plan.name && plan.name === "Premium Plan" ? "ring-yellow-500/50 bg-yellow-300/10" : 
              selectedPlan === plan.name && plan.name === "Pro Plan" ? "ring-blue-500/50 bg-blue-400/10" : 
              selectedPlan === plan.name && plan.name === "Basic Plan" ? "ring-cyan-500/50 bg-cyan-500/10" : ""
            )}
          >
            {/* Recommended Badge */}
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <Badge className="bg-yellow-300 text-black font-black text-[10px] tracking-widest px-4 py-1 rounded-full border-none">
                  RECOMMENDED
                </Badge>
              </div>
            )}

            <CardHeader className={cn("text-center space-y-4 pt-10 pb-6 rounded-t-[2rem]", plan.border, "border-b-0")}>
              <CardTitle className="text-lg font-bold text-white">{plan.name}</CardTitle>
              <div className="space-y-1">
                <p className="text-xs text-white/30 line-through decoration-white/20">{plan.oldPrice}/mo</p>
                <p className="text-xs text-white/50">Discount price</p>
                <h2 className={cn("text-2xl font-black tracking-tight drop-shadow-sm", plan.color)}>
                  {plan.price}/mo
                </h2>
              </div>
              <Badge className="bg-yellow-300 text-black font-bold text-[10px] mx-auto px-3 py-1.5 rounded-lg border-none">
                3 Days Free Trial
              </Badge>
            </CardHeader>

            <Separator className={cn("bg-white/10 w-[85%] mx-auto", plan.border)} />

            <CardContent className="space-y-6 pt-8 pb-10">
              {plan.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={cn("mt-1", plan.color)}>
                    <feat.icon size={18} strokeWidth={2} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white leading-none">{feat.text.split(' ')[0]}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-wider font-medium">
                      {feat.text.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── Footer Action ── */}
      <footer className="fixed bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col items-center gap-2 z-50">
        <p className="text-white font-bold text-xl tracking-tight">
          Activate trial for <span className="text-white">₹1</span>
        </p>
        
        <div className="w-full max-w-xl relative">
          {/* Intense Blue Glow */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-blue-500/30 blur-[40px] rounded-full" />
          
          <Button 
            className={cn(
              "relative w-full h-16 rounded-full text-lg font-bold tracking-widest transition-all active:scale-[0.98]",
              "bg-gradient-to-b from-[#1e3a8e] to-[#0f172a]", 
              "border border-blue-400/40 text-white shadow-2xl"
            )}
          >
            START 3-DAY TRIAL
          </Button>
        </div>
      </footer>

    </div>
  );
}