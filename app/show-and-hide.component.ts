import { Component } from "@angular/core";

@Component({
    selector: 'ng-if-directive',
    template: `
        <h2>Show and Hide Elements</h2>
        
        <hr/>
        
        <p>
            ngIf condition is {{addToDom ? 'true' : 'false'}}    
            <button (click)="addToDom=!addToDom">{{addToDom ? 'set to false' : 'set to true'}}</button>
        </p>
        <div #div1>
            <h2 *ngIf="addToDom" >
                This header is added and removed from the DOM
            </h2>
        </div>

        <p>Children: {{div1.children.length}}, content: '{{div1.children[0]?.innerText}}'</p>

        <hr/>

        <p>
            'hidden' property is {{hidden ? 'true' : 'false'}}
            <button (click)="hidden=!hidden">{{hidden ? 'set to false' : 'set to true'}}</button>
        </p>
        <div #div2>
            <h2 [hidden]="hidden">
                This header can be hidden but remains in the DOM
            </h2>
        </div>

        <p>Children: {{div2.children.length}}, content: '{{div2.children[0].innerText}}'</p>

        <hr/>
        
        <p>
            CSS display value is '{{styleDisplay}}' 
            <button (click)="styleDisplay = (styleDisplay == 'block' ? 'none' : 'block')">{{styleDisplay}}</button>
        </p>
        <div #div3>
            <h2 [style.display]="styleDisplay">
                This header can be hidden but remains in the DOM
            </h2>
        </div>

        <p>Children: {{div3.children.length}}, content: '{{div3.children[0].innerText}}'</p>
        
        <hr/>
        
        <p>
            CSS visible value is {{visible}} 
            <button (click)="visible=!visible">{{visible ? 'set to false' : 'set to true'}}</button>
        </p>
        <div #div4>
            <h2 [style.visibility]="visible ? 'visible' : 'hidden'">
                This header can be made invisible but remains in the DOM
            </h2>
        </div>

        <p>Children: {{div4.children.length}}, content: '{{div3.children[0].innerText}}'</p>
        
        <hr/>`
})
export class ShowAndHideComponent {
    private addToDom: boolean = true;
    private hidden: boolean = false;
    private styleDisplay: string = 'block';
    private visible: boolean = true;
}