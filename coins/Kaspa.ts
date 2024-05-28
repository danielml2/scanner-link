import { Coin } from "./Coin";

export class Kaspa implements Coin{
    name='Kaspa';

    isValid(address: string){
        return new Promise<boolean>((resolve) => resolve((address.startsWith('kaspa:'))));
    }

    getURL(address: string){
        return `https://explorer.kaspa.org/addresses/${address}`;

    }

}