import { Competition } from "./competition.model";
import { Competitor } from "./competitor.model";

export class CompetitionCall{
    id!: number;
    date!: Date;
    address!: string;
    description!: string;
    competitionId!: number;
    competition!: Competition;
    competitorId!: number;
    competitor!: Competitor;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}