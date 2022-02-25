import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydata',
  templateUrl: './twowaydata.component.html',
  styleUrls: ['./twowaydata.component.css']
})
export class TwowaydataComponent implements OnInit {

  firstname:string = "John";
  colors = ['RED', 'CYAN', 'BLUE'];
  selectedcolor:string="";

  constructor() { }

  ngOnInit(): void {
  }

  updateFirstName(value:string){
    this.firstname = value;
    
  }

}
