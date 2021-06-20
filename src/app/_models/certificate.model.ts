import { Currency } from "./currency.model";
import { Employee } from "./employee.model";
import { Vendor } from "./vendor.model";

export class Certificate{
    id!: number;
    name!: string;
    priceTotal!: number;
    code!: string;
    type!: string;
    category!: string;
    valid!: number;
    employeeCertificateDeadlinDate!: Date;
    employeeCertificateExpires!: Date;
    employeeCertificateAllotDate!: Date;
    employeeCertificateStatus!: string;
    employeeCertificateComplete!: Date;
    vendorId!: number;
    vendor!: Vendor;
    employeeId!: number;
    employee!: Employee;
    currencyId!: number;
    currency!: Currency;;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean
}