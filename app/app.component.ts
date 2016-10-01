import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div>
            <p>
                <a [routerLink]="['/ng-if']">ngIf</a> |
                <a [routerLink]="['/show-hide']">show & hide</a> |
                <a [routerLink]="['/ng-switch']">ngSwitch</a> |
                <a [routerLink]="['/ng-for']">ngFor</a> |
                <a [routerLink]="['/ng-class']">ngClass</a> |
                <a [routerLink]="['/ng-style']">ngStyle</a>
            </p>
            <hr/>
         </div>
        <div>
            <router-outlet></router-outlet>
        </div>`,
})
export class AppComponent {}