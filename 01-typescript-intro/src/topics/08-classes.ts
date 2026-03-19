

export class Person {
    public name: string;
    #address: string;

    constructor( name: string, address: string) {
        this.name = name;
        this.#address = address;
    }

    
    get address(): string {
        return this.#address + ' Es donde vivo';
    }
}

const ironman = new Person('José Miguel', 'Zaragoza y Olé');

console.log(ironman.address);