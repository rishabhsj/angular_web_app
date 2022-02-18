export class Employee{
    
    //properties - pivate
    public empId: number;
    public empName: string;
    public empStatus: boolean;

    constructor(empId: number, empName: string, empStatus: boolean) {
        this.empId = empId;
        this.empName = empName;
        this.empStatus = empStatus;
               
    }

    get EmployeeId(): number{
        return this.empId;
    }

    set EmployeeId(value: number){
        this.EmployeeId = value;
    }

    get Status(): boolean{
        return this.empStatus;
    }

    set Status(value: boolean) {
        this.Status = value;
    }
}


