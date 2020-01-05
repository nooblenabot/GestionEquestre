namespace GestionEquestre.Ge {
    export interface AccBankaccountRow {
        Id?: number;
        CountryCodeIban?: string;
        CheckDigitsIban?: string;
        Bban?: string;
        Bic?: string;
        AccountOnwer?: string;
        BankAdress?: string;
        Cis?: string;
        Urm?: string;
        MandateDateSign?: string;
        TypePayment?: number;
        DateLastPrelevement?: string;
        TypeOfLastPayment?: number;
    }

    export namespace AccBankaccountRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CountryCodeIban';
        export const localTextPrefix = 'Ge.AccBankaccount';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CountryCodeIban = "CountryCodeIban",
            CheckDigitsIban = "CheckDigitsIban",
            Bban = "Bban",
            Bic = "Bic",
            AccountOnwer = "AccountOnwer",
            BankAdress = "BankAdress",
            Cis = "Cis",
            Urm = "Urm",
            MandateDateSign = "MandateDateSign",
            TypePayment = "TypePayment",
            DateLastPrelevement = "DateLastPrelevement",
            TypeOfLastPayment = "TypeOfLastPayment"
        }
    }
}

