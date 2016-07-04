import { Component } from '@angular/core';

@Component({
    selector: 'ng-switch-directive',
    template: `
        <h1>ngSwitch</h1>
        <span *ngFor="let label of ['one', 'two', 'three', 'other']">
            <a href="#" (click)="choice=$event.target.textContent; false;">{{label}}</a>
        </span>
        <div [ngSwitch]="choice">
            <span *ngSwitchCase="'one'">First</span>
            <span *ngSwitchCase="'two'">Second</span>
            <span *ngSwitchCase="'three'">Third</span>
            <span *ngSwitchDefault>Default</span>
        </div>

        <h3>with <code>&lt;template&gt;</code></h3>
        <div [ngSwitch]="choice">
            <template [ngSwitchCase]="'one'"><span>First</span></template>
            <template [ngSwitchCase]="'two'"><span>Second</span></template>
            <template [ngSwitchCase]="'three'"><span>Third</span></template>
            <template ngSwitchDefault><span>Default</span></template>
        </div>`
})
export class NgSwitchComponent {
    private choice: string;
}