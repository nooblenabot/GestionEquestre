namespace GestionEquestre.Ge {
    export interface CorCorporateForm {
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Gsm: Serenity.StringEditor;
        OtherPhone1: Serenity.StringEditor;
        Email1: Serenity.StringEditor;
        Email2: Serenity.StringEditor;
        BankAccount: Serenity.StringEditor;
        IdAdress: Serenity.StringEditor;
        FrSiren: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    export class CorCorporateForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.CorCorporate';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CorCorporateForm.init)  {
                CorCorporateForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.StringEditor;

                Q.initFormType(CorCorporateForm, [
                    'IsActive', w0,
                    'IsArchive', w0,
                    'InsertDate', w1,
                    'InsertUserId', w2,
                    'UpdateDate', w1,
                    'UpdateUserId', w2,
                    'Name', w3,
                    'Phone', w3,
                    'Gsm', w3,
                    'OtherPhone1', w3,
                    'Email1', w3,
                    'Email2', w3,
                    'BankAccount', w3,
                    'IdAdress', w3,
                    'FrSiren', w3,
                    'Caption', w3,
                    'ArchiveDate', w1
                ]);
            }
        }
    }
}

