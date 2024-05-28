import { Coin } from "./Coin";


export class Cardano implements Coin{
    name='Cardano';

    isValid(address: string){
        var isValid=false; 
        if(address.startsWith('Ae2')||address.startsWith('DdzFF')){
                isValid=true;
        }
        else{ 

             if(address.startsWith('addr')||address.startsWith('stake')){
                    isValid=true;
             }
             else{
                isValid=false;
               }
        }
        return isValid;
    }
    
    getURL(address: string){
        return `https://cardanoscan.io/address/${address}`;

    }

}
