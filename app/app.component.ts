import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
            <p>
                <a [routerLink]="['/ng-if']" routerLinkActive="disabled">ngIf</a> |
                <a [routerLink]="['/show-hide']" routerLinkActive="disabled">show-and-hide</a> |
                <a [routerLink]="['/ng-switch']" routerLinkActive="disabled">ngSwitch</a> |
                <a [routerLink]="['/ng-for']" routerLinkActive="disabled">ngFor</a> |
                <a [routerLink]="['/ng-class']" routerLinkActive="disabled">ngClass</a> |
                <a [routerLink]="['/ng-style']" routerLinkActive="disabled">ngStyle</a>
            </p>
            <div>
                <router-outlet></router-outlet>
            </div>`,
})
export class AppComponent {}