import { LanceCastingStrategy, MagicCastingStrategy, SwordFightingStrategy } from "./ConcreteStategies";
import { Servant } from "./Context";

//Creation of diferents strategies
const swordStrategy = new SwordFightingStrategy();
const magicStrategy = new MagicCastingStrategy();
const lanceStrategy = new LanceCastingStrategy();

//Creation of Servants
let rider = new Servant(magicStrategy);
let arthur = new Servant(swordStrategy);

//set strategie
rider.setCombatStategy(magicStrategy);
console.log('Rider: ');
rider.fight();

arthur.setCombatStategy(swordStrategy);
console.log('Arhut: ');
arthur.fight();

//change strategie
rider.setCombatStategy(lanceStrategy);
console.log('Rider: ');
rider.fight();