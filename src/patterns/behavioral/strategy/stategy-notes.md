# Structure: 

## CombatStrategy (Strategy) ->  
## SwordFightingStrategy, MagicCastingStrategy and LanceAttackStrategy (Concrete stategies)
## Servant is the class that uses the combat strategy. You can change its strategy at runtime by calling setCombatStrategy().
## In Main, we create different strategies and serve as an example of how to change a Servant's combat strategy at runtime.