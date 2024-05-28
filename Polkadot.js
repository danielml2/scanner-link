class Polkadot extends Coin{
    name=new String('');

    constructor(){
        this.name='Polkadot';
    }
    getName(){
        return this.name;
    }

 
    isValid(address){
        const apiUrl = `https://polkadot-public-sidecar.parity-chains.parity.io/accounts/${this.address}/validate`;
         isValid=false;
        fetch(apiUrl)
    
            .then(response => {
                  if (!response.ok) {
                       throw new Error('Network response was not ok');
                     }
               return response.json();
             })
            .then(data => {
                  this.isValid=data.isValid;
                 })
            .catch(error => {
                  console.error('Error:', error);
            });
        return this.isValid;
    }

    // isValid(address){
    //     return (address.length==48);
    // }


    // isValid(address){
    //     var isValid=false;
    //     if(address.length==48){
    //        isValid=true;
    //        return isValid;
    //     }
    //     else{
    //         isValid=false;
    //         return isValid;
    //     }
    // }


    getURL(address){
       
        return `https://polkadot.subscan.io/account/${this.address}`;

    }

}
