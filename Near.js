class Near extends Coin{
    address=new String('');

    constructor(address){
        this.address=address;
    }

    isValid(address){
        var isValid=false;
        if(address.length==64){
           isValid= true;
           return isValid;
        }
        else{
           if(address.endWith('.near')||address.endWith('.tg')||address.endWith('.Sweat')||address.endWith('.kaiching')){
            isValid= true;
            return isValid;
           }
           else{
            isValid= false;
            return isValid;
           }
        }
    }

    stringToPrint(){
        return `https://nearblocks.io/address/${this.address}`;

    }

}