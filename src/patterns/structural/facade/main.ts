// Clase que representa un episodio
class Episodio {
    constructor(private titulo: string, private duracion: number) {}

    public getDetalles() {
        return `Episodio: ${this.titulo}, Duración: ${this.duracion} minutos`;
    }
}

// Clase que representa un personaje
class Personaje {
    constructor(private nombre: string, private rol: string) {}

    public getDetalles() {
        return `Personaje: ${this.nombre}, Rol: ${this.rol}`;
    }
}

// Clase que representa una reseña
class Reseña {
    constructor(private autor: string, private contenido: string) {}

    public getDetalles() {
        return `Reseña de ${this.autor}: "${this.contenido}"`;
    }
}

// Clase fachada que simplifica la interacción
class AnimeFacade {
    private episodios: Episodio[] = [];
    private personajes: Personaje[] = [];
    private reseñas: Reseña[] = [];

    public agregarEpisodio(titulo: string, duracion: number) {
        const episodio = new Episodio(titulo, duracion);
        this.episodios.push(episodio);
    }

    public agregarPersonaje(nombre: string, rol: string) {
        const personaje = new Personaje(nombre, rol);
        this.personajes.push(personaje);
    }

    public agregarReseña(autor: string, contenido: string) {
        const reseña = new Reseña(autor, contenido);
        this.reseñas.push(reseña);
    }

    public mostrarDetalles() {
        console.log("Detalles del Anime:");
        
        console.log("\nEpisodios:");
        this.episodios.forEach(episodio => console.log(episodio.getDetalles()));
        
        console.log("\nPersonajes:");
        this.personajes.forEach(personaje => console.log(personaje.getDetalles()));
        
        console.log("\nReseñas:");
        this.reseñas.forEach(reseña => console.log(reseña.getDetalles()));
    }
}

// Uso del patrón Facade
const animeFacade = new AnimeFacade();

// Agregamos episodios
animeFacade.agregarEpisodio("El Inicio de la Aventura", 24);
animeFacade.agregarEpisodio("La Batalla Final", 30);

// Agregamos personajes
animeFacade.agregarPersonaje("Naruto Uzumaki", "Protagonista");
animeFacade.agregarPersonaje("Sasuke Uchiha", "Rival");

// Agregamos reseñas
animeFacade.agregarReseña("Fan123", "¡Increíble anime, muy emocionante!");
animeFacade.agregarReseña("CriticoAnime", "Los personajes están bien desarrollados.");

// Mostramos todos los detalles
animeFacade.mostrarDetalles();
