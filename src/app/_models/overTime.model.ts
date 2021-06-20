import { Employee } from "./employee.model";

export class OverTime{
    id!: number;
    dateForm!: Date;
    dateTo!: Date;
    notes!: string;
    durationHours!: number;
    durationMinutes!: number;
    status!: number;
    document!: string;
    documentName!: string;
    documentType!: string;
    documentPath!: string;
    totalHours!: number;
    totalHoursAvailable!: number;
    totalHoursUsed!: number;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}