import { Coin } from "./Coin";

export class Litecoin implements Coin{
    name='Litecoin'

    isValid(address: string){
        var isValid=false; 
        if((address.startsWith('M')||address.startsWith('L')||address.startsWith('3'))&&(address.length>=26&&address.length<=34)){
                isValid=true;      
        }
        else{ 
             if((address.startsWith('ltc1'))&&(address.length>=30&&address.length<=34)){
                     isValid=true;   
             }
             else{
                isValid=false;
               }
        }
        return isValid
    }


    getURL(address: string){
        return `https://live.blockcypher.com/ltc/address/${address}`;

    }

}