class Solana extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length>=32&&address.length<=44){
           isValid=true;
           return isValid;
        }
        else{
            isValid=false;
            return isValid;
        }
    }


    stringToPrint(){
        return `https://solscan.io/account/${this.address}`;

    }

}