import React from "react";
import { BsFillBookmarkCheckFill, BsNewspaper } from "react-icons/bs";
import {
  MdElectricBolt,
  MdOutlineCandlestickChart,
  MdOutlineAccountCircle,
} from "react-icons/md";

const navItems = [
  {
    icon: <BsFillBookmarkCheckFill />,
    title: "Watchlist",
    url: "",
  },
  {
    icon: <MdElectricBolt />,
    title: "Portfolio",
    url: "",
  },
  {
    icon: <MdOutlineCandlestickChart />,
    title: "Chart",
    url: "",
  },
  {
    icon: <BsNewspaper />,
    title: "News",
    url: "",
  },
  {
    icon: <MdOutlineAccountCircle />,
    title: "Account",
    url: "",
  },
];

function BottomNavigationBar() {
  return (
    <div className="bottom-nav-bar flex justify-evenly fixed bottom-0 left-0 right-0 bg-gray-50 font-semibold">
      {navItems.map((item, idx) => {
        return <div key={idx} className="group w-[50px] flex flex-col items-center gap-1 py-3 border-t-2 border-transparent hover:border-[#5b57c1] transition-all duration-300 cursor-pointer">
          <div className="text-lg transition-all duration-300 group-hover:text-[#5b57c1]">
            {item.icon}
          </div>
          <p className="text-[10px]">{item.title}</p>
        </div>;
      })}
    </div>
  );
}

export default BottomNavigationBar;
