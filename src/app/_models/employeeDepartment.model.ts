import { Department } from "./department.model";
import { Employee } from "./employee.model";

export class EmployeeDepartment{
    id!: number;
    employeeId!: number;
    employee!: Employee;
    departmentId!: number;
    department!: Department;
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