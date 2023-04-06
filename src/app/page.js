"use client";

import BottomNavigationBar from "@/component/bottomNavigationBar";
import Card from "@/component/card";
import Header from "@/component/header";
import { useEffect, useState } from "react";
import axios from "axios";

const stockData = [
  {
    name: "federalbnk",
    qty: 100,
    current: 133.7,
    percentage: "(0.00) 0.00%",
  },
  {
    name: "Kpittech",
    qty: 350,
    current: 709.65,
    percentage: "(-0.70) 0.11%",
  },
  {
    name: "wipro",
    qty: 300,
    current: 386.69,
    percentage: "(-3.90) 1.34%",
  },
  {
    name: "federalbnk",
    qty: 100,
    current: 133.7,
    percentage: "(0.00) 0.00%",
  },
  {
    name: "Kpittech",
    qty: 350,
    current: 709.65,
    percentage: "(-0.70) 0.11%",
  },
  {
    name: "wipro",
    qty: 300,
    current: 386.69,
    percentage: "(-3.90) 1.34%",
  },
  {
    name: "wipro",
    qty: 300,
    current: 386.69,
    percentage: "(-3.90) 1.34%",
  },
  {
    name: "federalbnk",
    qty: 100,
    current: 133.7,
    percentage: "(0.00) 0.00%",
  },
  {
    name: "Kpittech",
    qty: 350,
    current: 709.65,
    percentage: "(-0.70) 0.11%",
  },
  {
    name: "wipro",
    qty: 300,
    current: 386.69,
    percentage: "(-3.90) 1.34%",
  },
  {
    name: "wipro",
    qty: 300,
    current: 386.69,
    percentage: "(-3.90) 1.34%",
  },
  {
    name: "federalbnk",
    qty: 100,
    current: 133.7,
    percentage: "(0.00) 0.00%",
  },
  {
    name: "Kpittech",
    qty: 350,
    current: 709.65,
    percentage: "(-0.70) 0.11%",
  },
  {
    name: "wipro",
    qty: 300,
    current: 386.69,
    percentage: "(-3.90) 1.34%",
  },
];

export default function Home() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchStocks();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchStocks = async () => {
    try {
      const res = await axios.get(
        "https://alpha-vantage.p.rapidapi.com/query",
        {
          params: {
            function: "GLOBAL_QUOTE",
            symbol: "NIFTY50",
          },
          headers: {
            "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
          },
        }
      );

      const data = res.data["Global Quote"];
      const newStocks = [...stocks];
      const index = newStocks.findIndex(
        (stock) => stock.symbol === data["01. symbol"]
      );

      if (index === -1) {
        newStocks.push({
          symbol: data["01. symbol"],
          price: data["05. price"],
        });
      } else {
        newStocks[index].price = data["05. price"];
      }

      setStocks(newStocks);
      // console.log(stocks);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <div className="">
        <Header />
        <div className="mx-3 my-2">
          <div className="sticky top-[70px] flex justify-between items-center bg-black px-3 py-5 rounded-lg shadow-lg shadow-slate-400">
            <div className="">
              <h3 className="text-gray-400 text-xs">NIFTY 50</h3>
              <div className="flex items-center gap-2">
                <h2 className="text-white font-semibold text-md">18,245.99</h2>
                <p className="text-xs text-green-600 font-medium">+0.89%</p>
              </div>
            </div>
            <div className="">
              <h3 className="text-gray-400 text-xs">SENSEX</h3>
              <div className="flex items-center gap-2">
                <h2 className="text-white font-semibold text-md">18,245.99</h2>
                <p className="text-xs text-red-600 font-medium">+0.84%</p>
              </div>
            </div>
          </div>
          <h2 className="text-sm font-semibold my-3 text-gray-500">NIFTY50 STOCKS</h2>
          {
            stockData.map((stock,idx)=>{
              return <Card key={idx} stock={stock} />
            })
          }
        </div>
        <BottomNavigationBar />
      </div>
    </>
  );
}
