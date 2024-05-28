import { Coin } from "./Coin";

export class Polkadot implements Coin{
    name='Polkadot';

    isValid(address: string){
        const endpointURL = `/api/polkadot`;
        return new Promise<boolean>((resolve) => {
            fetch(endpointURL, {
                "method": "POST",
                "body": address
            }).then((response) => {
                if(response.status != 200)
                    resolve(false)
                else if(response.status == 200) {
                    response.json().then((data) => resolve(data.isValid))
                }
            })
        })
    }

    getURL(address: string){
        return `https://polkadot.subscan.io/account/${address}`;
    }

}
