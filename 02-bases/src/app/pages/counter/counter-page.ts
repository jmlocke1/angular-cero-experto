import { Component } from "@angular/core";




@Component({
    templateUrl: './counter-page.html',
    styleUrl: './counter-page.css'
})
export class CounterPage {
    counter = 10;

    increaseBy(value: number) {
        this.counter += value;
    }

    reset() {
        this.counter = 10;
    }
}