import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 0;

  constructor() { 
    console.log("Counter Component Loaded...");
  }

  ngOnInit(): void {
  }

  // when user clicks on Increment button
  incrementCounter(){
    console.log("within the incrementCounter called..." + this.count);
       this.count = this.count + 1;

  }

  // when user clicks on Decrement button
  // when count value is updated, angular instructs view to rendered the HTML content
  // angular framework algorithm called as CHANGE DETECTION MECHANSIM (zone.js) 
  decrementCounter(){
    console.log("within the decrementCounter called..." + this.count);
       this.count = this.count - 1;
  }

}
