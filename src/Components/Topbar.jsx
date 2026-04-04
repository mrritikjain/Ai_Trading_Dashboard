import React from "react";

const TopBar = () => {
  return (
    <div className="h-16 bg-[#071c42]/80 backdrop-blur-md border border-white/20 shadow-lg flex items-center">
      <div className="w-full mx-auto px-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold font-sans">AI TRADING ASSITENT</h2>
        </div>
        <div className="flex gap-4">
          <select
            name="pair"
            id="pair"
            className="bg-transparent border border-white/20 rounded-md px-2 py-1 w-48"
          >
            <option value="" className="text-black">
              Select Pair
            </option>
            <option value="" className="text-black">
              EUR/USD
            </option>
            <option value="" className="text-black">
              GBP/USD
            </option>
            <option value="" className="text-black">
              USD/JPY
            </option>
          </select>
          <select
            name="timeframe"
            id="timeframe"
            className="bg-transparent border border-white/20 rounded-md px-2 py-1 w-48"
          >
            <option value="" className="text-black">
              Select Timeframe
            </option>
            <option value="1h" className="text-black">
              1h
            </option>
            <option value="4h" className="text-black">
              4h
            </option>
            <option value="1d" className="text-black">
              1d
            </option>
          </select>
          <button className="bg-[#071c42] border border-white/20 rounded-md px-6 py-1">
            Analyze
          </button>
          <div>
            <p>BTC Price</p>
            <p className="text-green-500 font-bold text-center">65000</p>
          </div>
          <div>
            <p>24 hour Change</p>
            <p className="text-green-500 font-bold text-center">+2.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
