import React from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface ReviewCardProps {
  reviewerName: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  reviewId: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewerName, avatar, rating, comment, date, reviewId }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-[28px] border border-white/5 bg-white/[0.01] backdrop-blur-xl mb-4"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border border-white/10">
            <AvatarImage src={avatar} />
            <AvatarFallback>{reviewerName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <span className="text-sm font-black text-white">Rev {reviewId}:</span>
            <div className="flex gap-0.5 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill={i < rating ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-[10px] text-zinc-500">({rating} stars)</span>
          </div>
        </div>
      </div>

      <p className="text-[13px] text-zinc-300 leading-relaxed font-medium italic">
        "{comment}"
      </p>

      <div className="flex justify-end mt-4">
        <span className="text-[11px] font-bold text-zinc-500">
          - {reviewerName} ({date})
        </span>
      </div>
    </motion.div>
  );
};

export default ReviewCard;