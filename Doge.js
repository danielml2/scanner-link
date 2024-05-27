class Doge extends Coin{
    name=new String('');

    constructor(){
        this.name='Doge';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.length==34)&&(address.startsWith('D'));
    }
    // isValid(address){
    //     var isValid=false;
    //     if(address.length==34){
    //         if(address.startsWith('D')){
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
        return `https://dogechain.info/address/${this.address}`;

    }

}