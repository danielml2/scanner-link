import { Coin } from "./Coin";

export class Solana implements Coin{
    name='Solana';


    isValid(address: string){
        return (address.length>=32&&address.length<=44);
    }

    getURL(address: string){
        return `https://solscan.io/account/${address}`;

    }

}