import { Component } from '@angular/core';

@Component({
    selector: 'ng-for-directive',
    template: `
        <h1>ngFor</h1>
        <p>Uses a micro-syntax, not a template expression</p>
        <div>
            <p *ngFor="let person of people; let isOdd=odd; trackBy:trackByPeople">
                <span [class.gray]="isOdd">{{person.name.forename}} {{person.name.surname}}</span>
            </p>
        </div>
        
        <h3>For Loop</h3>
        <p>
            <span *ngFor="let item of forLoopArray(15); let i=index">
                <span>{{i+1}}</span>
            </span>
        </p>

        <h3>with <code>template</code> directive</h3>  
        <div>
            <p template="ngFor let person of people; trackBy:trackByPeople">
                <span>{{person.name.forename}} {{person.name.surname}}</span>
            </p>
        </div>

        <h3>with <code>&lt;template&gt;</code> element</h3>  
        <div>
            <template ngFor let-person [ngForOf]="people" [ngForTrackBy] = "trackByPeople">
                <p>
                    <span>{{person.name.forename}} {{person.name.surname}}</span>
                </p>
            </template>
        </div>`
})
export class NgForComponent {

    private people = [
            {
                id: 1,
                name: {
                    forename: 'John',
                    surname: 'Doe'
                }
            },
            {
                id: 2,
                name: {
                    forename: 'John',
                    surname: 'Smith'
                }
            },
            {
                id: 3,
                name: {
                    forename: 'Peter',
                    surname: 'Scott'
                }
            },
            {
                id: 4,
                name: {
                    forename: 'Sue',
                    surname: 'Reece'
                }
            }
        ];

    trackByPeople(index: number, person: any) {
        return person.id;
    }

    private forLoopArray(elements: number): Array<any> {
        return new Array(elements);
    }
}