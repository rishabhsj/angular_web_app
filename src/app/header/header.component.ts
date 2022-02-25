import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})


export class HeaderComponent{
    
    //propertiers - data(Model)
    title:string = "Title - Header Component"

    constructor(){
        console.log("Header Component Added");
        
    }
}