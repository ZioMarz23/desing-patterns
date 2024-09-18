import { CombatStategy } from "./Stategy";

// Concrete Strategies implement different variations of an algorithm that the context class uses.

export class SwordFightingStrategy implements CombatStategy {

    execute(): void {
        console.log('Using sword fighting techniques');
    }

}

export class MagicCastingStrategy implements CombatStategy {

    execute(): void {
        console.log('Using magic fighting techniques');
    }

}

export class LanceCastingStrategy implements CombatStategy {

    execute(): void {
        console.log('Using lance fighting techniques');
    }

}

