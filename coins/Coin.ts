import { Bitcoin } from "./Bitcoin"
import { Cardano } from "./Cardano"
import { Cosmos } from "./Cosmos"
import { Doge } from "./Doge"
import { EVM } from "./EVM"
import { Kaspa } from "./Kaspa"
import { Litecoin } from "./Litecoin"
import { Near } from "./Near"
import { Polkadot } from "./Polkadot"
import { Ripple } from "./Ripple"
import { Solana } from "./Solana"
import { Sui } from "./Sui"
import { TON } from "./TON"
import { Tron } from "./Tron"

export interface Coin {
    name: string,
    isValid : (address : string) => boolean
    getURL : (address : string) => string
}

export const COINS : Array<Coin> = [
    new Bitcoin(),
    new Cardano(),
    new Cosmos(),
    new Doge(),
    new EVM(),
    new Litecoin(),
    new Kaspa(),
    new Near(),
    new Polkadot(),
    new Ripple(),
    new Solana(),
    new Sui(),
    new TON(),
    new Tron()
]