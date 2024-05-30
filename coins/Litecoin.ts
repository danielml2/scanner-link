import { Coin } from "./Coin";

export class Litecoin implements Coin{
    name='Litecoin'

    isValid(address: string){
        let valid=false; 
        if((address.startsWith('M')||address.startsWith('L')||address.startsWith('3'))&&(address.length>=26&&address.length<=34)){
                valid=true;      
        }
        else{ 
             if(address.startsWith('ltc1')){
                     valid=true;   
             }
             else{
                valid=false;
               }
        }
        return new Promise<boolean>((resolve) => resolve(valid))
    }


    getURL(address: string){
        return `https://live.blockcypher.com/ltc/address/${address}`;

    }

}
