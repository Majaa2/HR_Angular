import { City } from "./city.model";

export class Competitor{
    id!: number;
    name!: string;
    lastName!: string;
    sex!: string;
    birthDate!: Date;
    drivingLicence!: string;
    phoneNumber!: string;
    email!: string;
    address!: string;
    qualificaations!: string;
    profession!: string;
    specialKnowledgeAndSkills!: string;
    dateOfRegistration!: Date;
    cityId!: number;
    city!: City;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}