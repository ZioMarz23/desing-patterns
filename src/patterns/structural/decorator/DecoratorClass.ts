import { Component } from "./Component";

export class Decorator implements Component {

    constructor(protected component: Component) {
        this.component = component
    }

    operation(): string {
        return this.component.operation();
    }

}