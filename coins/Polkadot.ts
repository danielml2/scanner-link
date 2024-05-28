import { Coin } from "./Coin";

export class Polkadot implements Coin{
    name='Polkadot';

    isValid(address: string){
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

    getURL(address: string){
        return `https://polkadot.subscan.io/account/${address}`;

    }

}
