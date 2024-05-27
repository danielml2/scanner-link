class Near extends Coin{
    name=new String('');

    constructor(){
        this.name='Near';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length==64)||(address.endWith('.near')||address.endWith('.tg')||address.endWith('.Sweat')||address.endWith('.kaiching'));
    }

    // isValid(address){
    //     var isValid=false;
    //     if(address.length==64){
    //        isValid= true;
    //        return isValid;
    //     }
    //     else{
    //        if(address.endWith('.near')||address.endWith('.tg')||address.endWith('.Sweat')||address.endWith('.kaiching')){
    //         isValid= true;
    //         return isValid;
    //        }
    //        else{
    //         isValid= false;
    //         return isValid;
    //        }
    //     }
    // }

    getURL(address){
        return `https://nearblocks.io/address/${this.address}`;

    }

}