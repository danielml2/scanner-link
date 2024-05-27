class Tron extends Coin{
    name=new String('');

    constructor(){
        this.name='Tron';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length==34)&&(address.startsWith('T'));
    }

    // isValid(address){
    //     var isValid=false;
    //     if(address.length==34){
    //         if(address.startsWith('T')){
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
        return `https://tronscan.org/#/address/${this.address}`;

    }

}