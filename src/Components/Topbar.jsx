import React from "react";
import { ChartCandlestick, User, ChevronDown, ChevronRight, X } from "lucide-react";

const TopBar = () => {
  return (
    <div className="h-16 bg-[#0B0E14] border-b border-[#1E222D] flex items-center px-6">
      <div className="flex justify-between items-center w-full">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-[#131722] p-1.5 rounded border border-[#1E222D]">
            <ChartCandlestick className="text-gray-400 w-5 h-5" />
          </div>
          <h1 className="text-lg font-semibold text-gray-100 whitespace-nowrap">
            AI Trading Assistant
          </h1>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-4">
          {/* BTC / USD Dropdown */}
          <div className="flex items-center gap-2 bg-[#171B26] hover:bg-[#1E2333] cursor-pointer text-gray-300 text-sm rounded-lg px-3 py-2 border border-transparent transition-colors">
            <User className="w-4 h-4 text-gray-400" />
            <span className="font-medium whitespace-nowrap">BTC / USD</span>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
          </div>

          {/* Sentiment Analysis Dropdown */}
          <div className="flex items-center gap-2 bg-[#171B26] hover:bg-[#1E2333] cursor-pointer text-gray-300 text-sm rounded-lg px-3 py-2 border border-transparent transition-colors">
            <span className="font-medium whitespace-nowrap">Sentiment Analysis</span>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
          </div>

          {/* Backtest Action Dropdown */}
          <div className="flex items-center bg-[#171B26] hover:bg-[#1E2333] cursor-pointer text-gray-300 text-sm rounded-lg border border-transparent transition-colors">
            <div className="flex items-center px-3 py-2">
              <span className="font-medium whitespace-nowrap">Backtest</span>
            </div>
            <div className="flex items-center gap-1 pr-2">
              <X className="w-4 h-4 text-gray-500 hover:text-gray-300 transition-colors" />
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Analyze Button */}
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg px-6 py-2 transition-colors shadow-lg shadow-blue-600/10">
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
