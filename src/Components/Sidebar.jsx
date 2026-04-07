import React from "react";
import { LayoutDashboard, LineChart, Brain } from "lucide-react";

const SideBar = () => {
  return (
    <div className="p-6 text-gray-300 flex flex-col justify-between h-full">
      {/* Top Section */}
      <div>
        <nav className="flex flex-col gap-4">
          {/* Dashboard */}
          <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-600 cursor-pointer">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>

          {/* Markets */}
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
            <LineChart size={18} />
            <span>Markets</span>
            <span className="ml-auto text-xs text-gray-400">Soon</span>
          </div>

          {/* Insights */}
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
            <Brain size={18} />
            <span>Insights</span>
            <span className="ml-auto text-xs text-gray-400">Soon</span>
          </div>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="text-sm text-gray-400">Powered by AI ⚡</div>
    </div>
  );
};

export default SideBar;
