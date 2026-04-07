import React from "react";
import PriceChart from "./PriceChart";
import Insights from "./Insights";

const Main = () => {
  return (
    <div className="p-6">
      <div className="flex gap-3">
        <div className="basis-4/5 bg-[#131722] px-4 py-2 rounded-lg">
          <PriceChart />
        </div>
        <div className="basis-1/5 bg-[#131722] px-4 py-2 rounded-lg">
          <Insights />
        </div>
      </div>
    </div>
  );
};

export default Main;
