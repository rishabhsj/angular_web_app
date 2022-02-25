import { Component } from '@angular/core';

//custom component
@Component({
  selector: 'app-root', //custom tag <app-root>
  template:  `<div> 
                <h1 class="text-white-50 bg-dark"> Welcome to Root Component </h1>
                <app-header></app-header>
                <!--<app-employee></app-employee>
                <app-counter></app-counter>-->
                <app-footer></app-footer>
                <app-twowaydata></app-twowaydata>
              </div>`
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  constructor(){
    console.log("Root Component Loaded");
    
  }
}
