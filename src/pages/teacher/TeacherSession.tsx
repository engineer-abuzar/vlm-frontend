import React from "react";
import { Star } from "lucide-react";
import { bgCss } from "@/helper/CssHelper";
import { cn } from "@/lib/utils";

import SessionHeader from "@/components/basic/teacher/SessionHeader";
import ChatBubble, { MathAttachment, AudioAttachment } from "@/components/basic/teacher/ChatBubble";
import ChatInput from "@/components/basic/teacher/ChatInput";

const TeacherSession: React.FC = () => {
  return (
    <div className={cn("min-h-screen flex flex-col items-center relative overflow-x-hidden", bgCss)}>
      {/* Background Decorators */}
      <div className="absolute top-[30%] -right-4 text-purple-500/20 blur-[1px]">
        <Star size={24} fill="currentColor" />
      </div>
      <div className="absolute top-[10%] -left-2 text-cyan-400/20 blur-[1px] rotate-45">
        <Star size={16} fill="currentColor" />
      </div>
      <div className="absolute bottom-[20%] -left-3 text-cyan-500/20 blur-[1px]">
        <Star size={16} fill="currentColor" />
      </div>

      <div className="w-full max-w-xl flex-1 flex flex-col px-4 relative">
        <SessionHeader />

        {/* Scrollable Chat Area */}
        <div className="flex-1 flex flex-col gap-4 py-8 overflow-y-auto no-scrollbar">
          <ChatBubble variant="student" senderName="Aisha">
            I'm stuck on this second derivative step. Can you help?
          </ChatBubble>

          <MathAttachment />

          <AudioAttachment />

          <ChatBubble variant="teacher" senderName="Teacher">
            Certainly, Aisha! Let's break it down.
          </ChatBubble>

          <ChatBubble variant="teacher" senderName="">
            <div className="space-y-1">
              Start with <code className="bg-white/10 px-1 rounded text-sm">dy/dx = f'(x)</code>, 
              then <code className="bg-white/10 px-1 rounded text-sm">d²y/dx² = [...]</code>.
              <br />Look at this term.
            </div>
          </ChatBubble>
        </div>

        {/* Footer Input */}
        <div className="sticky bottom-0 bg-gradient-to-t from-black to-transparent pb-4 pt-10">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default TeacherSession;