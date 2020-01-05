namespace GestionEquestre.Ge {
    export interface ManAdressForm {
        IsActive: Serenity.BooleanEditor;
        IsArchive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Adress1: Serenity.StringEditor;
        Adress2: Serenity.StringEditor;
        Adress3: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.IntegerEditor;
        Cedex: Serenity.StringEditor;
        Building: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        ArchiveDate: Serenity.DateEditor;
    }

    export class ManAdressForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.ManAdress';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManAdressForm.init)  {
                ManAdressForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(ManAdressForm, [
                    'IsActive', w0,
                    'IsArchive', w0,
                    'InsertDate', w1,
                    'InsertUsername', w2,
                    'UpdateDate', w1,
                    'UpdateUsername', w2,
                    'Adress1', w2,
                    'Adress2', w2,
                    'Adress3', w2,
                    'City', w2,
                    'Country', w3,
                    'Cedex', w2,
                    'Building', w2,
                    'Caption', w2,
                    'ArchiveDate', w1
                ]);
            }
        }
    }
}

