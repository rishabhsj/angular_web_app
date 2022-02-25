import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent implements OnInit {

  // property
  firstname : string = 'john';
  
  colors = ['RED', 'CYAN', 'BLUE'];

  mySelectedColor: string = 'RED';

  constructor() { 
    console.log("Twowaydatabinding component loaded");
  }

  ngOnInit(): void {
  }

  updateFirstName(mytext: string){
    this.firstname = mytext;
  }

}
