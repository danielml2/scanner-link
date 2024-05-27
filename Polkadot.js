class Polkadot extends Coin{
    name=new String('');

    constructor(){
        this.name='Polkadot';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length==48);
    }


    // isValid(address){
    //     var isValid=false;
    //     if(address.length==48){
    //        isValid=true;
    //        return isValid;
    //     }
    //     else{
    //         isValid=false;
    //         return isValid;
    //     }
    // }


    getURL(address){
        return `https://polkadot.subscan.io/account/${this.address}`;

    }

}