class Cardano  extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false; 
        if(address.startsWith('Ae2')||address.startsWith('DdzFF')){
            if(address.length>=50&&address.length<=58){
                isValid=true;
                return isValid;
           }
           else{
            isValid=false;
            return isValid;
           }
        }
        else{ 

             if(address.startsWith('addr')||address.startsWith('stake')){
                if(address.length>=50&&address.length<=59){
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
        return `https://cardanoscan.io/address/${this.address}`;

    }

}