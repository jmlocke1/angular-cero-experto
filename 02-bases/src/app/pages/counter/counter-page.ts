import { Component, signal, ChangeDetectionStrategy } from "@angular/core";




@Component({
    templateUrl: './counter-page.html',
    styleUrl: './counter-page.css',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPage {
    counter = 10;
    counterSignal = signal(10);

    constructor() {
        setInterval(() => {
            this.counter += 1;
            this.counterSignal.update( v => v + 1 );
            console.log('Tick');
        }, 2000);
    }

    increaseBy(value: number) {
        this.counter += value;
        // this.counterSignal.update( current => current + value)
    }

    reset() {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}