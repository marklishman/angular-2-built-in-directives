import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <ng-if-directive *ngIf="showSection('ng-if')"></ng-if-directive>
        <ng-switch-directive *ngIf="showSection('ng-switch')"></ng-switch-directive>
        <ng-for-directive *ngIf="showSection('ng-for')"></ng-for-directive>
        <ng-class-directive *ngIf="showSection('ng-class')"></ng-class-directive>
        <ng-style-directive *ngIf="showSection('ng-style')"></ng-style-directive>`,
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}