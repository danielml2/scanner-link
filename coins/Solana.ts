import { Coin } from "./Coin";
import {PublicKey} from '@solana/web3.js';

export class Solana implements Coin{
    name='Solana';


    isValid(address: string){
            try {
                let pubkey = new PublicKey(address);
                let isValidBol =  PublicKey.isOnCurve(pubkey.toBuffer());
            } catch (error) {
                isValidBol=false;
            }
            return Promise<boolean>((resolve) => resolve(valid));
        }     

    

    getURL(address: string){
        return `https://solscan.io/account/${address}`;

    }

}
