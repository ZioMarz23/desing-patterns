import { Observer } from "./Observer";

//the object to which attention is to be paid if its status changes 
export interface Observable {
    attach(o: Observer): void;
    detach(o: Observer): void;
    notify(): void;
}

export class YoutubeChannel implements Observable {

    private channelSuscribers: Observer[] = [];
    private lastVideoPosted: string = '';
    private nameChannel:string = 'Programming with waifus';

    getLastVideo(): string {
        return this.lastVideoPosted;
    }

    getChannelName():string {
        return this.nameChannel;
    }

    //An observer is received by parameter and added 
    //to the list to observe the object. 
    
    attach(o: Observer):void {
        this.channelSuscribers.push(o);
    }

    detach(o: Observer):void { console.log(`Suscriber ${o} deleted`) }

    notify():void {
        for (const suscriber of this.channelSuscribers) {
            suscriber.update();
        }
    }

    addNewVideo(title: string):void {
        this.lastVideoPosted = title;
        this.notify();
        const msg = `New youtube video '${title}' added to channel '${this.nameChannel}'`;
        console.log(msg);
    }
}