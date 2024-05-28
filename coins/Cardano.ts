import { Coin } from "./Coin";


export class Cardano implements Coin{
    name='Cardano';

    isValid(address: string){
        let valid=false; 
        if(address.startsWith('Ae2')||address.startsWith('DdzFF')){
                valid=true;
        }
        else{ 

             if(address.startsWith('addr')||address.startsWith('stake')){
                    valid=true;
             }
             else{
                valid=false;
               }
        }
        return new Promise<boolean>((resolve) => resolve(valid));
    }
    
    getURL(address: string){
        return `https://cardanoscan.io/address/${address}`;

    }

}
