import { Employee } from "./employee.model";

export class HolidayEmployeeDays{
    id!: number;
    holidayOld!: number;
    holidayNew!: number;
    holidayYear!: number;
    holidayTotal!: number;
    holidayUsed!: number;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}