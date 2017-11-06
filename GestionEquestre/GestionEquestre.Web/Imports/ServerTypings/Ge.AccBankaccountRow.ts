
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
            export declare const Id;
            export declare const CountryCodeIban;
            export declare const CheckDigitsIban;
            export declare const Bban;
            export declare const Bic;
            export declare const AccountOnwer;
            export declare const BankAdress;
            export declare const Cis;
            export declare const Urm;
            export declare const MandateDateSign;
            export declare const TypePayment;
            export declare const DateLastPrelevement;
            export declare const TypeOfLastPayment;
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