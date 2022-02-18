"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(empId, empName, empStatus) {
        this.empId = empId;
        this.empName = empName;
        this.empStatus = empStatus;
    }
    get EmployeeId() {
        return this.empId;
    }
    set EmployeeId(value) {
        this.EmployeeId = value;
    }
    get Status() {
        return this.empStatus;
    }
    set Status(value) {
        this.Status = value;
    }
}
exports.Employee = Employee;
