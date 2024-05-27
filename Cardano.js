class Cardano  extends Coin{
    name=new String('');

    constructor(){
        this.name='Cardano';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        var isValid=false; 
        if((address.startsWith('Ae2')||address.startsWith('DdzFF'))&&(address.length>=50&&address.length<=58)){
                isValid=true;
        }
        else{ 

             if((address.startsWith('addr')||address.startsWith('stake'))&&(address.length>=50&&address.length<=59)){
                    isValid=true;
             }
             else{
                isValid=false;
               }
        }
        return isValid;
    }

    getURL(address){
        return `https://cardanoscan.io/address/${this.address}`;

    }

}