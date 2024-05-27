class Kaspa extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        
            if(address.startsWith('kaspa:')){
                isValid= true;
                return isValid;
            }
            else{
                isValid=false;
                return isValid;
               
            }
       
    }

    stringToPrint(){
        return `https://explorer.kaspa.org/addresses/${this.address}`;

    }

}