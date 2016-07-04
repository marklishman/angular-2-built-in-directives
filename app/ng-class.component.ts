import { Component } from '@angular/core';

@Component({
    selector: 'ng-class-directive',
    template: `
        <h1>ngClass</h1>
        
        <h2 [ngClass]="{gray: position < 5, pink: position > 5}">ngIf, ngClass, ngStyle</h2>
        <span *ngFor="let item of forLoopArray(10); let i=index">
            <a href="#" (click)="position=$event.target.textContent; false;">{{i}}</a>
        </span>
        <p [ngStyle]="styles">
            <span *ngIf="position < 5">lower</span>
            <span *ngIf="position > 5">upper</span>
        </p>
        
        <p ngClass="gray">
            Built in directive with one-time binding. 
            ngClass is the directive and also an @Input on the directive.
        </p>`,
    styles: [
        '.gray {background-color: LightGray}',
        '.pink {background-color: Pink}'
    ]
})
export class NgClassComponent {

    private position: number;

    private get styles(): any {
        return {
            fontSize: (this.position * 20) + 'px',
            textDecoration: (this.position < 7) ? 'underline' : ''
        }
    }

    private forLoopArray(elements: number): Array<any> {
        return new Array(elements);
    }
}