"use client";

import { useState } from "react";
import { COINS } from "../../coins/Coin";

export default function Home() {
  const [address, setAddress] = useState("");
  const [displayCoins, setDisplayCoins] = useState<any[]>([]);


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
                if(event.key == "Enter")
                  scanAddress()  
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
            {displayCoins.map((displayCoin) => (
              <div className="py-10 text-xl" key={displayCoin.name}>{displayCoin.name}  <a href={displayCoin.url}><button className="btn btn-primary">Open Wallet in Scanner</button></a></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  function scanAddress() {
    let valid_addresses: any[] = [];

    COINS.forEach((coin) => {
      if (coin.isValid(address))
        valid_addresses.push({ name: coin.name, url: coin.getURL(address)});
    });
    setDisplayCoins(valid_addresses);
  }
}
