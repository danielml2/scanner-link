import { Coin } from "./Coin";

export class Sui implements Coin{
    name='Sui';

    isValid(address: string){
        return new Promise<boolean>((resolve) => resolve((address.length==66)&&(address.startsWith('0x'))));
    }


    getURL(address: string){
        return `https://suiscan.xyz/mainnet/account/${address}/tx-blocks`;

    }

}