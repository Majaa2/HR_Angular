import { Employee } from "./employee.model";

export class PersonalReason{
    id!: number;
    startDate!: Date;
    endDate!: Date;
    description!: string;
    count!: number;
    year!: number;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}