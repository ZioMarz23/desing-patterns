import { Curacion, GolpeFuerte, HechizoDeFuego } from "./ConcreteHability";
import { Personaje } from "./ICharacter";

export class Guerrera implements Personaje {
    nombre: string;
    clase: string = "Guerrera";

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    usarHabilidad(): string {
        const habilidad = new GolpeFuerte();
        return `${this.nombre} usa ${habilidad.nombre}: ${habilidad.efecto()}`;
    }
}

export class Maga implements Personaje {
    nombre: string;
    clase: string = "Maga";

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    usarHabilidad(): string {
        const habilidad = new HechizoDeFuego();
        return `${this.nombre} usa ${habilidad.nombre}: ${habilidad.efecto()}`;
    }
}

export class Sanadora implements Personaje {
    nombre: string;
    clase: string = "Sanadora";

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    usarHabilidad(): string {
        const habilidad = new Curacion();
        return `${this.nombre} usa ${habilidad.nombre}: ${habilidad.efecto()}`;
    }
}