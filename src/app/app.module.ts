import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './app.rootcomponent';
import { HeaderComponent } from './header/app.header.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CounterComponent } from './counter/counter.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';



@NgModule({
  declarations: [
    RootComponent, HeaderComponent, EmployeeComponent, EmployeelistComponent, CounterComponent, TwowaydatabindingComponent
  ],
  imports: [
    BrowserModule, // *ngFor, *ngIf, *ngSwitch, Pipe clases
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {
  constructor(){
    console.log()
  }
 }
