import { Component } from '@angular/core';

@Component({
    selector: 'ng-style-directive',
    template: `
        <h1>ngStyle</h1>
        <h2 [ngClass]="{gray: position < 5, pink: position > 5}">ngIf, ngClass, ngStyle</h2>
        <span *ngFor="let item of forLoopArray(10); let i=index">
            <a href="#" (click)="position=$event.target.textContent; false;">{{i}}</a>
        </span>
        <p [ngStyle]="styles">
            <span *ngIf="position < 5">lower</span>
            <span *ngIf="position > 5">upper</span>
        </p>`,
    styles: [
        '.gray {background-color: LightGray}',
        '.pink {background-color: Pink}'
    ]
})
export class NgStyleComponent {

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