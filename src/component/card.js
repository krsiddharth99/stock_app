import React from "react";

function Card(props) {
  const { name, qty, current, percentage } = props["stock"];
  return (
    <div className="flex justify-between items-center px-3 py-3 last:border-b-0 border-b-[1px] border-gray-200 cursor-pointer rounded-md hover:bg-gray-100 transition-all duration-300">
      <div className="flex gap-4">
        <div className="rounded-full bg-gray-200 h-[30px] w-[30px] flex justify-center items-center">
          <p>{name.charAt(0)}</p>
        </div>
        <div>
          <p className="text-sm font-bold text-black uppercase">{name}</p>
          <p className="text-xs font-medium text-gray-500 uppercase">
            qty : {qty}
          </p>
        </div>
      </div>
      <div className="text-end">
        <p className="text-sm font-bold text-black">{current}</p>
        <p className="text-xs font-medium text-red-400">{percentage}</p>
      </div>
    </div>
  );
}

export default Card;
