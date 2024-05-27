import { Coin } from "./Coin";

export class TON implements Coin{
    name='TON'

    isValid(address: string){
        return (address.length==48)&&(address.startsWith('E')||address.startsWith('U'));
    }

    getURL(address: string){
        return `https://tonscan.org/address/${address}`;

    }

}