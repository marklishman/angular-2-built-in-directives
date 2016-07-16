import { Component } from '@angular/core';

@Component({
    selector: 'ng-switch-directive',
    template: `
        <h2>ngSwitch</h2>
        
        <select #select [(ngModel)]="choice">
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="another">another</option>
        </select>
        
        <p [ngSwitch]="choice">
            <span *ngSwitchCase="'one'">First</span>
            <span *ngSwitchCase="'two'">Second</span>
            <span *ngSwitchCase="'three'">Third</span>
            <span *ngSwitchDefault>Default</span>
        </p>`
})
export class NgSwitchComponent {
    private choice: string = 'one';
}