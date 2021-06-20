import { Currency } from "./currency.model";

export class Seminar{
    id!: number;
    code!: string;
    name!: string;
    startDate!: Date;
    endDate!: Date;
    count!: number;
    price!: number;
    address!: string;
    description!: string;
    totalPrice!: number;
    type!: string;
    currencyId!: number;
    currency!: Currency;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}