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
        FullName?: string;
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
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Ge.ManPerson';
        export const lookupKey = 'Ge.Persons';

        export function getLookup(): Q.Lookup<ManPersonRow> {
            return Q.getLookup<ManPersonRow>('Ge.Persons');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IsMorale = "IsMorale",
            IsActive = "IsActive",
            IsArchive = "IsArchive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            Surname = "Surname",
            Name = "Name",
            MaidenName = "MaidenName",
            FullName = "FullName",
            BusinessName = "BusinessName",
            Birthday = "Birthday",
            Sexe = "Sexe",
            MaritalStatus = "MaritalStatus",
            BirthCity = "BirthCity",
            BirthCountry = "BirthCountry",
            Nationality = "Nationality",
            Photo = "Photo",
            Phone = "Phone",
            Gsm = "Gsm",
            WorkPhone = "WorkPhone",
            OtherPhone1 = "OtherPhone1",
            OtherPhone2 = "OtherPhone2",
            Email1 = "Email1",
            Email2 = "Email2",
            BankAccount = "BankAccount",
            IdAdress = "IdAdress",
            Caption = "Caption",
            ArchiveDate = "ArchiveDate",
            InsertUsername = "InsertUsername",
            UpdateUsername = "UpdateUsername",
            SexeDefaultValue = "SexeDefaultValue",
            SexeIsActive = "SexeIsActive",
            SexeInsertDate = "SexeInsertDate",
            SexeInsertUserId = "SexeInsertUserId",
            SexeUpdateDate = "SexeUpdateDate",
            SexeUpdateUserId = "SexeUpdateUserId",
            SexeCaption = "SexeCaption",
            SexeCivility = "SexeCivility",
            MaritalStatusDefaultValue = "MaritalStatusDefaultValue",
            MaritalStatusIsActive = "MaritalStatusIsActive",
            MaritalStatusInsertDate = "MaritalStatusInsertDate",
            MaritalStatusInsertUserId = "MaritalStatusInsertUserId",
            MaritalStatusUpdateDate = "MaritalStatusUpdateDate",
            MaritalStatusUpdateUserId = "MaritalStatusUpdateUserId",
            MaritalStatusCaption = "MaritalStatusCaption",
            MaritalStatusCode = "MaritalStatusCode",
            BirthCityDefaultValue = "BirthCityDefaultValue",
            BirthCityIsActive = "BirthCityIsActive",
            BirthCityInsertDate = "BirthCityInsertDate",
            BirthCityInsertUserId = "BirthCityInsertUserId",
            BirthCityUpdateDate = "BirthCityUpdateDate",
            BirthCityUpdateUserId = "BirthCityUpdateUserId",
            BirthCityFrCodeInsee = "BirthCityFrCodeInsee",
            BirthCityCaption = "BirthCityCaption",
            BirthCityCity = "BirthCityCity",
            BirthCityPostCode = "BirthCityPostCode",
            BirthCityCountry = "BirthCityCountry",
            BirthCountryDefaultValue = "BirthCountryDefaultValue",
            BirthCountryIsActive = "BirthCountryIsActive",
            BirthCountryInsertDate = "BirthCountryInsertDate",
            BirthCountryInsertUserId = "BirthCountryInsertUserId",
            BirthCountryUpdateDate = "BirthCountryUpdateDate",
            BirthCountryUpdateUserId = "BirthCountryUpdateUserId",
            BirthCountryName_FR_fr = "BirthCountryName_FR_fr",
            BirthCountryName_EN_gb = "BirthCountryName_EN_gb",
            BirthCountryalpha3 = "BirthCountryalpha3",
            BirthCountryalpha2 = "BirthCountryalpha2",
            BirthCountryCodeUe = "BirthCountryCodeUe",
            BirthCountryISOcode = "BirthCountryISOcode",
            NationalityDefaultValue = "NationalityDefaultValue",
            NationalityIsActive = "NationalityIsActive",
            NationalityInsertDate = "NationalityInsertDate",
            NationalityInsertUserId = "NationalityInsertUserId",
            NationalityUpdateDate = "NationalityUpdateDate",
            NationalityUpdateUserId = "NationalityUpdateUserId",
            NationalityName_FR_fr = "NationalityName_FR_fr",
            NationalityName_EN_gb = "NationalityName_EN_gb",
            Nationalityalpha3 = "Nationalityalpha3",
            Nationalityalpha2 = "Nationalityalpha2",
            NationalityCodeUe = "NationalityCodeUe",
            NationalityISOcode = "NationalityISOcode",
            BankAccountCountryCodeIban = "BankAccountCountryCodeIban",
            BankAccountCheckDigitsIban = "BankAccountCheckDigitsIban",
            BankAccountBban = "BankAccountBban",
            BankAccountBic = "BankAccountBic",
            BankAccountAccountOnwer = "BankAccountAccountOnwer",
            BankAccountBankAdress = "BankAccountBankAdress",
            BankAccountCis = "BankAccountCis",
            BankAccountUrm = "BankAccountUrm",
            BankAccountMandateDateSign = "BankAccountMandateDateSign",
            BankAccountTypePayment = "BankAccountTypePayment",
            BankAccountDateLastPrelevement = "BankAccountDateLastPrelevement",
            BankAccountTypeOfLastPayment = "BankAccountTypeOfLastPayment",
            IdAdressIsActive = "IdAdressIsActive",
            IdAdressIsArchive = "IdAdressIsArchive",
            IdAdressInsertDate = "IdAdressInsertDate",
            IdAdressInsertUserId = "IdAdressInsertUserId",
            IdAdressUpdateDate = "IdAdressUpdateDate",
            IdAdressUpdateUserId = "IdAdressUpdateUserId",
            IdAdressAdress1 = "IdAdressAdress1",
            IdAdressAdress2 = "IdAdressAdress2",
            IdAdressAdress3 = "IdAdressAdress3",
            IdAdressCity = "IdAdressCity",
            IdAdressCountry = "IdAdressCountry",
            IdAdressCedex = "IdAdressCedex",
            IdAdressBuilding = "IdAdressBuilding",
            IdAdressCaption = "IdAdressCaption",
            IdAdressArchiveDate = "IdAdressArchiveDate"
        }
    }
}

