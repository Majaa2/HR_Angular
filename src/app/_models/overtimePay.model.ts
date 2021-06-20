import { Employee } from "./employee.model";

export class OvertimePay{
    id!: number;
    description!: string;
    hours!: number;
    price!: number;
    approved!: boolean;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;  
}