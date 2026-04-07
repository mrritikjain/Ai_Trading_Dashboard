import React from "react";
import { ChartCandlestick } from "lucide-react";
const TopBar = () => {
  return (
    <div className="h-20 bg-[#0B0E14] border-b border-[#1E222D] flex items-center shadow-md">
      <div className="w-full mx-auto px-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-100 tracking-wide flex items-center gap-3">
            <div className="bg-indigo-600/20 p-2 rounded-full border border-indigo-500/30">
              <ChartCandlestick className="text-indigo-400 w-5 h-5" />
            </div>
            AI Trading Assistant
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-3">
            <select
              name="pair"
              id="pair"
              className="bg-[#131722] border border-[#2B3139] text-gray-300 text-sm rounded-lg px-4 py-2 w-40 outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="" className="bg-[#131722] text-gray-300">
                Select Pair
              </option>
              <option value="BTC/USD" className="bg-[#131722] text-gray-300">
                BTC/USD
              </option>
              <option value="EUR/USD" className="bg-[#131722] text-gray-300">
                EUR/USD
              </option>
              <option value="GBP/USD" className="bg-[#131722] text-gray-300">
                GBP/USD
              </option>
            </select>
            <select
              name="timeframe"
              id="timeframe"
              className="bg-[#131722] border border-[#2B3139] text-gray-300 text-sm rounded-lg px-4 py-2 w-48 outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="" className="bg-[#131722] text-gray-300">
                Sentiment Analysis
              </option>
              <option value="1h" className="bg-[#131722] text-gray-300">
                1 Hour
              </option>
              <option value="4h" className="bg-[#131722] text-gray-300">
                4 Hours
              </option>
              <option value="1d" className="bg-[#131722] text-gray-300">
                1 Day
              </option>
            </select>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-medium rounded-lg px-6 py-2 shadow-lg shadow-indigo-600/20 transition-all">
              Analyze
            </button>
          </div>

          <div className="h-8 w-px bg-[#2B3139] mx-2"></div>

          <div className="flex gap-6">
            <div className="flex flex-col">
              <span className="text-[#848E9C] text-xs font-medium mb-1">
                BTC Price:
              </span>
              <span className="text-white text-sm font-semibold tracking-wide">
                $46,550
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#848E9C] text-xs font-medium mb-1">
                24h Change
              </span>
              <span className="text-[#0ECB81] text-sm font-semibold tracking-wide">
                +3.2%
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#848E9C] text-xs font-medium mb-1">
                24h Path
              </span>
              <span className="text-[#F6465D] text-sm font-semibold tracking-wide">
                -1.5%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
