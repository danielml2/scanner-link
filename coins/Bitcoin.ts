
import { Coin } from "./Coin";


export class Bitcoin implements Coin {
    name = 'Bitcoin';


    isValid(address: string){
        var isValid=false;
        if((address.length==62)&&(address.startsWith('bc1p'))){
                isValid= true;
        }
        else{
            if((address.length==42)&&(address.startsWith('bc1q'))){
                    isValid= true;
            }
            else{
                if((address.length==34)&&(address.startsWith('1')||address.startsWith('3'))){
                        isValid= true;
                }
                else{
                    isValid=false;
                }
            }
        }
        return isValid;

    }


    getURL(address: string){
        return `https://www.blockchain.com/explorer/addresses/btc/${address}`;
    }

}