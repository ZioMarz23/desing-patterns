import { Personaje } from './ICharacter';
import { PersonajeFactory } from "./Factory";

const personajes: Personaje[] = [];


function crearPersonajes(clase: string, name: string): Personaje | null  {
    return PersonajeFactory.crearPersonaje(clase, name)
}

const erza = crearPersonajes('guerrera', 'Erza');
const mimosa = crearPersonajes('maga', 'Mimosa');
const yuna = crearPersonajes('sanadora', 'Yuna');

personajes.push(erza!);
personajes.push(mimosa!);
personajes.push(yuna!);


personajes.map( personaje => console.log( personaje.usarHabilidad() ));