import React from "react";
import Topbar from "../Components/Topbar";
import SideBar from "../Components/Sidebar";
import Main from "../Components/Main";

const Dashboard = () => {
  return (
    <div className="h-screen bg-[#0B0E14] flex flex-col font-sans overflow-hidden">
      <Topbar />
      <div className="flex h-[calc(100vh-80px)] w-full">
        <div className="basis-1/6 bg-[#131722] border-r border-[#1E222D] overflow-y-auto shadow-[4px_0_24px_rgba(0,0,0,0.2)] z-10">
          <SideBar />
        </div>

        <div className="basis-5/6  overflow-y-auto">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
