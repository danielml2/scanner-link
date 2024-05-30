import { Coin } from "./Coin";
import {PublicKey} from '@solana/web3.js';

export class Solana implements Coin{
    name='Solana';


    isValid(address: string){
            let valid=false;
        try {
                let pubkey = new PublicKey(address);
                valid =  PublicKey.isOnCurve(pubkey.toBuffer());
            } catch (error) {
                const valid=false;
            }
            return new Promise<boolean>((resolve) => resolve(valid));
        }     

    

    getURL(address: string){
        return `https://solscan.io/account/${address}`;

    }

}
