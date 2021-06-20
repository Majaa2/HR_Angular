import { Employee } from "./employee.model";

export class Holiday{
    id!: number;
    description!: string;
    startDate!: Date;
    endDate!: Date;
    count!: number;
    old!: string;
    new!: string;
    employeeId!: number;
    employee!: Employee;
    state!: string;
    year!: number;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}