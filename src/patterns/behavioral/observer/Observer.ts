import { YoutubeChannel } from "./Observable";


//Each oberserver must "suscribe to the Observable"
export interface Observer {
    update(): void;
}

export class Suscriber implements Observer {

    private observable;

    //Injecting dependence of the object to be observed
    constructor(observable: YoutubeChannel) {
        this.observable = observable;
    }

    update():void {
        const msg = `${this.observable.getChannelName()} has upload a new video '${this.observable.getLastVideo()}'`;
        console.log(msg);
    }

}