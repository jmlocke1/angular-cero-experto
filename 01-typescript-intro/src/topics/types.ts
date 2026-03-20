

export class Types {
    static isInteger(num: number): boolean {
        return typeof num === typeof 123 && num === parseInt('' + num);
    }

    static isFloat(num: number): boolean {
        return typeof num === typeof 22.5 && num !== parseInt('' + num);
    }

    static isSameClassName(object: object, className: string = ''): boolean {
        return typeof object === typeof new Types() && object.constructor.name === className;
    }

    static isString(frase: string): boolean {
        return typeof frase === typeof 'Hola';
    }
}