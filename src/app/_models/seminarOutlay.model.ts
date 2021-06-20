import { Seminar } from "./seminar.model";

export class SeminarOutlay{
    id!: number;
    seminarId!: number;
    seminar!: Seminar;
    name!: string;
    price!: number;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}