import { Employee } from "./employee.model";

export class ReligousHoliday{
    id!: number;
    name!: string;
    date!: Date;
    description!: string;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}