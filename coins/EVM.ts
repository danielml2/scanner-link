import { Coin } from "./Coin";

export class EVM implements Coin{
    name= 'EVM/Etherum';


    isValid(address: string){
        return (address.length==42)&&((address.startsWith('0x'))||(address.startsWith('0X')));
    }



    getURL(address: string){
        return `https://debank.com/profile/${address}`;

    }

}