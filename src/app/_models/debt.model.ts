import { Branch } from "./branch.model";
import { Employee } from "./employee.model";

export class Debt{
    id!: number;
    name!: string;
    inventoryNumber!: string;
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