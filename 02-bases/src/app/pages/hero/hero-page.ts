import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";





@Component({
    templateUrl: './hero-page.html',
    imports: [ UpperCasePipe ]
})
export class HeroPage {
    name = signal('Ironman');
    capitalizedName = computed( () => this.name().toUpperCase() );
    age = signal(45);

    heroDescription = computed( () => `Computado: ${ this.name() } - ${ this.age() }` );

    getHeroDescription() {
        return `${ this.name() } - ${ this.age() }`
    }
    
    changeHero() {
        this.name.update( () => 'Spiderman' );
        this.age.update( () => 22 );
    }

    changeAge() {
        this.age.update( () => 60 );
    }

    resetForm() {
        this.name.update( () => 'Ironman' );
        this.age.update( () => 45 );
    }
}