import React from "react";
import PriceChart from "./PriceChart";
import Insights from "./Insights";
import MetrixCard from "./MetrixCard";
import Explanation from "./Explanation";

const Main = () => {
  return (
    <div className="p-2 md:p-6 flex flex-col gap-6 w-full max-w-7xl mx-auto">
      {/* Top Row: Price Chart & AI Insights */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="basis-3/4 bg-[#131722] p-6 rounded-xl border border-[#1E222D]">
          <PriceChart />
        </div>
        <div className="basis-1/4 bg-[#131722] p-6 rounded-xl border border-[#1E222D]">
          <Insights />
        </div>
      </div>
      
      {/* Middle Row: Metrics */}
      <div className="w-full bg-[#131722] px-6 py-8 rounded-xl border border-[#1E222D]">
        <MetrixCard />
      </div>

      {/* Bottom Row: AI Analysis (Explanation) */}
      <div className="w-full bg-[#131722] p-6 rounded-xl border border-[#1E222D]">
        <Explanation />
      </div>
    </div>
  );
};

export default Main;
