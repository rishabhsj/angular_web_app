import { Employee } from "./employee";

var e1: Employee;
e1 = new Employee(100, "Rishabh", true);

console.log(`${e1.EmployeeId}:${e1.Status}`);


// to run : tsc -t ES5 .\testemployees.ts
// tsconfig.json - configuration for typescript compiler:   "tsc --init"
