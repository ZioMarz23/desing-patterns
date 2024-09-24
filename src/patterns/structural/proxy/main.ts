// Sujeto
interface Subject {
    request(): void;
}

// Sujeto Real
class RealSubject implements Subject {
    request(): void {
        console.log("Request handled by RealSubject.");
    }
}

// Proxy
class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor() {
        this.realSubject = new RealSubject();
    }

    request(): void {
        console.log("Proxy: Preprocessing request.");
        this.realSubject.request();
        console.log("Proxy: Postprocessing request.");
    }
}

// Uso
const proxy = new Proxy();
proxy.request();
