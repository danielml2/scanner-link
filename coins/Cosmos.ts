import { Coin } from "./Coin";

export class Cosmos  implements Coin{
    name = 'Cosmos'

    isValid(address: string){
        return new Promise<boolean>((resolve) => resolve((address.length==45)&&(address.startsWith('cosmos'))));
    }

    getURL(address: string){
        return `https://atomscan.com/accounts/${address}`;

    }

}