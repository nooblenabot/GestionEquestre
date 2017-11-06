
namespace GestionEquestre.Ge {
    export interface ManPersonRow {
        Id?: string;
        IsMorale?: boolean;
        IsActive?: boolean;
        NotArchive?: boolean;
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
        BirthCity?: string;
        BirthCountry?: string;
        Nationality?: string;
        Photo?: number[];
        Phone?: string;
        Gsm?: string;
        WorkPhone?: string;
        OtherPhone1?: string;
        OtherPhone2?: string;
        Email1?: string;
        Email2?: string;
        BankAccount?: string;
        IdAdress?: string;
        Caption?: string;
        ArchiveDate?: string;
        SexeDefaultValue?: boolean;
        SexeIsActive?: boolean;
        SexeReadOnly?: boolean;
        SexeInsertDate?: string;
        SexeInsertUserId?: number;
        SexeUpdateDate?: string;
        SexeUpdateUserId?: number;
        SexeCaption?: string;
        SexeCivility?: string;
        MaritalStatusDefaultValue?: boolean;
        MaritalStatusIsActive?: boolean;
        MaritalStatusReadOnly?: boolean;
        MaritalStatusInsertDate?: string;
        MaritalStatusInsertUserId?: number;
        MaritalStatusUpdateDate?: string;
        MaritalStatusUpdateUserId?: number;
        MaritalStatusCaption?: string;
        MaritalStatusCode?: string;
        BirthCityDefaultValue?: boolean;
        BirthCityIsActive?: boolean;
        BirthCityReadOnly?: boolean;
        BirthCityInsertDate?: string;
        BirthCityInsertUserId?: number;
        BirthCityUpdateDate?: string;
        BirthCityUpdateUserId?: number;
        BirthCityFrCodeInsee?: string;
        BirthCityCaption?: string;
        BirthCityCity?: string;
        BirthCityPostCode?: string;
        BirthCityCountry?: string;
        BirthCountryDefaultValue?: boolean;
        BirthCountryIsActive?: boolean;
        BirthCountryReadOnly?: boolean;
        BirthCountryInsertDate?: string;
        BirthCountryInsertUserId?: number;
        BirthCountryUpdateDate?: string;
        BirthCountryUpdateUserId?: number;
        BirthCountryCountry?: string;
        BirthCountryCode?: string;
        BirthCountryCodeUe?: number;
        BirthCountryIso3166Country?: string;
        NationalityDefaultValue?: boolean;
        NationalityIsActive?: boolean;
        NationalityReadOnly?: boolean;
        NationalityInsertDate?: string;
        NationalityInsertUserId?: number;
        NationalityUpdateDate?: string;
        NationalityUpdateUserId?: number;
        NationalityCountry?: string;
        NationalityCode?: string;
        NationalityCodeUe?: number;
        NationalityIso3166Country?: string;
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
        IdAdressCity?: string;
        IdAdressCountry?: string;
        IdAdressCedex?: string;
        IdAdressBuilding?: string;
        IdAdressCaption?: string;
        IdAdressArchiveDate?: string;
    }

    export namespace ManPersonRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Surname';
        export const localTextPrefix = 'Ge.ManPerson';

