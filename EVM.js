class EVM extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length==42){
            if(address.startsWith('0x')){
                isValid= true;
                return isValid;
            }else{
               if(address.startsWith('0X')){   //evm isn't case sensative;
                isValid= true;
                return isValid;
               }
               else{
                isValid=false;
                return isValid;
               }
            }
        }
        else{
            isValid=false;
            return isValid;
        }
    }


    stringToPrint(){
        return `https://debank.com/profile/${this.address}`;

    }

}