import React from "react";
import { Medal, Lightbulb, TriangleAlert } from "lucide-react";

const Insights = () => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-bold text-gray-100 mb-4">* AI Insights</h2>
      
      <div className="flex flex-col gap-4 flex-1">
        {/* Sentiment Pill */}
        <div className="flex items-center justify-between bg-[#CFF1DA] rounded-xl p-4 w-full shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-emerald-600 text-xs font-semibold tracking-wide">Sentiment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#2E7D32]"></span>
              <h2 className="text-[#1A3B21] text-lg font-bold">Bullish</h2>
            </div>
          </div>
          <div className="text-emerald-600 opacity-80">
            <Medal size={32} strokeWidth={2} />
          </div>
        </div>

        {/* Suggestion Pill */}
        <div className="flex items-center justify-between bg-[#D1DCFE] rounded-xl p-4 w-full shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="text-blue-600 text-xs font-semibold tracking-wide">Suggestion</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-700"></span>
              <h2 className="text-[#1A235D] text-lg font-bold">Buy</h2>
            </div>
          </div>
          <div className="text-blue-600 opacity-80">
            <Lightbulb size={32} strokeWidth={2} />
          </div>
        </div>

        {/* Risk Level Pill */}
        <div className="flex items-center justify-between bg-[#FCE1CA] rounded-xl p-4 w-full shadow-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              <span className="text-orange-600 text-xs font-semibold tracking-wide">Risk Level</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-600"></span>
              <h2 className="text-[#6B3205] text-lg font-bold">Medium</h2>
            </div>
          </div>
          <div className="text-orange-500 opacity-80">
            <TriangleAlert size={32} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
