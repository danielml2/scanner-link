class Cosmos  extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length==45){
            if(address.startsWith('cosmos')){
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
        return `https://atomscan.com/accounts/${this.address}`;

    }

}