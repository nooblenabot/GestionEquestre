namespace GestionEquestre.Ge {
    export interface CorCorporateRow {
        Id?: number;
        IsActive?: boolean;
        NotArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Name?: string;
        Phone?: string;
        Gsm?: string;
        OtherPhone1?: string;
        Email1?: string;
        Email2?: string;
        BankAccount?: number;
        IdAdress?: number;
        FrSiren?: string;
        Caption?: string;
        ArchiveDate?: string;
        BankAccountCountryCodeIban?: string;
        BankAccountCheckDigitsIban?: string;
        BankAccountBban?: string;
        BankAccountBic?: string;
        BankAccountAccountOnwer?: string;
        BankAccountBankAdress?: string;
        BankAccountCis?: string;
        BankAccountUrm?: string;
        BankAccountMandateDateSign?: string;
        BankAccountTypePayment?: number;
        BankAccountDateLastPrelevement?: string;
        BankAccountTypeOfLastPayment?: number;
        IdAdressIsActive?: boolean;
        IdAdressNotArchive?: boolean;
        IdAdressInsertDate?: string;
        IdAdressInsertUserId?: number;
        IdAdressUpdateDate?: string;
        IdAdressUpdateUserId?: number;
        IdAdressAdress1?: string;
        IdAdressAdress2?: string;
        IdAdressAdress3?: string;
        IdAdressCity?: number;
        IdAdressCountry?: number;
        IdAdressCedex?: string;
        IdAdressBuilding?: string;
        IdAdressCaption?: string;
        IdAdressArchiveDate?: string;
    }

    export namespace CorCorporateRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Ge.CorCorporate';

        export namespace Fields {
            export declare const Id: string;
            export declare const IsActive: string;
            export declare const NotArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Name: string;
            export declare const Phone: string;
            export declare const Gsm: string;
            export declare const OtherPhone1: string;
            export declare const Email1: string;
            export declare const Email2: string;
            export declare const BankAccount: string;
            export declare const IdAdress: string;
            export declare const FrSiren: string;
            export declare const Caption: string;
            export declare const ArchiveDate: string;
            export declare const BankAccountCountryCodeIban: string;
            export declare const BankAccountCheckDigitsIban: string;
            export declare const BankAccountBban: string;
            export declare const BankAccountBic: string;
            export declare const BankAccountAccountOnwer: string;
            export declare const BankAccountBankAdress: string;
            export declare const BankAccountCis: string;
            export declare const BankAccountUrm: string;
            export declare const BankAccountMandateDateSign: string;
            export declare const BankAccountTypePayment: string;
            export declare const BankAccountDateLastPrelevement: string;
            export declare const BankAccountTypeOfLastPayment: string;
            export declare const IdAdressIsActive: string;
            export declare const IdAdressNotArchive: string;
            export declare const IdAdressInsertDate: string;
            export declare const IdAdressInsertUserId: string;
            export declare const IdAdressUpdateDate: string;
            export declare const IdAdressUpdateUserId: string;
            export declare const IdAdressAdress1: string;
            export declare const IdAdressAdress2: string;
            export declare const IdAdressAdress3: string;
            export declare const IdAdressCity: string;
            export declare const IdAdressCountry: string;
            export declare const IdAdressCedex: string;
            export declare const IdAdressBuilding: string;
            export declare const IdAdressCaption: string;
            export declare const IdAdressArchiveDate: string;
        }

        [
            'Id', 
            'IsActive', 
            'NotArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Name', 
            'Phone', 
            'Gsm', 
            'OtherPhone1', 
            'Email1', 
            'Email2', 
            'BankAccount', 
            'IdAdress', 
            'FrSiren', 
            'Caption', 
            'ArchiveDate', 
            'BankAccountCountryCodeIban', 
            'BankAccountCheckDigitsIban', 
            'BankAccountBban', 
            'BankAccountBic', 
            'BankAccountAccountOnwer', 
            'BankAccountBankAdress', 
            'BankAccountCis', 
            'BankAccountUrm', 
            'BankAccountMandateDateSign', 
            'BankAccountTypePayment', 
            'BankAccountDateLastPrelevement', 
            'BankAccountTypeOfLastPayment', 
            'IdAdressIsActive', 
            'IdAdressNotArchive', 
            'IdAdressInsertDate', 
            'IdAdressInsertUserId', 
            'IdAdressUpdateDate', 
            'IdAdressUpdateUserId', 
            'IdAdressAdress1', 
            'IdAdressAdress2', 
            'IdAdressAdress3', 
            'IdAdressCity', 
            'IdAdressCountry', 
            'IdAdressCedex', 
            'IdAdressBuilding', 
            'IdAdressCaption', 
            'IdAdressArchiveDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

