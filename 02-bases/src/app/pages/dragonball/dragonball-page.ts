import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';


interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    selector: 'app-dragonball-page',
    imports: [NgClass],
    templateUrl: './dragonball-page.html',
    styleUrl: './dragonball-page.css',
})
export class DragonballPage {

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 9000 },
        { id: 3, name: 'Piccolo', power: 3000 },
    ]);

    // powerClasses = computed( () => {
    //     return {
    //         'text-danger': true,
    //     }
    // });
}
