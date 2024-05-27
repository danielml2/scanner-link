import { Coin } from "./Coin";

export class Near implements Coin{
    name= 'Near'


    isValid(address: string){
        return (address.length==64)||(address.endsWith('.near')||address.endsWith('.tg')||address.endsWith('.Sweat')||address.endsWith('.kaiching'));
    }

    getURL(address: string){
        return `https://nearblocks.io/address/${address}`;

    }

}