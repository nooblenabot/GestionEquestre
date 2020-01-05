namespace GestionEquestre.Ge {
    export interface SetCityForm {
        DefaultValue: Serenity.BooleanEditor;
        IsActive: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUsername: Serenity.StringEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUsername: Serenity.StringEditor;
        FrCodeInsee: Serenity.StringEditor;
        Caption: Serenity.StringEditor;
        City: Serenity.StringEditor;
        PostCode: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
    }

    export class SetCityForm extends Serenity.PrefixedContext {
        static formKey = 'Ge.SetCity';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SetCityForm.init)  {
                SetCityForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(SetCityForm, [
                    'DefaultValue', w0,
                    'IsActive', w0,
                    'InsertDate', w1,
                    'InsertUsername', w2,
                    'UpdateDate', w1,
                    'UpdateUsername', w2,
                    'FrCodeInsee', w2,
                    'Caption', w2,
                    'City', w2,
                    'PostCode', w2,
                    'Country', w3
                ]);
            }
        }
    }
}

