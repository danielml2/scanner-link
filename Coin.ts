interface Coin{
    name?: string;
    isValid: (address: string) =>boolean;
    getURL: (address: string) => string;
    getName:()=>string;
}


