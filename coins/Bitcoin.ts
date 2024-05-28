
import { Coin } from "./Coin";


export class Bitcoin implements Coin {
    name = 'Bitcoin';


    isValid(address: string){
        let valid=false;
        if((address.length==62)&&(address.startsWith('bc1p'))){
                valid= true;
        }
        else{
            if((address.length==42)&&(address.startsWith('bc1q'))){
                    valid= true;
            }
            else{
                if((address.length==34)&&(address.startsWith('1')||address.startsWith('3'))){
                        valid= true;
                }
                else{
                    valid=false;
                }
            }
        }
        return new Promise<boolean>((resolve) => resolve(valid));

    }


    getURL(address: string){
        return `https://www.blockchain.com/explorer/addresses/btc/${address}`;
    }

}