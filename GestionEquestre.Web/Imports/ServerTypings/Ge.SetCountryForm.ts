namespace GestionEquestre.Ge {
    export interface SetCountryForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        Name_FR_fr: Serenity.StringEditor;
        Name_EN_gb: Serenity.StringEditor;
        alpha3: Serenity.StringEditor;
        alpha2: Serenity.StringEditor;
        CodeUe: Serenity.IntegerEditor;
        ISOcode: Serenity.StringEditor;
    }

    export class SetCountryForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetCountry';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SetCountryForm.init)  {
                SetCountryForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(SetCountryForm, [
                    'DefaultValue', w0,
                    'IsActive', w0,
                    'InsertDate', w1,
                    'InsertUsername', w2,
                    'UpdateDate', w1,
                    'UpdateUsername', w2,
                    'Name_FR_fr', w2,
                    'Name_EN_gb', w2,
                    'alpha3', w2,
                    'alpha2', w2,
                    'CodeUe', w3,
                    'ISOcode', w2
                ]);
            }
        }
    }
}

