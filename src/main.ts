/**
 * Tamagotchi
 * 
 * Propiedades: Nombre, Salud, Higiene, Hambre
 * Que puede hacer? -> Descansar, Bañarse, Comer
 * Estados: Vivo -> Seguir jugando o Muerto -> Fin del juego
 *   
 */


interface ITamagotchi {

    name: string;
    health: number;
    hygiene: number;
    hungry: number;

    updateValues(v: boolean): void

    rest(): void

    bath(): void

    eat(): void
}

class generateNewTamagotchi implements ITamagotchi {

    private intervalId: number | null = null; // Para guardar el ID del intervalo
    public isAlive: boolean = true;

    constructor(
        public name: string,
        public health: number,
        public hygiene: number,
        public hungry: number,
    ) { }

    private decreaseValues(): void {

        if (this.health === 0 || this.hungry === 0 || this.hygiene === 0) {
            console.log(`${this.name} ha muerto :(`);
            this.isAlive = false;
            this.stopUpdating();
            return;
        }

        this.health = this.health - 1;
        this.hungry = this.hungry - 1;
        this.hygiene = this.hygiene - 1;

        console.log(this.health, this.hungry, this.hygiene);
    }


    updateValues(state: boolean): void {
        if (state && this.intervalId === null) { // Solo iniciar si no hay un intervalo activo
            this.intervalId = window.setInterval(() => this.decreaseValues(), 1000);
        } else if (!state && this.intervalId !== null) {
            this.stopUpdating(); // Detener el intervalo si state es false
        }
    }

    private stopUpdating(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null; // Reiniciar el ID del intervalo
        }
    }

    rest(): void {
        this.health = this.health + 10;
        console.log(`${this.name} ha descansado ${this.health}`);
    }

    bath(): void {
        this.hygiene = this.hygiene + 10;
        console.log(`${this.name} se ha bañado ${this.hygiene}`);
    }

    eat(): void {
        this.hungry = this.hungry + 10;
        console.log(`${this.name} ha comido ${this.hungry}`);
    }
}

const tama = new generateNewTamagotchi('Lunae', 5, 5, 5);

function showStatus() {
    const tamaElement = document.getElementById("tama");
    if (tamaElement) {
        tamaElement.innerHTML = `Tamagotchi Name: ${tama.name} - Health: ${tama.health} - Hygiene: ${tama.hygiene} - Hungry: ${tama.hungry}`;
    } else {
        console.error("Elemento con ID 'tama' no encontrado");
    }
}

setInterval(showStatus, 2000)



const button = document.getElementById('restbtn');
if (button) {
    button.addEventListener('click', () => {
        tama.rest();
    });
}

const button2 = document.getElementById('eatbtn');
if (button2) {
    button2.addEventListener('click', () => {
        tama.eat();
    });
}


const button3 = document.getElementById('bathbtn');
if (button3) {
    button3.addEventListener('click', () => {
        tama.bath();
    });
}

const button4 = document.getElementById('bathbtn');
if (button4) {
    button4.addEventListener('click', () => {
        tama.updateValues(tama.isAlive);
    });
}



