import { Component, ViewChild, ElementRef, ViewChildren, QueryList, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng-if-directive',
    template: `
        <h1>ngIf</h1>
        
        <p>
            <button (click)="show=!show">{{show ? 'hide' : 'show'}}</button>
        </p>
        
        <div *ngIf="show">
            <p>
                <label><input #big type="radio" name="size" (change)="0" checked>Big</label>
                <label><input #small type="radio" name="size" (change)="0">Small</label>
            </p>
        
            <h2 *ngIf="big.checked">Big header</h2>
            <p *ngIf="small.checked">Small paragraph</p>
        </div>`
})
export class NgIfComponent {
    private show = false;
}