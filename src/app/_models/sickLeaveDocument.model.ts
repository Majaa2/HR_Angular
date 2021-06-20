import { SickLeave } from "./sickLeave.model";

export class SickLeaveDocument{
    id!: number;
    name!: string;
    type!: string;
    size!: number;
    path!: string;
    sickLeaveId!: number;
    sickLeave!: SickLeave;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: true;
    active!: true;
}