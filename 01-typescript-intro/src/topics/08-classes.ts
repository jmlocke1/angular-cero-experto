import { Types } from "./types";

export class Person {
    #name: string;
    #lastName: string;
    #address: string;

    constructor( name: string, lastName: string, address: string = 'No Address') {
        this.#name = typeof name === 'string' ? name : '';
        this.#lastName = typeof lastName === 'string' ? lastName : '';
        this.#address = typeof address === 'string' ? address : '';
    }

    set name(name: string) {
        if(typeof name === 'string') this.#name = name;
        
    }

    get name(): string {
        return this.#name;
    }

    set lastName(lastName: string) {
        if(typeof lastName === 'string') this.#lastName = lastName;
    }

    get lastName(): string {
        return this.#lastName;
    }

    set address(address: string) {
        if(typeof address === 'string') this.#address = address;
    }

    get address(): string {
        return this.#address + ' Es donde vivo';
    }

    get fullName() {
        return this.#name + " " + this.#lastName;
    }
}

// export class Hero extends Person {
//     public alterEgo: string;
//     public age: number;
//     constructor(alterEgo: string, age:number, realName: string) {
//         super(realName);
//         this.alterEgo = alterEgo;
//         this.age = age;
//     }
// }

// Composición en lugar de herencia
export class Hero {
    public alterEgo: string;
    public age: number;
    public person: Person;
    constructor(alterEgo: string, age:number, person: Person) {
        this.alterEgo = alterEgo;
        this.age = age;
        this.person = person;
    }

    get realName() {
        const { lastName, fullName} = this.person;
        return `Mi nombre real es ${lastName}, ${fullName}`;
    }
}

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Iron Man', 33, tony);

console.log(ironman);
console.log(ironman.realName);

const bond = new Person('James', 'Bond', 'Londres');
const jamesBond = new Hero('007', 33, bond);

console.log(jamesBond);
console.log(jamesBond.realName);

console.log('¿Es la misma clase?', Types.isSameClassName(ironman, 'Hero'));
console.log('¿Es un número flotante?', Types.isFloat(22.E5));