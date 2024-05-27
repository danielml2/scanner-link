class TON extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length==48){
            if(address.startsWith('E')||address.startsWith('U')){
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
        return `https://tonscan.org/address/${this.address}`;

    }

}