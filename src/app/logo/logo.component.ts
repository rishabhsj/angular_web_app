import { Component } from "@angular/core";

@Component({
    selector:'header-logo',
    templateUrl:'./logo.component.html'
})

export class LogoComponent{
    constructor(){
        console.log("Logo Component Added");
        
    }
}