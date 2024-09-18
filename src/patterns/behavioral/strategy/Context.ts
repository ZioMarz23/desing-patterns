import { CombatStategy } from './Stategy';

//The Context class maintains a reference to one of the concrete strategies 
//and communicates with this object only through the strategy interface.

//this class will represent a Servant. This class will use a combat strategy, which can be changed at runtime.

export class Servant {

    constructor(private combatStategy: CombatStategy) {
        this.combatStategy = combatStategy;
    }

    setCombatStategy(combatStrategy: CombatStategy):void {
        this.combatStategy = combatStrategy;
    }

    fight(){
        this.combatStategy.execute();
    }
}