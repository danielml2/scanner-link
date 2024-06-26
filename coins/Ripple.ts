import { Coin } from "./Coin";

export class Ripple implements Coin{
    name='Ripple'

    isValid(address: string){
        return new Promise<boolean>((resolve) => resolve((address.length>=25&&address.length<=35)&&(address.startsWith('r'))));
    }


    getURL(address: string){
        return `https://xrpscan.com/account/${address}`;

    }

}