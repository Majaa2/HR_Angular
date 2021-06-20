import { Employee } from "./employee.model";
import { Role } from "./role.model";

export class EmployeeRole{
    id!: number;
    employeeId!: number;
    employee!: Employee;
    roleId!: number;
    role!: Role;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}

export class EmployeeAccount{
    employee!: Employee;
    roleList!: Array<number>;
}