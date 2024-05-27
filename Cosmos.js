class Cosmos  extends Coin{
    name=new String('');

    constructor(){
        this.name='Cosmos';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length==45)&&(address.startsWith('cosmos'));
    }

    // isValid(address){
    //     var isValid=false;
    //     if(address.length==45){
    //         if(address.startsWith('cosmos')){
    //             isValid= true;
    //             return isValid;
    //         }
    //         else{
    //             isValid=false;
    //             return isValid;
               
    //         }
    //     }
    //     else{
    //         isValid=false;
    //         return isValid;
    //     }
    // }

    getURL(address){
        return `https://atomscan.com/accounts/${this.address}`;

    }

}