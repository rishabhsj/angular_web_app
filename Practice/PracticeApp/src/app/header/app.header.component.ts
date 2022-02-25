import { Component } from "@angular/core";

//custom component 
@Component({
    selector: 'app-header', //mandatory ->name of the package-name of the component class
    templateUrl: './app.header.component.html', 
})
export class HeaderComponent{
    title : string = "Title Header Component";
    today : number = Date.now();
    constructor(){
        console.log("Header component loaded..");
    }
}