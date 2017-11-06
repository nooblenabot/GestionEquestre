namespace GestionEquestre.Ge {
    export interface AccBankaccountRow {
        Id?: string;
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

        export namespace Fields {
            export declare const Id: string;
            export declare const CountryCodeIban: string;
            export declare const CheckDigitsIban: string;
            export declare const Bban: string;
            export declare const Bic: string;
            export declare const AccountOnwer: string;
            export declare const BankAdress: string;
            export declare const Cis: string;
            export declare const Urm: string;
            export declare const MandateDateSign: string;
            export declare const TypePayment: string;
            export declare const DateLastPrelevement: string;
            export declare const TypeOfLastPayment: string;
        }

        [
            'Id', 
            'CountryCodeIban', 
            'CheckDigitsIban', 
            'Bban', 
            'Bic', 
            'AccountOnwer', 
            'BankAdress', 
            'Cis', 
            'Urm', 
            'MandateDateSign', 
            'TypePayment', 
            'DateLastPrelevement', 
            'TypeOfLastPayment'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

