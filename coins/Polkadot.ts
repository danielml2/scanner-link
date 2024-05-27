import { Coin } from "./Coin";

export class Polkadot implements Coin{
    name='Polkadot';


    isValid(address: string){
        return (address.length==48);
    }


    getURL(address: string){
        return `https://polkadot.subscan.io/account/${address}`;

    }

}