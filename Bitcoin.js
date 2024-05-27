class Bitcoin extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length==62){
            if(address.startsWith('bc1p')){
                isValid= true;
                return isValid;
            }else{
                isValid=false;
                return isValid;
            }

        }else{
            if(address.length==42){
                if(address.startsWith('bc1q')){
                    isValid= true;
                    return isValid;
                }else{
                    isValid=false;
                    return isValid;
                }

            }
            else{
                if(address.length==34){
                    if(address.startsWith('1')||address.startsWith('3')){
                        isValid= true;
                        return isValid;
                    }else{
                        isValid=false;
                        return isValid;
                    }

                }
                else{
                    isValid=false;
                    return isValid;
                }
            }
        }

    }


    stringToPrint(){
        return `https://www.blockchain.com/explorer/addresses/btc/${this.address}`;

    }

}