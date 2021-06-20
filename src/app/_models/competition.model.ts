import { Work } from "./work.model";

export class Competition{
    id!: number;
    code!: string;
    title!: string;
    startDate!: Date;
    endDate!: Date;
    maxMember!: number;
    text!: string;
    passFirstRoundDate!: Date;
    passFirstRoundMembers!: number;
    passSecondRoundMembers!: number;
    passSecondRoundDate!: Date;
    workId!: number;
    work!: Work;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}