import { Employee } from "./employee.model";

export class DaysOff{
    id!: number;
    reason!: string;
    dateOf!: Date;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}