import { Component } from '@angular/core';

@Component({
    selector: 'ng-for-directive',
    template: `
        <h1>ngFor</h1>
        <p>Uses a micro-syntax, not a template expression</p>
        <div *ngFor="let person of people; let i=index; let isOdd=odd; trackBy:trackByPeople">
            <span [class.highlight]="isOdd">{{i}}. {{person.name.forename}} {{person.name.surname}}</span>
        </div>
        
        <h3>For Loop</h3>
        <span *ngFor="let item of forLoopArray(15); let i=index">
            <span>{{i+1}}</span>
        </span>`,
    styles: ['.highlight {background-color: Lavender }']
})
export class NgForComponent {

    private people = [
            {id: 1, name: {forename: 'John', surname: 'Doe'}},
            {id: 2, name: {forename: 'John', surname: 'Smith'}},
            {id: 3, name: {forename: 'Peter', surname: 'Scott'}},
            {id: 4, name: {forename: 'Sue', surname: 'Reece'}}
        ];

    trackByPeople(index: number, person: any) {
        return person.id;
    }

    private forLoopArray(elements: number): Array<any> {
        return new Array(elements);
    }
}