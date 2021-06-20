import { Employee } from "./employee.model";
import { ExpenseType } from "./expenseType.model";

export class Expense{
    id!: number;
    name!: string;
    amount!: number;
    date!: Date;
    employeeId!: number;
    employee!: Employee;
    expenseTypesId!: number;
    expenseType!: ExpenseType;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}