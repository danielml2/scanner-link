import { Coin } from "./Coin";

export class Solana implements Coin{
    name='Solana';


    isValid(address: string){
       return new Promise<boolean>((resolve) => resolve(((address.length>=32&&address.length<=44)&&(!address.startsWith('0x')||!address.startsWith('0X')))));
    }
    

    getURL(address: string){
        return `https://solscan.io/account/${address}`;

    }

}
