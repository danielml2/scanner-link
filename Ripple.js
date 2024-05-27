class Ripple extends Coin{
    name=new String('');

    constructor(){
        this.name='Ripple';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length>=25&&address.length<=35)&&(address.startsWith('r'));;
    }

    // isValid(address){
    //     var isValid=false;
    //     if(address.length>=25&&address.length<=35){
    //        if(address.startsWith('r')){
    //         isValid=true;;
    //         return isValid;
    //        }
    //        else{
    //         isValid=false;
    //         return isValid;
    //        }
    //     }
    //     else{
    //         isValid=false;
    //         return isValid;
    //     }
    // }


    getURL(address){
        return `https://xrpscan.com/account/${this.address}`;

    }

}