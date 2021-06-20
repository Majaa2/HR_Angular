import { Competition } from "./competition.model";
import { Competitor } from "./competitor.model";
import { Work } from "./work.model";

export class CompetitionCompetitor{
    id!: number;
    received!: Date;
    passFirstRound!: boolean;
    passDateFirstRound!: Date;
    passSecondRound!: boolean;
    passDateSecondRound!: Date;
    competitionId!: number;
    competition!: Competition;
    competitorId!: number;
    competitor!:Competitor;
    workId!: number;
    work!: Work;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}