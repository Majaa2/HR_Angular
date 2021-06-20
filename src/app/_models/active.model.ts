import { Employee } from "./employee.model";

export class Active{
    id!: number;
    statusActive!: boolean;
    startDate!: Date;
    endDate!: Date;
    description!: string;
    name!: string;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active1!: boolean
}