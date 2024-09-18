//Method of executing the combat strategy

//The Strategy interface is common to all concrete strategies. 
//It declares a method that the context class uses to execute a strategy.

// In this case -> Servant(concrete strategie) implements CombatStrategy
export interface CombatStategy {
    execute():void;
}