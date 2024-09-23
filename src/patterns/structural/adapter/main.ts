// Clase que representa un anime
class Anime {
    constructor(public titulo: string, public episodios: number, public genero: string) {}
}

// Interfaz para la primera fuente de datos
interface IFuenteDeDatos1 {
    obtenerAnime(): { name: string; episodeCount: number; type: string };
}

// Interfaz para la segunda fuente de datos
interface IFuenteDeDatos2 {
    fetchAnimeData(): { title: string; totalEpisodes: number; category: string };
}

// Implementación de la primera fuente de datos
class FuenteDeDatos1 implements IFuenteDeDatos1 {
    obtenerAnime() {
        return { name: "Naruto", episodeCount: 220, type: "Shonen" };
    }
}

// Implementación de la segunda fuente de datos
class FuenteDeDatos2 implements IFuenteDeDatos2 {
    fetchAnimeData() {
        return { title: "Attack on Titan", totalEpisodes: 75, category: "Action" };
    }
}

// Adapter para la primera fuente de datos
class AdapterFuenteDeDatos1 {
    private fuente: FuenteDeDatos1;

    constructor(fuente: FuenteDeDatos1) {
        this.fuente = fuente;
    }

    public obtenerAnime(): Anime {
        const data = this.fuente.obtenerAnime();
        return new Anime(data.name, data.episodeCount, data.type);
    }
}

// Adapter para la segunda fuente de datos
class AdapterFuenteDeDatos2 {
    private fuente: FuenteDeDatos2;

    constructor(fuente: FuenteDeDatos2) {
        this.fuente = fuente;
    }

    public obtenerAnime(): Anime {
        const data = this.fuente.fetchAnimeData();
        return new Anime(data.title, data.totalEpisodes, data.category);
    }
}

// Servicio que utiliza los adaptadores
class AnimeService {
    private adaptadores: (AdapterFuenteDeDatos1 | AdapterFuenteDeDatos2)[];

    constructor() {
        this.adaptadores = [];
    }

    public agregarAdaptador(adaptador: AdapterFuenteDeDatos1 | AdapterFuenteDeDatos2) {
        this.adaptadores.push(adaptador);
    }

    public obtenerTodosLosAnimes(): Anime[] {
        return this.adaptadores.map(adaptador => adaptador.obtenerAnime());
    }
}

// Uso del patrón Adapter
const fuente1 = new FuenteDeDatos1();
const fuente2 = new FuenteDeDatos2();

const adaptador1 = new AdapterFuenteDeDatos1(fuente1);
const adaptador2 = new AdapterFuenteDeDatos2(fuente2);

const animeService = new AnimeService();

animeService.agregarAdaptador(adaptador1);
animeService.agregarAdaptador(adaptador2);

// Obtener todos los animes
const animes = animeService.obtenerTodosLosAnimes();
animes.forEach(anime => {
    console.log(`Título: ${anime.titulo}, Episodios: ${anime.episodios}, Género: ${anime.genero}`);
});
