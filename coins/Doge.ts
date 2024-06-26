import { Coin } from "./Coin";

export class Doge implements Coin {
    
    name='Doge';
    
    isValid(address: string){
        return new Promise<boolean>((resolve) => resolve((address.length==34)&&(address.startsWith('D'))));
    }

    getURL(address: string){
        return `https://dogechain.info/address/${address}`;

    }

}