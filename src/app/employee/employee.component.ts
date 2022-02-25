import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
// properties - data (Model)
// employee object
employee: Employee = { 
  empId: 100, 
  name: 'john',
  salary: 7667654, 
  photo:'url', 
  status: true
};

  constructor() { }

  ngOnInit(): void {
  }

}
