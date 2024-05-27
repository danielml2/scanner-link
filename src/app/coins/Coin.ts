interface Coin {
    name: string,
    url: string
    isValid : (address : string) => boolean
    getURL : (address : string) => string
}

export const COINS : Array<Coin> = [
    {
        name: "bitcoin",
        url: "url",
        isValid: (address) => address != "test",
        getURL: (address) => address
    }, {
        name: "awesomeCoin",
        url: "url",
        isValid: (address) => !address.includes("bad"),
        getURL: (address) => address
    }, {
        name: "longggggggCoin",
        url: "url",
        isValid: (address) => address.length >= 10,
        getURL: (address) => address
    }, {
        name: "shortCoin",
        url: "url",
        isValid: (address) => address.length <= 4,
        getURL: (address) => address
    }, {
        name: "yeahCoin",
        url: "url",
        isValid: (address) => address == "yeah",
        getURL: (address) => address
    },
]