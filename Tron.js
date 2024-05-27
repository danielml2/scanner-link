class Tron extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length==34){
            if(address.startsWith('T')){
                isValid= true;
                return isValid;
            }
            else{
                isValid=false;
                return isValid;
               
            }
        }
        else{
            isValid=false;
            return isValid;
        }
    }


    stringToPrint(){
        return `https://tronscan.org/#/address/${this.address}`;

    }

}