import { Component } from "@angular/core";

//custom component 
@Component({
    selector: 'app-nav', //mandatory ->name of the package-name of the component class
    templateUrl: './app.nav.component.html', 
})
export class NavigationComponent{
    constructor(){
        console.log("Navigation component loaded..");
    }
}