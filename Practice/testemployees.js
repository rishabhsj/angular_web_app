"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
var e1;
e1 = new employee_1.Employee(100, "Rishabh", true);
console.log(`${e1.EmployeeId}:${e1.Status}`);
// to run : tsc -t ES5 .\testemployees.ts
