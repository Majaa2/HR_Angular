import { Employee } from "./employee.model";
import { Seminar } from "./seminar.model";

export class EmployeeSeminar{
    id!: 0;
    employeeId!: 0;
    employee!: Employee;
    seminarId!: 0;
    seminar!: Seminar;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}