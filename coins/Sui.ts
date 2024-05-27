import { Coin } from "./Coin";

export class Sui implements Coin{
    name='Sui';

    isValid(address: string){
        return (address.length==66)&&(address.startsWith('0x'));
    }


    getURL(address: string){
        return `https://suiscan.xyz/mainnet/account/${address}/tx-blocks`;

    }

}