'use client'

import { useState } from "react";
import { getBuiltGraphSDK } from "../../.graphclient"
import DateLineChart from "@/components/graphs/linechart/dateLineChart";
import RegLineChart from "@/components/graphs/linechart/regLineChart";
import BarChart from "@/components/graphs/barChart";


export default function Home() {


  
  const {GetDailyStats, GetUserActivity, GetMarketVolatility} = getBuiltGraphSDK()

  const [stats, setStats] = useState<{ id: string; value: string; }[]>();
  const [type, setType] = useState<number>(0);

  function Chart() {
    
    switch (type) {
      case 0:
        return  <div className="w-[960px] h-[500px] flex relative"> </div>;
      case 1:
        return stats ? <DateLineChart data={stats} /> : null;
      case 2:
        return stats ? <BarChart data={stats} /> : null;
      case 3:
        return stats ? <RegLineChart data={stats} /> : null;
      default:
        return null;
    }
  }

  async function getDaily(){
    const a = await GetDailyStats()

    const modifiedStats = a.dailyStats.map(stat => ({
      id: stat.id,
      value: stat.totalTransactions 
    }));
    setStats(modifiedStats)
    setType(1)
  }

  async function getUser(){
    const a = await GetUserActivity()

    const modifiedStats = a.userActivities.map(stat => ({
      id: stat.id,
      value: stat.numberOfSwaps
    }));
    setStats(modifiedStats)
    setType(2)
  }

  async function getVolatility(){
    const a = await GetMarketVolatility()

    const modifiedStats = a.marketVolatilities.map(stat => ({
      id: stat.id,
      value: stat.totalVolatility
    }));
    setStats(modifiedStats)
    setType(3)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left w-full flex relative content-evenly">

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={()=>{getDaily()}}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Daily Stats{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Aggregates daily market activities, including total volume, number of transactions facilitating trend analysis over time.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={()=>{getUser()}}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Users Activity{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Profiles user engagement with the protocol, tracking metrics such as the number of swaps and total trading volume.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={()=>{getVolatility()}}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Market Volatility{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          Analyzes the market's reaction to trades, capturing the volatility spurred by swap activities.
          </p>

        </div>
      </div>
      </div>

     
    

 
      <div className="m-10 fixed left-0  flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Chart/>
      </div>
    
    </main>
  );
}
