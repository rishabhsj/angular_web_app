import { Component } from "@angular/core";

@Component({
    selector:'header-nav',
    templateUrl:'./nav.component.html'
})

export class NavComponent{
    constructor(){
        console.log("Nav Component Added");
        
    }
}