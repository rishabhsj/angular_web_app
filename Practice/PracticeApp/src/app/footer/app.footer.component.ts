import { Component, NgModule } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
})

export class FooterComponent{
constructor(){
    console.log('Footer Component was logged')
}
}