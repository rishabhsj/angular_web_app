import { Component } from "@angular/core";

// custom component
@Component({
 selector: 'app-root', // tag <app-root>
 template: ` <div>
             <h1 class="text-white-50 bg-dark"> Welcome to Root Component </h1>
             <app-header></app-header>
             <!-- <app-header></app-header>
             <app-employee> </app-employee>
             <hr/>
             <app-counter> </app-counter>
             -->
             <app-twowaydatabinding></app-twowaydatabinding>
             </div>
             ` 
})
export class RootComponent{
     constructor(){
        console.log("Root Component Loaded");
    }

}