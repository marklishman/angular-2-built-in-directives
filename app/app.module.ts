import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { AppComponent }   from './app.component';
import { NgIfComponent } from "./ng-if.component";
import { NgSwitchComponent } from "./ng-switch.component";
import { NgForComponent } from "./ng-for.component";
import { NgClassComponent } from "./ng-class.component";
import { NgStyleComponent } from "./ng-style.component";
import { routing } from "./app.routes";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        NgIfComponent,
        NgSwitchComponent,
        NgForComponent,
        NgClassComponent,
        NgStyleComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }