"use client";

import { useState } from "react";
import { COINS } from "../../coins/Coin";

export default function Home() {
  const [address, setAddress] = useState("");
  const [displayCoins, setDisplayCoins] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold">Scanner Link</h2>
          <p className="py-3">Your browser for the crypto network</p>
          <div className="join">
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
              Scan
            </button>
          </div>
          <div>
            {showResults && displayCoins.length == 0 && (
              <div className="py-10 text-xl">No wallets found</div>
            )}
            {showResults && displayCoins.length > 0 && (
              <ul className="max-w-md ">
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
        <li className="py-3"></li>
        <li className="py-3 shadow-md  bg-sky-200 rounded-xl">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
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
