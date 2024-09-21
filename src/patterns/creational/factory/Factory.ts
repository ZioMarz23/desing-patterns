import { Guerrera, Maga, Sanadora } from "./ConcreteCreator";
import { Personaje } from "./ICharacter";

export class PersonajeFactory {

    static crearPersonaje(tipo: string, nombre: string): Personaje | null {
        switch (tipo) {
            case 'guerrera':
                return new Guerrera(nombre);
            case 'maga':
                return new Maga(nombre);
            case 'sanadora':
                return new Sanadora(nombre);
            default:
                return null;
        }
    }
    
}