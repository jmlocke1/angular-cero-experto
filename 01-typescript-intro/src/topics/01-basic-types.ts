

const name: string = 'Strider';
// Declarar un tipo de dato con tuberías para definirlo con más tipos de dato (no es lo deseable, pero es posible)
// También se puede declarar como un valor fijo
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;
hpPoints = 'FULL';

console.log({
    name, hpPoints, isAlive
});



export {};