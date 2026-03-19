/*
    ===== Código de TypeScript =====
*/
interface SuperHeros {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHeros = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};