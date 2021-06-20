import { Department } from "./department.model";

export class SheetList{
    id!: number;
    name!: string;
    year!: number
    status!: string;
    departmentId!: number;
    department!: Department;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}