 import {PublicKey} from '@solana/web3.js';
class Solana extends Coin{
    name=new String('');

    constructor(){
        this.name='Solana';
    }
    getName(){
        return this.name;
    }

    isValid(address){
            try {
                let pubkey = new PublicKey(address);
                let isValidBol =  PublicKey.isOnCurve(pubkey.toBuffer());
            } catch (error) {
                isValidBol=false;
            }
            return isValidBol;
        }     


    // isValid(address){
    //     var isValid=false;
    //     if(address.length>=32&&address.length<=44){
    //        isValid=true;
    //        return isValid;
    //     }
    //     else{
    //         isValid=false;
    //         return isValid;
    //     }
    // }


    getURL(address){
        return `https://solscan.io/account/${this.address}`;

    }

}
