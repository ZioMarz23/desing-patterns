import { Decorator } from "./DecoratorClass";

export class ConcreteDecoratorA extends Decorator {

    operation(): string {
        return `ComponentDecoratorA (${super.operation()})`;
    }

}

export class ConcreteDecoratorB extends Decorator {

    operation(): string {
        return `ComponentDecoratorB (${super.operation()})`;
    }

}

export class ConcreteDecoratorC extends Decorator {

    operation(): string {
        return `ComponentDecoratorC (${super.operation()})`;
    }

}