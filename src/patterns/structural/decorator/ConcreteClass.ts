import { Component } from "./Component";

export class ConcreteComponent implements Component {
    
    operation(): string {
        return 'ConcreteComponent';
    }
    
}