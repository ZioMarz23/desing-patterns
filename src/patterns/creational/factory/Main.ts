import { Personaje } from './ICharacter';
import { PersonajeFactory } from "./Factory";

declare global {
    interface Window {
        entrarSala: (sala: string) => void;
        mejorarEstadisticas: () => void;
        atacarNPC: () => void;
        recuperarSalud: () => void;
    }
}

const personajes: Personaje[] = [];


function crearPersonajes(clase: string, name: string): Personaje | null {
    return PersonajeFactory.crearPersonaje(clase, name)
}

const erza = crearPersonajes('guerrera', 'Erza');
const mimosa = crearPersonajes('maga', 'Mimosa');
const yuna = crearPersonajes('sanadora', 'Yuna');

personajes.push(erza!);
personajes.push(mimosa!);
personajes.push(yuna!);


personajes.map(personaje => console.log(personaje.usarHabilidad()));


document.getElementById('personaje')!.innerText = `Personaje asignado: ${erza!.nombre}, Clase: ${erza!.clase}`;

function entrarSala(sala: string) {
    const salaDiv = document.getElementById('sala')!;
    salaDiv.innerHTML = '';

    switch (sala) {
        case 'practica':
            salaDiv.innerHTML = `
                <h2>Sala de Práctica</h2>
                <p>Aquí puedes mejorar tus estadísticas.</p>
                <button onclick="window.mejorarEstadisticas()">Mejorar</button>
            `;
            break;
        case 'npc':
            salaDiv.innerHTML = `
                <h2>Sala de NPC</h2>
                <p>Ataca al NPC y defiéndete.</p>
                <button onclick="window.atacarNPC()">Atacar</button>
            `;
            break;
        case 'hospital':
            salaDiv.innerHTML = `
                <h2>Hospital</h2>
                <p>Recupera tus puntos de golpe aquí.</p>
                <button onclick="window.recuperarSalud()">Recuperar Salud</button>
            `;
            break;
    }
}

window.entrarSala = entrarSala;

window.mejorarEstadisticas = function() {
    alert(`${erza!.nombre} ha mejorado sus estadísticas.`);
};

window.atacarNPC = function() {
    alert(`${erza!.nombre} ataca al NPC con ${erza!.usarHabilidad()}.`);
};

window.recuperarSalud = function() {
    alert(`${erza!.nombre} ha recuperado su salud.`);
};
