import { Coin } from "./Coin";
import {PublicKey} from '@solana/web3.js';

export class Solana implements Coin{
    name='Solana';


    isValid(address){
            try {
                let pubkey = new PublicKey(address);
                let isValidBol =  PublicKey.isOnCurve(pubkey.toBuffer());
            } catch (error) {
                isValidBol=false;
            }
            return isValidBol;
        }     

    

    getURL(address: string){
        return `https://solscan.io/account/${address}`;

    }

}
