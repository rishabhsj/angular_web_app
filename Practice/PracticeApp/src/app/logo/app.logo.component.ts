import { Component } from "@angular/core";

@Component({
    selector: 'app-logo',
    template: '<a class="navbar-brand" href="#"><img style="height:auto; max-height:60px" src="assets/img/logo.png"></a>',
})

export class LogoComponent{
    constructor(){
        console.log('Logo Component Loaded...')
    }
}