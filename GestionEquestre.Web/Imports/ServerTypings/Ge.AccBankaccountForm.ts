namespace GestionEquestre.Ge {
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

    export class AccBankaccountForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.AccBankaccount';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccBankaccountForm.init)  {
                AccBankaccountForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(AccBankaccountForm, [
                    'CountryCodeIban', w0,
                    'CheckDigitsIban', w0,
                    'Bban', w0,
                    'Bic', w0,
                    'AccountOnwer', w0,
                    'BankAdress', w0,
                    'Cis', w0,
                    'Urm', w0,
                    'MandateDateSign', w1,
                    'TypePayment', w2,
                    'DateLastPrelevement', w1,
                    'TypeOfLastPayment', w2
                ]);
            }
        }
    }
}

