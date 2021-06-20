import { SheetList } from "./sheetList.model";

export class SheetListUnlock{
    id!: number;
    reason!: string;
    unlockDate!: Date;
    unlockBy!: number;
    sheetListId!: number;
    sheetList!: SheetList;
    created!: Date;
    modfied!: Date;
    createdBy!: string;
    modifiedBy!: string;
    deleted!: boolean;
    active!: boolean;
}