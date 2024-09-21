import { Habilidad } from "./IHability";

export class GolpeFuerte implements Habilidad {
    nombre = "Golpe Fuerte";

    efecto(): string {
        return "Inflige un gran daño físico al enemigo.";
    }
}

export class HechizoDeFuego implements Habilidad {
    nombre = "Hechizo de Fuego";

    efecto(): string {
        return "Lanza una bola de fuego que causa daño mágico.";
    }
}

export class Curacion implements Habilidad {
    nombre = "Curación";

    efecto(): string {
        return "Restaura la salud de un aliado.";
    }
}