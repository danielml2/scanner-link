class EVM extends Coin{
    name=new String('');

    constructor(){
        this.name='EVM';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length==42)&&((address.startsWith('0x'))||(address.startsWith('0X')));
    }

    // isValid(address){
    //     var isValid=false;
    //     if(address.length==42){
    //         if(address.startsWith('0x')){
    //             isValid= true;
    //             return isValid;
    //         }else{
    //            if(address.startsWith('0X')){   //evm isn't case sensative;
    //             isValid= true;
    //             return isValid;
    //            }
    //            else{
    //             isValid=false;
    //             return isValid;
    //            }
    //         }
    //     }
    //     else{
    //         isValid=false;
    //         return isValid;
    //     }
    // }


    getURL(address){
        return `https://debank.com/profile/${this.address}`;

    }

}