import { Employee } from "./employee.model";

export class EmployeeLanguage{
    id!: number;
    languageName!: string;
    languageLevel!: string;
    employeeId!: number;
    employee!: Employee;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: true;
    active!: true;
}