import { Coin } from "./Coin";

export class Tron implements Coin{
    name = 'Tron'

    isValid(address: string){
        return new Promise<boolean>((resolve) => resolve((address.length==34)&&(address.startsWith('T'))));
    }


    getURL(address: string){
        return `https://tronscan.org/#/address/${address}`;

    }

}