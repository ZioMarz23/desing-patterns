import { ConcreteComponent } from "./ConcreteClass";
import { ConcreteDecoratorA, ConcreteDecoratorB, ConcreteDecoratorC } from "./ConcreteDecorator";

const component = new ConcreteComponent();
const decorator = new ConcreteDecoratorA(component);
const decorator2 = new ConcreteDecoratorB(decorator);
const decorator3 = new ConcreteDecoratorC(decorator2);

console.log(decorator.operation());
console.log(decorator2.operation());
console.log(decorator3.operation());


