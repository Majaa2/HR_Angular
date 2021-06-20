import { Employee } from "./employee.model";

export class Experiece{
    id!: number;
    companyName!: string;
    startDate!: Date;
    endDate!: Date;
    function!: string;
    count!: number;
    state!: string;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}