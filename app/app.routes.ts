import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgIfComponent } from "./ng-if.component";
import { NgSwitchComponent } from "./ng-switch.component";
import { NgForComponent } from "./ng-for.component";
import { NgClassComponent } from "./ng-class.component";
import { NgStyleComponent } from "./ng-style.component";

export const routes: Routes = [
    {path: '', redirectTo: '/ng-if', pathMatch: 'full'},
    {path: 'ng-if', component: NgIfComponent},
    {path: 'ng-switch', component: NgSwitchComponent},
    {path: 'ng-for', component: NgForComponent},
    {path: 'ng-class', component: NgClassComponent},
    {path: 'ng-style', component: NgStyleComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);