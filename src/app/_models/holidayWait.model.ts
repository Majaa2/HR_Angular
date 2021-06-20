import { Employee } from "./employee.model";

export class HolidayWait{
    id!: number;
    description!: string;
    startDate!: Date;
    endDate!: Date;
    count!: number;
    selectedYear!: number;
    status!: string;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}