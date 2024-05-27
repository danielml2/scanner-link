import { Coin } from "./Coin";

export class Kaspa implements Coin{
    name='Kaspa';

    isValid(address: string){
        return (address.startsWith('kaspa:'));
    }

    getURL(address: string){
        return `https://explorer.kaspa.org/addresses/${address}`;

    }

}