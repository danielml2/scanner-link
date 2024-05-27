class Sui extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length==66){
            if(address.startsWith('0x')){
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
        return `https://suiscan.xyz/mainnet/account/${this.address}/tx-blocks`;

    }

}