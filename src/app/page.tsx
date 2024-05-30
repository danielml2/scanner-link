"use client";

import { useEffect, useState } from "react";
import { COINS } from "../../coins/Coin";

export default function Home() {
  const [address, setAddress] = useState("");
  const [displayCoins, setDisplayCoins] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("Sui")

  useEffect(() => {
    let coin_names: string[] = COINS.map((coin) => coin.name);

    let index = 0;
    console.log(coin_names)
    let text_loop = setInterval(() => {
      setText(coin_names[index])
      index += 1;
      index %= coin_names.length;
    }, 2250)
    return () => {
      clearInterval(text_loop)
    }
  }, [])

  return (
    <div className=" min-h-screen bg-gradient-to-tr from-orange-200 to-sky-200 ">
      <div className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="max-w-md">
        <h2 className="text-5xl font-bold pb-2">Scanner Link</h2>
        <div className="text-md italic pb-5">Your browser for the crytpo network</div>
        <div className="text-2xl pt-2 pb-4">Find any <span key={text} className="bg-gradient-to-br from-orange-500 via-slate-400 to-sky-400 bg-clip-text text-transparent font-bold fadeAndDropClass">{text}</span> wallet address</div>
          <div className="join py-3">
            <input
              type="text"
              className="input w-full max-w-xs join-item"
              placeholder="Crypto address"
              onChange={(event) => {
                setAddress(event.currentTarget.value);
              }}
              onKeyDown={(event) => {
                if (event.key == "Enter") scanAddress();
              }}
            ></input>
            <button
              className="btn bg-orange-300 join-item rounded-r-full"
              onClick={() => scanAddress()}
            >
              🔎 Scan
            </button>
          </div>
          <div className="">
            {showResults && displayCoins.length == 0 && (
              <div className="py-10 text-xl">No wallets found</div>
            )}
            {showResults && displayCoins.length > 0 && (
              <ul className="">
                {displayCoins.map((coin) => generateElementForCoin(coin))}
              </ul>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );

  async function scanAddress() {
    let valid_addresses: any[] = [];

    let coinPromises = COINS.map(
      (coin) =>
        new Promise<any>(async (resolve) => {
          let valid = await coin.isValid(address);
          resolve(
            valid ? { name: coin.name, url: coin.getURL(address) } : null
          );
        })
    );

    let results = await Promise.allSettled(coinPromises);
    results
      .filter((result) => result != null && result.status == "fulfilled")
      .map((result) => result as PromiseFulfilledResult<any>)
      .forEach((result) => {
        if (result.value != null) valid_addresses.push(result.value);
      });
    setDisplayCoins(valid_addresses);
    setShowResults(true);
  }

  function generateElementForCoin(displayCoin: any) {
    return (
      <div>
        <li className="py-3 isolate flex-0 max-w-96 min-w-96"></li>
        <li className="py-3 shadow-md  bg-sky-200 rounded-xl">
          <div className="flex items-center space-x-4 rtl:space-x-reverse flex-grow-0">
            <div className="flex-shrink-0 pl-2">
              <img
                className="w-14 h-14 rounded-full"
                src={`${displayCoin.name}.png`}
                alt="Neil image"
              ></img>
            </div>
            <div className="flex-1 min-w-0 gap-15">
              <p className="text-md dark:text-white font-bold">
                {displayCoin.name}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white px-2">
              <a href={displayCoin.url}>
                <button className="btn bg-sky-400 text-gray-700 hover:bg-sky-300">
                  Show Wallet
                </button>
              </a>
            </div>
          </div>
        </li>
      </div>
    );
  }
}
