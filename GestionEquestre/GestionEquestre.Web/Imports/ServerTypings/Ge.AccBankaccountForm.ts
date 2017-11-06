namespace GestionEquestre.Ge {
    export class AccBankaccountForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.AccBankaccount';

    }

    export interface AccBankaccountForm {
        CountryCodeIban: Serenity.StringEditor;
        CheckDigitsIban: Serenity.StringEditor;
        Bban: Serenity.StringEditor;
        Bic: Serenity.StringEditor;
        AccountOnwer: Serenity.StringEditor;
        BankAdress: Serenity.StringEditor;
        Cis: Serenity.StringEditor;
        Urm: Serenity.StringEditor;
        MandateDateSign: Serenity.DateEditor;
        TypePayment: Serenity.IntegerEditor;
        DateLastPrelevement: Serenity.DateEditor;
        TypeOfLastPayment: Serenity.IntegerEditor;
    }

    [['CountryCodeIban', () => Serenity.StringEditor], ['CheckDigitsIban', () => Serenity.StringEditor], ['Bban', () => Serenity.StringEditor], ['Bic', () => Serenity.StringEditor], ['AccountOnwer', () => Serenity.StringEditor], ['BankAdress', () => Serenity.StringEditor], ['Cis', () => Serenity.StringEditor], ['Urm', () => Serenity.StringEditor], ['MandateDateSign', () => Serenity.DateEditor], ['TypePayment', () => Serenity.IntegerEditor], ['DateLastPrelevement', () => Serenity.DateEditor], ['TypeOfLastPayment', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AccBankaccountForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

