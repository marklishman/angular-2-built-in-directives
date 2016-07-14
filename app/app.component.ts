import { Component } from '@angular/core';

import { NgIfComponent } from "./ng-if.component";
import { NgIfTemplateComponent } from "./ng-if-template.component";
import { NgSwitchComponent } from "./ng-switch.component";
import { NgSwitchTemplateComponent } from "./ng-switch-template.component";
import { NgForComponent } from "./ng-for.component";
import { NgForTemplateComponent } from "./ng-for-template.component";
import { NgClassComponent } from "./ng-class.component";
import { NgStyleComponent } from "./ng-style.component";

@Component({
    selector: 'app',
    template: `
        <ng-if-directive *ngIf="showSection('ng-if')"></ng-if-directive>
        <ng-if-template *ngIf="showSection('ng-if-template')"></ng-if-template>
        <ng-switch-directive *ngIf="showSection('ng-switch')"></ng-switch-directive>
        <ng-switch-template *ngIf="showSection('ng-switch-template')"></ng-switch-template>
        <ng-for-directive *ngIf="showSection('ng-for')"></ng-for-directive>
        <ng-for-template *ngIf="showSection('ng-for-template')"></ng-for-template>
        <ng-class-directive *ngIf="showSection('ng-class')"></ng-class-directive>
        <ng-style-directive *ngIf="showSection('ng-style')"></ng-style-directive>
        `,
    directives: [
        NgIfComponent,
        NgIfTemplateComponent,
        NgSwitchComponent,
        NgSwitchTemplateComponent,
        NgForComponent,
        NgForTemplateComponent,
        NgClassComponent,
        NgStyleComponent
    ]
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