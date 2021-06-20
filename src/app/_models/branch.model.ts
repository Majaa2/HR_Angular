import { City } from "./city.model";

export class Branch{
    id!: number;
    name!: string;
    address!: string;
    number!: number;
    cityId!: number;
    city!: City;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean; 
}