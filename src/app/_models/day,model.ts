import { EmployeeSheetList } from "./employeeSheetList.model";

export class Day{
    id!: number;
    name!: number;
    regularWork!: number;
    overtimeWork!: number;
    nightWork!: number;
    workWeekday!: number;
    workHolidays!: number;
    paidLeave!: number;
    unpaidLeave!: number;
    stimulation!: number;
    breastfeeding!: number;
    paidUp42Days!: number;
    paidOver42Days!: number;
    vacation!: number;
    holidaysPaidHolidays!: number;
    suspension!: number;
    workOnHoliday!: number;
    overtimeWorkOf22!: number;
    overtimeWorkOfnumber6!: number;
    extraordinaryWork!: number;
    workSecondShift!: number;
    doubleWork!: number;
    workTurnus!: number;
    passiveDuty!: number;
    differenceBetweenLessPaidWages!: number;
    differenceBetweenPaidSalary!: number;
    regularWorkOfTrainees!: number;
    suspension15!: number;
    suspension3number!: number;
    employeeSheetListId!: number;
    employeeSheetList!: EmployeeSheetList;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: true;
    active!: true
}