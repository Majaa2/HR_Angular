import { Employee } from "./employee.model";

export class Bonus{
    id!: number;
    count!: number;
    description!: string;
    year!: number;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean
}