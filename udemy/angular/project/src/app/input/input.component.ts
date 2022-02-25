import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  styleUrls: ['./input.component.css'],
  template: `
  <input type='text'/><br><br>
  `
  
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
