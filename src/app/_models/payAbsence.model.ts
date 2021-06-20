import { Employee } from "./employee.model";

export class PayAbsence{
    id!: number;
    name!: string;
    description!: string;
    startDate!: Date;
    endDate!: Date;
    count!: number;
    year!: number;
    isActive!: boolean;
    isApproved!: boolean;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}