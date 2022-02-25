import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  // property - array of 3 employee objects
  // Employee[] -> array of Employee type
employees : Employee[] =
[
  {empId:100,  name: 'John',   salary: 7667654, photo: 'assets/images/user1.png',  status: true },
  {empId:200,  name: 'Mike',   salary: 8767654, photo: 'assets/images/user2.png',  status: true},
  {empId:300,  name: 'Martha', salary: 9767654, photo: 'assets/images/user3.png',  status: true},
];

// boolean property used for disabling & enabling
flag : boolean = false;
width: number = 50;
height: number = 50;
title:string = "Employee Details";

  constructor() { 
    console.log("EmployeeList Component Loaded");
  }

  ngOnInit(): void {
  }


public handlerClick() : void{
    window.alert("Button clicked");
  }
}
