class Litecoin extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false; 
        if(address.startsWith('M')||address.startsWith('L')||address.startsWith('3')){
            if(address.length>=26&&address.length<=34){
                isValid=true;
                return isValid;
           }
           else{
            isValid=false;
            return isValid;
           }
        }
        else{ 

             if(address.startsWith('ltc1')){
                if(address.length>=30&&address.length<=34){
                     isValid=true;
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
    }


    stringToPrint(){
        return `https://live.blockcypher.com/ltc/address/${this.address}`;

    }

}