        export namespace Fields {
            export declare const Id;
            export declare const IsMorale;
            export declare const IsActive;
            export declare const NotArchive;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const Surname;
            export declare const Name;
            export declare const MaidenName;
            export declare const BusinessName;
            export declare const Birthday;
            export declare const Sexe;
            export declare const MaritalStatus;
            export declare const BirthCity;
            export declare const BirthCountry;
            export declare const Nationality;
            export declare const Photo;
            export declare const Phone;
            export declare const Gsm;
            export declare const WorkPhone;
            export declare const OtherPhone1;
            export declare const OtherPhone2;
            export declare const Email1;
            export declare const Email2;
            export declare const BankAccount;
            export declare const IdAdress;
            export declare const Caption;
            export declare const ArchiveDate;
            export declare const SexeDefaultValue;
            export declare const SexeIsActive;
            export declare const SexeReadOnly;
            export declare const SexeInsertDate;
            export declare const SexeInsertUserId;
            export declare const SexeUpdateDate;
            export declare const SexeUpdateUserId;
            export declare const SexeCaption;
            export declare const SexeCivility;
            export declare const MaritalStatusDefaultValue;
            export declare const MaritalStatusIsActive;
            export declare const MaritalStatusReadOnly;
            export declare const MaritalStatusInsertDate;
            export declare const MaritalStatusInsertUserId;
            export declare const MaritalStatusUpdateDate;
            export declare const MaritalStatusUpdateUserId;
            export declare const MaritalStatusCaption;
            export declare const MaritalStatusCode;
            export declare const BirthCityDefaultValue;
            export declare const BirthCityIsActive;
            export declare const BirthCityReadOnly;
            export declare const BirthCityInsertDate;
            export declare const BirthCityInsertUserId;
            export declare const BirthCityUpdateDate;
            export declare const BirthCityUpdateUserId;
            export declare const BirthCityFrCodeInsee;
            export declare const BirthCityCaption;
            export declare const BirthCityCity;
            export declare const BirthCityPostCode;
            export declare const BirthCityCountry;
            export declare const BirthCountryDefaultValue;
            export declare const BirthCountryIsActive;
            export declare const BirthCountryReadOnly;
            export declare const BirthCountryInsertDate;
            export declare const BirthCountryInsertUserId;
            export declare const BirthCountryUpdateDate;
            export declare const BirthCountryUpdateUserId;
            export declare const BirthCountryCountry;
            export declare const BirthCountryCode;
            export declare const BirthCountryCodeUe;
            export declare const BirthCountryIso3166Country;
            export declare const NationalityDefaultValue;
            export declare const NationalityIsActive;
            export declare const NationalityReadOnly;
            export declare const NationalityInsertDate;
            export declare const NationalityInsertUserId;
            export declare const NationalityUpdateDate;
            export declare const NationalityUpdateUserId;
            export declare const NationalityCountry;
            export declare const NationalityCode;
            export declare const NationalityCodeUe;
            export declare const NationalityIso3166Country;
            export declare const BankAccountCountryCodeIban;
            export declare const BankAccountCheckDigitsIban;
            export declare const BankAccountBban;
            export declare const BankAccountBic;
            export declare const BankAccountAccountOnwer;
            export declare const BankAccountBankAdress;
            export declare const BankAccountCis;
            export declare const BankAccountUrm;
            export declare const BankAccountMandateDateSign;
            export declare const BankAccountTypePayment;
            export declare const BankAccountDateLastPrelevement;
            export declare const BankAccountTypeOfLastPayment;
            export declare const IdAdressIsActive;
            export declare const IdAdressNotArchive;
            export declare const IdAdressInsertDate;
            export declare const IdAdressInsertUserId;
            export declare const IdAdressUpdateDate;
            export declare const IdAdressUpdateUserId;
            export declare const IdAdressAdress1;
            export declare const IdAdressAdress2;
            export declare const IdAdressAdress3;
            export declare const IdAdressCity;
            export declare const IdAdressCountry;
            export declare const IdAdressCedex;
            export declare const IdAdressBuilding;
            export declare const IdAdressCaption;
            export declare const IdAdressArchiveDate;
        }

        [
            'Id',
            'IsMorale',
            'IsActive',
            'NotArchive',
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
            'SexeDefaultValue',
            'SexeIsActive',
            'SexeReadOnly',
            'SexeInsertDate',
            'SexeInsertUserId',
            'SexeUpdateDate',
            'SexeUpdateUserId',
            'SexeCaption',
            'SexeCivility',
            'MaritalStatusDefaultValue',
            'MaritalStatusIsActive',
            'MaritalStatusReadOnly',
            'MaritalStatusInsertDate',
            'MaritalStatusInsertUserId',
            'MaritalStatusUpdateDate',
            'MaritalStatusUpdateUserId',
            'MaritalStatusCaption',
            'MaritalStatusCode',
            'BirthCityDefaultValue',
            'BirthCityIsActive',
            'BirthCityReadOnly',
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
            'BirthCountryReadOnly',
            'BirthCountryInsertDate',
            'BirthCountryInsertUserId',
            'BirthCountryUpdateDate',
            'BirthCountryUpdateUserId',
            'BirthCountryCountry',
            'BirthCountryCode',
            'BirthCountryCodeUe',
            'BirthCountryIso3166Country',
            'NationalityDefaultValue',
            'NationalityIsActive',
            'NationalityReadOnly',
            'NationalityInsertDate',
            'NationalityInsertUserId',
            'NationalityUpdateDate',
            'NationalityUpdateUserId',
            'NationalityCountry',
            'NationalityCode',
            'NationalityCodeUe',
            'NationalityIso3166Country',
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