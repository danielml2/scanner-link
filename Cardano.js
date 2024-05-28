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
        if(address.startsWith('Ae2')||address.startsWith('DdzFF')){
                isValid=true;
        }
        else{ 

             if(address.startsWith('addr')||address.startsWith('stake')){
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
