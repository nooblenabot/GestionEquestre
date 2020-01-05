namespace GestionEquestre.Ge {
    export interface CorEtabForm {
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
        FrSiret: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    export class CorEtabForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.CorEtab';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CorEtabForm.init)  {
                CorEtabForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.StringEditor;

                Q.initFormType(CorEtabForm, [
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
                    'FrSiret', w3,
                    'Caption', w3,
                    'ArchiveDate', w1
                ]);
            }
        }
    }
}

