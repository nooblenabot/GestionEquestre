namespace GestionEquestre.Ge {
    export interface CorCorporateRow {
        Id?: number;
        IsActive?: boolean;
        IsArchive?: boolean;
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

    export namespace CorCorporateRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Ge.CorCorporate';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            IsActive = "IsActive",
            IsArchive = "IsArchive",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            Name = "Name",
            Phone = "Phone",
            Gsm = "Gsm",
            OtherPhone1 = "OtherPhone1",
            Email1 = "Email1",
            Email2 = "Email2",
            BankAccount = "BankAccount",
            IdAdress = "IdAdress",
            FrSiren = "FrSiren",
            Caption = "Caption",
            ArchiveDate = "ArchiveDate",
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

