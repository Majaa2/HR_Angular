import { Employee } from "./employee.model";

export class Calculation{
    id!: number;
    processed!: boolean;
    sickLeave!: number;
    vacation!: number;
    overtime!: number;
    byDecision!: number;
    bussinessTrip!: number;
    stateHoliday!: number;
    religiousHoliday!: number;
    month!: number;
    year!: number;
    total!: number;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}