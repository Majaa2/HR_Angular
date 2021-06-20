import { Competitor } from "./competitor.model";

export class CompetitorLanguage{
    id!: number;
    languageName!: string;
    languageLevel!: string;
    competitorId!: number;
    competitor!: Competitor;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}