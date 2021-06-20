import { Employee } from "./employee.model";
import { Function } from "./function.model";

export class EmployeeFunction{
    id!: number;
    employeeId!: number;
    employee!: Employee;
    functionId!: number;
    function!: Function;
    start!: Date;
    end!: Date;
    description!: string;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean; 
}