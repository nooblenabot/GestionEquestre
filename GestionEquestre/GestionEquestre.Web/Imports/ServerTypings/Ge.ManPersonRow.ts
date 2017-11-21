namespace GestionEquestre.Ge {
    export interface ManPersonRow {
        Id?: number;
        IsMorale?: boolean;
        IsActive?: boolean;
        IsArchive?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        Surname?: string;
        Name?: string;
        MaidenName?: string;
        BusinessName?: string;
        Birthday?: string;
        Sexe?: number;
        MaritalStatus?: number;
        BirthCity?: number;
        BirthCountry?: number;
        Nationality?: number;
        Photo?: string;
        Phone?: string;
        Gsm?: string;
        WorkPhone?: string;
        OtherPhone1?: string;
        OtherPhone2?: string;
        Email1?: string;
        Email2?: string;
        BankAccount?: number;
        IdAdress?: number;
        Caption?: string;
        ArchiveDate?: string;
        InsertUsername?: string;
        UpdateUsername?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeCaption?: string;
        SexeCivility?: string;
        MaritalStatusDefaultValue?: boolean;
        MaritalStatusIsActive?: boolean;
        MaritalStatusInsertDate?: string;
        MaritalStatusInsertUserId?: number;
        MaritalStatusUpdateDate?: string;
        MaritalStatusUpdateUserId?: number;
        MaritalStatusCaption?: string;
        MaritalStatusCode?: string;
        BirthCityDefaultValue?: boolean;
        BirthCityIsActive?: boolean;
        BirthCityInsertDate?: string;
        BirthCityInsertUserId?: number;
        BirthCityUpdateDate?: string;
        BirthCityUpdateUserId?: number;
        BirthCityFrCodeInsee?: string;
        BirthCityCaption?: string;
        BirthCityCity?: string;
        BirthCityPostCode?: string;
        BirthCityCountry?: number;
        BirthCountryDefaultValue?: boolean;
        BirthCountryIsActive?: boolean;
        BirthCountryInsertDate?: string;
        BirthCountryInsertUserId?: number;
        BirthCountryUpdateDate?: string;
        BirthCountryUpdateUserId?: number;
        BirthCountryName_FR_fr?: string;
        BirthCountryName_EN_gb?: string;
        BirthCountryalpha3?: string;
        BirthCountryalpha2?: string;
        BirthCountryCodeUe?: number;
        BirthCountryISOcode?: string;
        NationalityDefaultValue?: boolean;
        NationalityIsActive?: boolean;
        NationalityInsertDate?: string;
        NationalityInsertUserId?: number;
        NationalityUpdateDate?: string;
        NationalityUpdateUserId?: number;
        NationalityName_FR_fr?: string;
        NationalityName_EN_gb?: string;
        Nationalityalpha3?: string;
        Nationalityalpha2?: string;
        NationalityCodeUe?: number;
        NationalityISOcode?: string;
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
        IdAdressIsArchive?: boolean;
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

    export namespace ManPersonRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Surname';
        export const localTextPrefix = 'Ge.ManPerson';
        export const lookupKey = 'Ge.Persons';

        export function getLookup(): Q.Lookup<ManPersonRow> {
            return Q.getLookup<ManPersonRow>('Ge.Persons');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const IsMorale: string;
            export declare const IsActive: string;
            export declare const IsArchive: string;
            export declare const InsertDate: string;
            export declare const InsertUserId: string;
            export declare const UpdateDate: string;
            export declare const UpdateUserId: string;
            export declare const Surname: string;
            export declare const Name: string;
            export declare const MaidenName: string;
            export declare const BusinessName: string;
            export declare const Birthday: string;
            export declare const Sexe: string;
            export declare const MaritalStatus: string;
            export declare const BirthCity: string;
            export declare const BirthCountry: string;
            export declare const Nationality: string;
            export declare const Photo: string;
            export declare const Phone: string;
            export declare const Gsm: string;
            export declare const WorkPhone: string;
            export declare const OtherPhone1: string;
            export declare const OtherPhone2: string;
            export declare const Email1: string;
            export declare const Email2: string;
            export declare const BankAccount: string;
            export declare const IdAdress: string;
            export declare const Caption: string;
            export declare const ArchiveDate: string;
            export declare const InsertUsername: string;
            export declare const UpdateUsername: string;
            export declare const SexeDefaultValue: string;
            export declare const SexeIsActive: string;
            export declare const SexeInsertDate: string;
            export declare const SexeInsertUserId: string;
            export declare const SexeUpdateDate: string;
            export declare const SexeUpdateUserId: string;
            export declare const SexeCaption: string;
            export declare const SexeCivility: string;
            export declare const MaritalStatusDefaultValue: string;
            export declare const MaritalStatusIsActive: string;
            export declare const MaritalStatusInsertDate: string;
            export declare const MaritalStatusInsertUserId: string;
            export declare const MaritalStatusUpdateDate: string;
            export declare const MaritalStatusUpdateUserId: string;
            export declare const MaritalStatusCaption: string;
            export declare const MaritalStatusCode: string;
            export declare const BirthCityDefaultValue: string;
            export declare const BirthCityIsActive: string;
            export declare const BirthCityInsertDate: string;
            export declare const BirthCityInsertUserId: string;
            export declare const BirthCityUpdateDate: string;
            export declare const BirthCityUpdateUserId: string;
            export declare const BirthCityFrCodeInsee: string;
            export declare const BirthCityCaption: string;
            export declare const BirthCityCity: string;
            export declare const BirthCityPostCode: string;
            export declare const BirthCityCountry: string;
            export declare const BirthCountryDefaultValue: string;
            export declare const BirthCountryIsActive: string;
            export declare const BirthCountryInsertDate: string;
            export declare const BirthCountryInsertUserId: string;
            export declare const BirthCountryUpdateDate: string;
            export declare const BirthCountryUpdateUserId: string;
            export declare const BirthCountryName_FR_fr: string;
            export declare const BirthCountryName_EN_gb: string;
            export declare const BirthCountryalpha3: string;
            export declare const BirthCountryalpha2: string;
            export declare const BirthCountryCodeUe: string;
            export declare const BirthCountryISOcode: string;
            export declare const NationalityDefaultValue: string;
            export declare const NationalityIsActive: string;
            export declare const NationalityInsertDate: string;
            export declare const NationalityInsertUserId: string;
            export declare const NationalityUpdateDate: string;
            export declare const NationalityUpdateUserId: string;
            export declare const NationalityName_FR_fr: string;
            export declare const NationalityName_EN_gb: string;
            export declare const Nationalityalpha3: string;
            export declare const Nationalityalpha2: string;
            export declare const NationalityCodeUe: string;
            export declare const NationalityISOcode: string;
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
            export declare const IdAdressIsArchive: string;
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
            'IsMorale', 
            'IsActive', 
            'IsArchive', 
            'InsertDate', 
            'InsertUserId', 
            'UpdateDate', 
            'UpdateUserId', 
            'Surname', 
            'Name', 
            'MaidenName', 
            'BusinessName', 
            'Birthday', 
            'Sexe', 
            'MaritalStatus', 
            'BirthCity', 
            'BirthCountry', 
            'Nationality', 
            'Photo', 
            'Phone', 
            'Gsm', 
            'WorkPhone', 
            'OtherPhone1', 
            'OtherPhone2', 
            'Email1', 
            'Email2', 
            'BankAccount', 
            'IdAdress', 
            'Caption', 
            'ArchiveDate', 
            'InsertUsername', 
            'UpdateUsername', 
            'SexeDefaultValue', 
            'SexeIsActive', 
            'SexeInsertDate', 
            'SexeInsertUserId', 
            'SexeUpdateDate', 
            'SexeUpdateUserId', 
            'SexeCaption', 
            'SexeCivility', 
            'MaritalStatusDefaultValue', 
            'MaritalStatusIsActive', 
            'MaritalStatusInsertDate', 
            'MaritalStatusInsertUserId', 
            'MaritalStatusUpdateDate', 
            'MaritalStatusUpdateUserId', 
            'MaritalStatusCaption', 
            'MaritalStatusCode', 
            'BirthCityDefaultValue', 
            'BirthCityIsActive', 
            'BirthCityInsertDate', 
            'BirthCityInsertUserId', 
            'BirthCityUpdateDate', 
            'BirthCityUpdateUserId', 
            'BirthCityFrCodeInsee', 
            'BirthCityCaption', 
            'BirthCityCity', 
            'BirthCityPostCode', 
            'BirthCityCountry', 
            'BirthCountryDefaultValue', 
            'BirthCountryIsActive', 
            'BirthCountryInsertDate', 
            'BirthCountryInsertUserId', 
            'BirthCountryUpdateDate', 
            'BirthCountryUpdateUserId', 
            'BirthCountryName_FR_fr', 
            'BirthCountryName_EN_gb', 
            'BirthCountryalpha3', 
            'BirthCountryalpha2', 
            'BirthCountryCodeUe', 
            'BirthCountryISOcode', 
            'NationalityDefaultValue', 
            'NationalityIsActive', 
            'NationalityInsertDate', 
            'NationalityInsertUserId', 
            'NationalityUpdateDate', 
            'NationalityUpdateUserId', 
            'NationalityName_FR_fr', 
            'NationalityName_EN_gb', 
            'Nationalityalpha3', 
            'Nationalityalpha2', 
            'NationalityCodeUe', 
            'NationalityISOcode', 
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
            'IdAdressIsArchive', 
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

