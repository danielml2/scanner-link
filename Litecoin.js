class Litecoin extends Coin{
    name=new String('');

    constructor(){
        this.name='Litecoin';
    }
    getName(){
        return this.name;
    }

    isValid(address){
        var isValid=false; 
        if((address.startsWith('M')||address.startsWith('L')||address.startsWith('3'))&&(address.length>=26&&address.length<=34)){
                isValid=true;      
        }
        else{ 
             if((address.startsWith('ltc1'))&&(address.length>=30&&address.length<=34)){
                     isValid=true;   
             }
             else{
                isValid=false;
               }
        }
        return isValid
    }


    getURL(address){
        return `https://live.blockcypher.com/ltc/address/${this.address}`;

    }

}