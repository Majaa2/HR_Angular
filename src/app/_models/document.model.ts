import { Employee } from "./employee.model";

export class Document{
    id!: number;
    name!: string;
    type!: string;
    size!: number;
    document1!: string;
    upload!: Date;
    group!: string;
    subgroup!: string;
    path!: string;
    validTo!: Date;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}