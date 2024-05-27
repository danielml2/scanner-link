class TON extends Coin{
    name=new String('');

    constructor(){
        this.name='TON';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length==48)&&(address.startsWith('E')||address.startsWith('U'));
    }

    // isValid(address){
    //     var isValid=false;
    //     if(address.length==48){
    //         if(address.startsWith('E')||address.startsWith('U')){
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
        return `https://tonscan.org/address/${this.address}`;

    }

}