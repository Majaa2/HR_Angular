import { Certificate } from "./certificate.model";
import { Currency } from "./currency.model";

export class Exam{
    id!: number;
    code!: string;
    name!: string;
    price!: number;
    certificateId!: number;
    certificate!: Certificate;
    currencyId!: number;
    currency!: Currency;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}