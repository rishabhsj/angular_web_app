import { Component } from "@angular/core";

@Component({
    selector: 'app-header', // tag for that component to place
    templateUrl: './app.header.component.html'
})
export class HeaderComponent{

    // properties - data (Model)
     title: string = "Title - Header Component";  
     today: number = Date.now();
     
    
    // methods - behavior
    constructor(){
        console.log("Header Component Loaded...");
    }
    handleClick(){

    }
}
// var header1 = new HeaderComponent(); // object creation done by framework
// var header2 = new HeaderComponent();