class Ripple extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length>=25&&address.length<=35){
           if(address.startsWith('r')){
            isValid=true;;
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
        return `https://xrpscan.com/account/${this.address}`;

    }

}