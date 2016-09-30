import { Component } from "@angular/core";

@Component({
    selector: 'ng-if-directive',
    template: `
        <h2>Show and Hide Elements</h2>
        <hr/>
        
        <p>
            ngIf condition is {{addToDom ? 'true' : 'false'}}    
            <button (click)="addToDom=!addToDom">set to {{addToDom ? 'false' : 'true'}}</button>
        </p>
        <div #div1>
            <h3 *ngIf="addToDom" >This header is added to and removed from the DOM</h3>
        </div>
        <p>Children: {{div1.children.length}}, content: '{{div1.children[0]?.innerText}}'</p>
        <hr/>

        <p>
            hidden value is {{hidden ? 'true' : 'false'}}
            <button (click)="hidden=!hidden">set to {{hidden ? 'false' : 'true'}}</button>
        </p>
        <div #div2>
            <h3 [hidden]="hidden">This header can be hidden but remains in the DOM</h3>
            <h3 [style.display]="hidden ? 'none' : 'block'">and this one too</h3>
        </div>
        <p>Children: {{div2.children.length}}, content: '{{div2.children[0].innerText}}', '{{div2.children[1].innerText}}'</p>
        <hr/>
        
        <p>
            CSS visible value is {{visible}} 
            <button (click)="visible=!visible">set to {{visible ? 'false' : 'true'}}</button>
        </p>
        <div #div3>
            <h3 [style.visibility]="visible ? 'visible' : 'hidden'">
                This header remains in the DOM but the text is invisible
            </h3>
        </div>
        <p>Children: {{div3.children.length}}, content: '{{div3.children[0].innerText}}'</p>
        <hr/>`
})
export class ShowAndHideComponent {
    private addToDom: boolean = true;
    private hidden: boolean = false;
    private visible: boolean = true;
}