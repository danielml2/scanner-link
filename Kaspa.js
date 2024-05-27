class Kaspa extends Coin{
    name=new String('');

    constructor(){
        this.name='Kaspa';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        return (address.startsWith('kaspa:'));
    }

    // isValid(address){
    //     var isValid=false;
        
    //         if(address.startsWith('kaspa:')){
    //             isValid= true;
    //             return isValid;
    //         }
    //         else{
    //             isValid=false;
    //             return isValid;
               
    //         }
       
    // }

    getURL(address){
        return `https://explorer.kaspa.org/addresses/${this.address}`;

    }

}