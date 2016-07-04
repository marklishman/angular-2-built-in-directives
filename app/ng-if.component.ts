import {Component} from '@angular/core';

@Component({
    selector: 'ng-if-directive',
    template: `
        <h1>ngIf</h1>
        <span *ngFor="let item of forLoopArray(10); let i=index">
            <a href="#" (click)="position=$event.target.textContent; false;">{{i}}</a>
        </span>
        <p>
            <span *ngIf="position < 5">lower</span>
            <span *ngIf="position > 5">upper</span>
        </p>
        
        <h3>with <code>&lt;template&gt;</code> directive</h3>
        <div>
            <span template="ngIf:position < 5">lower</span>
            <span template="ngIf:position > 5">upper</span>
        </div>

        <h3>with <code>&lt;template&gt;</code> element</h3>
        <div>
            <template [ngIf]="position < 5">
              <span>lower</span>
            </template>
            <template [ngIf]="position > 5">
              <span>upper</span>
            </template>
        </div>`
})
export class NgIfComponent {

    private position: number;

    private forLoopArray(elements: number): Array<any> {
        return new Array(elements);
    }
}