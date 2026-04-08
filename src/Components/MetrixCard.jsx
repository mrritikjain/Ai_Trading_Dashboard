import React from "react";

const MetrixCard = () => {
  return (
    <div className="flex w-full items-center justify-around py-2">
      {/* Price */}
      <div className="flex flex-col gap-2 items-start w-1/3 pl-8">
        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
          <span className="text-[10px]">▼</span>
          <span>Price</span>
        </div>
        <div className="text-white text-3xl font-bold tracking-wide">
          $46,550
        </div>
      </div>

      {/* 24h Change */}
      <div className="flex flex-col gap-2 items-start w-1/3 border-l border-[#2B3139] pl-16">
        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
          <span className="text-[10px]">▼</span>
          <span>24h Change</span>
        </div>
        <div className="text-[#0ECB81] text-3xl font-bold tracking-wide">
          +3.2%
        </div>
      </div>

      {/* Volume */}
      <div className="flex flex-col gap-2 items-start w-1/3 border-l border-[#2B3139] pl-16">
        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
          <span className="text-[10px]">▼</span>
          <span>Volume</span>
        </div>
        <div className="text-white text-3xl font-bold tracking-wide">
          $16.5B
        </div>
      </div>
    </div>
  );
};

export default MetrixCard;
