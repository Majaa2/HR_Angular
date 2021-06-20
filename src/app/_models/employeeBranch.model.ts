import { Branch } from "./branch.model";
import { Employee } from "./employee.model";

export class EmployeeBranch{
    id!: number;
    start!: Date;
    end!: Date;
    description!: string;
    employeeId!: number;
    employee!: Employee;
    branchId!: number;
    branch!: Branch;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}