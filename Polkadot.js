class Polkadot extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length==48){
           isValid=true;
           return isValid;
        }
        else{
            isValid=false;
            return isValid;
        }
    }


    stringToPrint(){
        return `https://polkadot.subscan.io/account/${this.address}`;

    }

}