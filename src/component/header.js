import React from "react";
import {
    AiOutlinePieChart,
    AiOutlinePlus,
    AiOutlineDown,
  } from "react-icons/ai";

function Header() {
  return (
    <header className="header flex justify-between items-center sticky top-0 left-0 right-0 px-3 py-2 bg-white">
      <div>
        <div className="flex items-center text-xs gap-3">
          <h1 className="font-bold text-lg">Watchlist</h1>
          <AiOutlineDown className="text-gray-400" />
        </div>
        <p className="text-gray-400 text-xs font-medium">12 stocks</p>
      </div>
      <div className="flex gap-3 text-gray-800 text-xl">
        <AiOutlinePieChart className="cursor-pointer transition-all duration-300 hover:text-[#5b57c1]" />
        <AiOutlinePlus className="cursor-pointer  transition-all duration-300" />
      </div>
    </header>
  );
}

export default Header;
