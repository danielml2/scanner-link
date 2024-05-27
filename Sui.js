class Sui extends Coin{
    name=new String('');

    constructor(){
        this.name='Sui';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length==66)&&(address.startsWith('0x'));
    }

    // isValid(address){
    //     var isValid=false;
    //     if(address.length==66){
    //         if(address.startsWith('0x')){
    //             isValid= true;
    //             return isValid;
    //         }
    //         else{
    //             isValid=false;
    //             return isValid;
               
    //         }
    //     }
    //     else{
    //         isValid=false;
    //         return isValid;
    //     }
    // }

    getURL(address){
        return `https://suiscan.xyz/mainnet/account/${this.address}/tx-blocks`;

    }

}